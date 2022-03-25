import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { strMeal, strMealThumb } = props.food
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <h4> {strMeal}</h4>
        </div>
    );
};

export default Cart;