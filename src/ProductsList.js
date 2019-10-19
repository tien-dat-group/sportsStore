import React, { Component } from 'react';

export class ProductsList extends Component {

	render() {
		console.log("ProductsList render()");
		if (!this.props.products || this.props.products.length === 0) {
			return <h5 className="p-2"> No products </h5>
		}

		return this.props.products.map(p => 
			<div className="cart m-1 p-1 bg-light" key={p.id}>
				<h4>
					{p.name}
					<span className="badge badge-bill badge-primary float-right">
						${p.price.toFixed(2)}
					</span>
				</h4>
				<div className="cart-text bg-white p-1">
					{p.description}
					<button className="btn btn-success btn-sm float-right"
							onClick={() => {this.props.addToCart(p)} }>
						Add to cart
					</button>
				</div>
			</div>)
	}
}