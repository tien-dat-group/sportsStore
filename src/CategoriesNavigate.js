import React, { Component } from 'react';
import { ToggleLink } from './ToggleLink';
import { Link } from 'react-router-dom';

export class CategoriesNavigate extends Component {

	render() {
		console.log("CategoriesNavigate render()");
		return <>
			<ToggleLink to={ `${this.props.baseUrl}/all`} text="All" exact={ false } />
			{this.props.categories && this.props.categories.map(cat =>
				<ToggleLink key={cat} to={ `${this.props.baseUrl}/${cat}`} text={cat} />
				)}
			<Link className="btn btn-block btn-secondary fixed-bottom m-2 col-3"
                to="/admin">
                Administration
            </Link>
		</>
			
	}
}