import React, { Component } from 'react';
import { dataType } from './Type';

export class DataGetter extends Component {

	render() {
		console.log("DataGetter render()")
		return <>{this.props.children}</>
	}

	componentDidMount = () => { 
		console.log("DataGetter did mount")
		this.getData();
	}

	componentDidUpdate = () => {
		console.log("DataGetter did update");
		this.getData();
	}

	getData = () => {
		const dsData = this.props.products_params || {};
		const rtData = {
			_limit: this.props.pageSize || 5,
			_sort: this.props.sortKey || "name",
			_page: this.props.match.params.page || 1,
			category_like: (this.props.match.params.category || "") === "all"
					? "" : this.props.match.params.category
		}

		if(Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
			this.props.loadData(dataType.PRODUCTS, rtData);
		}
	}
}