import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let name;
    for (const item of cart) {
        if (name) {
            name = name + ' / ' + item.strMeal
        }
        else { name = item.strMeal }
    }
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <h4>Added Items: {name}</h4>
        </div>
    );
};

export default Cart;