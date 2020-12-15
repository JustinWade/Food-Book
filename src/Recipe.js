import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories,image, ingredients}) => {
    return (
        Math.round({calories}),
        <div className={style.recipe}>
            <h1> {title}</h1>
            <img src={image} alt="" />
            <ol>
                {ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
                ))}
            </ol>    
            <strong><p>Total Calories = {Math.round(calories)}</p></strong>
        </div>
    );
}

export default Recipe;