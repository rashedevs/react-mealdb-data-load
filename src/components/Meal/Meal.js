import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Meal.css'

const Meal = () => {
    const [meals, setMeals] = useState([])
    console.log(meals)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (

        <div className='meal-container'>
            <div className="item-container">
                {
                    meals.map(meal => <Item key={meal.idMeal} meal={meal}></Item>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart info</h3>
            </div>
        </div>
    );
};

export default Meal;