import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CartSummary extends Component {
	
	getSummary = () => {
		if(this.props.cartItems > 0) {
			return <span>
				{this.props.cartItems} item(s),
				${ Number(this.props.cartPrice).toFixed(2) }
				</span>
		} else {
			return <span> Your Cart: (emty) </span>
		}
	}

	getLinkClasses = () => {
		return `btn btn-sm text-white bg-dark ${
			(!this.props.cartItems || this.props.cartItems === 0) ? "disabled" : ""
		}`;
	}

	render() {
		return <div className="float-right">
			<small>
				{this.getSummary()}
				<Link to="/shop/cart" 
					className={this.getLinkClasses()}> 
				<i className="fa fa-shopping-cart"></i>
				</Link>
			</small>
		</div>
	}
}