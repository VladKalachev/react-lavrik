import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routesMap from '~/routes/routesMap';
import withStore from '~/hocs/withStore';
import routes from '~/routes';
import Notifications from '~p/notifications';
class App extends React.Component {
   
    render(){

        let cart = this.props.stores.cart;

        let routesComponents = routes.map((route) => {
            return <Route 
                        key={route.url} 
                        path={route.url}
                        component={route.component}
                        exact={route.exact}
                    />;
        });

        return(
                <Router>
                    <Notifications />
                    <header>
                        <div className="container">
                            <hr/>
                            <div className="row justify-content-between">
                                <div className="col col-4">
                                    <div className="alert alert-success">Site name</div>
                                </div>
                                <div className="col col-3">
                                    <strong>
                                        In Cart: {cart.cartCnt}
                                        <br/>
                                        Total: {cart.total}
                                    </strong>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col col-3">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <NavLink to={routesMap.home} exact activeClassName={styles.active}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink to={routesMap.cart} activeClassName={styles.active}>
                                            Cart
                                        </NavLink>
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink to={routesMap.order} activeClassName={styles.active}>
                                            Order now
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-9">
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                        </div>
                    
                    </div>
                </Router>
        ) 
    }
};

export default withStore(App);