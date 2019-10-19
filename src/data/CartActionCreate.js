import { actionType } from './Type';

export const addToCart = (product,quantity) => ({
	type:actionType.CART_ADD,
	payload:{
		product: product,
		quantity: quantity || 1
	}
});

export const updateCartQuantity = (product,quantity) => ({
	type: actionType.CART_UPDATE,
	payload: {
		product: product,
		quantity: quantity
	}
});

export const removeFromCart = (product) => ({
	type: actionType.CART_REMOVE,
	payload: product
});

export const clearCart = () => ({
	type: actionType.CART_CLEAR
});