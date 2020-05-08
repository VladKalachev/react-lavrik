import React from 'react';
import {Link} from 'react-router-dom';
import {urlBuilder} from '~/routes/routesMap';
import withStore from '~/hocs/withStore';
import 'bootstrap/dist/css/bootstrap.min.css';

class Result extends React.Component {

    render() {
        let data = this.props.stores.order.lastOrderCache;
        let cartModal = this.props.stores.cart;
        // let postsTmp = [1,2,3];
        // let links = postsTmp.map(post => {
        //     return <div key={post}>
        //         <Link to={urlBuilder('blogPost', {url: post})}>Post {post}</Link>
        //     </div>
        // });
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {data.name}!</p>
                <p><strong>Total: {data.total}</strong></p>
                <div>
                    {/* {links} */}
                </div>
            </div>
        ) 
    }
};

export default withStore(Result);