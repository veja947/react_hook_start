import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

    let inputState = useState({
        title: 'default title',
        amount: '0'
    })


    const submitHandler = event => {
        event.preventDefault();
        // ...
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title"
                               value={inputState[0].title}
                               onChange={event => {
                                   const $newTitle = event.target.value;
                                   inputState[1](prevState => ({
                                       title: $newTitle,
                                       amount: prevState.amount
                                   }));
                               }}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount"
                               value={inputState[0].amount}
                               onChange={event => {
                                   const $newAmount = event.target.value;
                                   inputState[1](prevState => ({
                                       title: prevState.title,
                                       amount: $newAmount
                                   }))
                               }}/>
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
