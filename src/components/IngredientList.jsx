//Each ingredient rendered in this component should contain a button for adding the ingredient to the stack while keeping the original ingredient list on the left unchanged
//Renders the list of available ingredients

const IngredientList = ({ingredients, addToBurger}) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => {
                <li key={index} style={{color: ingredient.color}}>
                {ingredient.name}
                <button onClick={() => addToBurger(ingredient)}>Add Ingredient</button>
                </li>
            })}
        </ul>
    )
  };

export default IngredientList;
  