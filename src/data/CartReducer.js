import { actionType } from './Type';

export const CartReducer = (store, action) => {
	let newStore = {cart:[], cartItems:0, cartPrice:0,...store}
	switch(action.type) {
		case actionType.CART_ADD:
		const p = action.payload.product;
		const q = action.payload.quantity;
		const existing = newStore.cart.find(item => item.product.id === p.id);
		if(existing) {
			existing.quantity = Number(existing.quantity) + q;
		} else {
			newStore.cart = [...newStore.cart, action.payload];
		}
			newStore.cartItems += q;
			newStore.cartPrice += q*p.price;
			return newStore;
		case actionType.CART_UPDATE:
			newStore.cart = newStore.cart.map(item => {
				if (item.product.id === action.payload.product.id) {
					const diff = action.payload.quantity - item.quantity;
					newStore.cartItems += diff;
					newStore.cartPrice += (diff*item.product.price);
					return action.payload;
				} else {
					return item;
				}
			})
			return newStore;
		case actionType.CART_REMOVE:
			let selection = newStore.cart.find(item => 
				item.product.id === action.payload.id);
			newStore.cartItems -= selection.quantity;
			newStore.cartPrice -= (selection.quantity*selection.product.price);
			newStore.cart = newStore.cart.filter(item => item.product.id !== selection.product.id);
			return newStore;
		case actionType.CART_CLEAR:
			return {...store, cart:[], cartItems:0, cartPrice:0};
		default:
			return store || {};

	}
}