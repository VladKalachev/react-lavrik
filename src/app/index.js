import React from 'react';
import Order from '~p/order';
import Cart from '~p/cart';
import Result from '~p/result';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routesMap from '~/routes/routesMap';
import {observer} from 'mobx-react';
import routes from '~/routes';

@observer class App extends React.Component {
   
    render(){

        let routesComponents = routes.map((route) => {
            return <Route key={route.url} 
                          path={route.url}
                          component={route.component}
                          exact={route.exact}
                    />;
        });

        return(
            <Router>
                <div className="container">
                    header
                    <hr />
                    <div className="row">
                        <div className="col col-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to={routesMap.home}>Home</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.cart}>Cart</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.order}>Order now</Link>
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

export default App;