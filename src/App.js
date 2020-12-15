import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"
import './App.css';

const App = () => {
    // const APP_ID = '';
    // const APP_KEY = '';

    const APP_ID = 'b7029a4c';
    const APP_KEY = 'a66494b31d972cb585cc7c5a610e4111';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };


    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App">
            <h1>FoodBook</h1>
            <h4>Search for Recipes!</h4>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button  className="search-button" type="submit">
                    Search
                </button>
            </form>
            {recipes.map(recipe => (
                <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
                    image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    );
}

export default App;
