import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartDetailRow } from './CartDetailRow';

export class CartDetail extends Component {

	getClasses = () => `btn btn-secondary m-1 
			${(!this.props.cart || this.props.cart.length === 0) ? "disabled" : ""}`

	render() {
		return <> 
		<h2 className="text-center">Your Cart</h2>
		<table className="table table-bordered table-striped">
			<thead>
				<tr>
					<th>Quantity</th>
					<th>Product</th>
					<th>Price</th>
					<th>Subtotal</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<CartDetailRow cart= {this.props.cart}
							   cartPrice={this.props.cartPrice}
							   updateCartQuantity={this.props.updateCartQuantity} 
							   removeFromCart={this.props.removeFromCart}/>
			</tbody>
		</table>
		<div className="text-center">
		<Link to="/shop/products"
			  className="btn btn-primary m-1">
		Continue Shopping
		</Link>
		<Link to="/shop/checkout"
			  className={ this.getClasses() }>
		Check out
		</Link>

		</div>
		</>
	}
}