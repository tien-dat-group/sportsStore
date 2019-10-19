import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export class ToggleLink extends Component {

	render() {
		return <Route path={ this.props.to }
					  exact = { this.props.exact }
					children={ routeProps => {

						const baseClass = `btn btn-block`;
						const activeClass = `btn-primary`;
						const unactiveClass = `btn-secondary`;
						const combineClass = 
						`${baseClass} ${routeProps.match ? activeClass : unactiveClass}`;
						return <Link to={ this.props.to }
									className={ combineClass }> 
									{ this.props.text }
								</Link>
					}} />
	}
}