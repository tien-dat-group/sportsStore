import React, { Component } from 'react';
import { CategoriesNavigate } from './CategoriesNavigate';
import { ProductsList } from './ProductsList';
import { CartSummary } from './CartSummary';
import { ProductPageConnector } from './ProductPageConnector';
import { PaginationControls } from './PaginationControls';

const ProductsPage = ProductPageConnector(PaginationControls);

export class Shop extends Component {

	render() {
		console.log("Shop render()")
		return <div className="container-fluid">
				<div className="row">
					<div className="col bg-dark text-white">
						<div className="navbar-brand">
						 SPORTS STORE
						</div>
						<CartSummary {...this.props} />
					</div>
				</div>
				<div className="row">
					<div className="col-3 p-2">
						<CategoriesNavigate baseUrl="/shop/products" 
									categories = {this.props.categories}/>
					</div>
					<div className="col-9 p-2">
						<ProductsPage />
						<ProductsList products={this.props.products}
									 addToCart={this.props.addToCart}/>
					</div>
				</div>
			</div>
		
	}
}