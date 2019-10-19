import React, { Component } from 'react';

export class CartDetailRow extends Component {

	handleChange = (product,ev) => {
		this.props.updateCartQuantity(product,ev.target.value);
	}

	render() {

		if(!this.props.cart || this.props.cart.length === 0) {
			return <tr>
					<td colSpan="5" className="text-center">your cart empty</td>
				  </tr>
		} else {

			return <>
			 {this.props.cart.map(item =>
			<tr key={item.product.id}>
				<td>
					<input type="number" value={item.quantity}
					  onChange={(ev) => this.handleChange(item.product,ev)} />
				</td>
				<td>{item.product.name}</td>
				<td>{item.product.price}</td>
				<td>{item.quantity*item.product.price}</td>
				<td>
					<button className="btn btn-danger"
							onClick={() => this.props.removeFromCart(item.product)}>
						Remove
					</button>
				</td>
			</tr> )}
			 <tr>
			 	<td colSpan="3" className="text-right">Total:</td>
			 	<td colSpan="2"> 
			 	${Number(this.props.cartPrice).toFixed(2)}
			 	</td>
			 </tr>
			 </>
		}

	}
}