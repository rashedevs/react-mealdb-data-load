import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Meal.css'

const Meal = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    // console.log(meals)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const handleCart = (meal) => {
        const newCart = [...cart, meal]
        setCart(newCart)
    }
    return (

        <div className='meal-container'>
            <div className="item-container">
                {
                    meals.map(meal => <Item key={meal.idMeal} meal={meal} handleCart={handleCart} ></Item>)
                }
            </div>
            <div className="cart-container">

                <div className="cart-items">
                    <h3>Order Summery</h3>
                    {
                        cart.map(food => <Cart key={food.idMeal} food={food}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Meal;