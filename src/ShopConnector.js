import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Shop } from './Shop';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as ShopActions from './data/ActionCreate';
import { dataType } from './data/Type';
import * as CartActions from './data/CartActionCreate';
import { CartDetail } from './CartDetail';
import { DataGetter } from './data/DataGetter';
import { Checkout } from './Checkout';
import { Thanks } from './Thanks';



const mapDispatchToProps = {...ShopActions,... CartActions};


export const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component {

        selectComponent = (routeProps) => {            
            const wrap = (Component, Content) => 
                <Component { ...this.props}  { ...routeProps}>
                    { Content && wrap(Content)}
                </Component>            
            switch (routeProps.match.params.section) {
                case "products": 
                    return wrap(DataGetter, Shop);
                case "cart":
                    return wrap(CartDetail);
                case "checkout": 
                    return wrap(Checkout);
                case "thanks":
                    return wrap(Thanks);
                default:
                    return <Redirect to="/shop/products/all/1" />
            }
        }

        render() {
            return <Switch>
            	<Redirect from="/shop/products/:category" 
                    to="/shop/products/:category/1" exact={ true } />           
                <Route path={ "/shop/:section?/:category?/:page?"}
                    render = { routeProps => this.selectComponent(routeProps) } />  
            </Switch>          
        }

        componentDidMount = () => this.props.loadData(dataType.CATEGORIES);
    }
)