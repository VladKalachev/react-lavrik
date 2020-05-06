import React from 'react';
import Order from '~p/order';
import Cart from '~p/cart';
import Result from '~p/result';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <Switch>
                        {routesComponents}
                    </Switch>
                </div>
            </Router>
        ) 
    }
};

export default App;