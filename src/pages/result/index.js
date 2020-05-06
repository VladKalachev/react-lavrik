import React from 'react';
import {observer} from 'mobx-react';
import cartModal from '~s/cart';
import orderModal from '~s/order';
import {Link} from 'react-router-dom';
import {urlBuilder} from '~/routes/routesMap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default @observer class extends React.Component {

    render() {
        let postsTmp = [1,2,3];
        let links = postsTmp.map(post => {
            return <div key={post}>
                <Link to={urlBuilder('blogPost', {url: post})}>Post {post}</Link>
            </div>
        });
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModal.data.name}!</p>
                <p><strong>Total: {cartModal.total}</strong></p>
                <div>
                    {links}
                </div>
            </div>
        ) 
    }
};