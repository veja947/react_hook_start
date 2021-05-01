import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

const Ingredients = () => {

    const [ingredientsArray, setIngredientsArray] = useState([]);

    const addIngredientHandler = ingredient => {
        console.log(ingredient);
        setIngredientsArray(prevIngredients => [...prevIngredients, {
            id: Math.random().toString(),
            ...ingredient
        }])
    }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredientsArray} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
