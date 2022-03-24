import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const { strMeal, strMealThumb, strArea, strCategory } = props.meal
    return (
        <div className='item'>
            <img src={strMealThumb} alt="" />
            <div className="item-info">
                <h4>Item: {strMeal}</h4>
                <h5>Category: {strCategory}</h5>
                <h6>Type: {strArea}</h6>
            </div>
            <button className='item-btn'><p>Add to cart</p> <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Item;