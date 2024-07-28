//Each ingredient rendered in this component should contain a button for removing the ingredient from the stack
//Renders the ingredients that are currently in the stack

//NEW BURGER
const BurgerStack = (stack, removeFromBurger) => {
    return (
        <ul>
            {stack.map((ingredient, index) => {
                <li key={index} 
                style={{color: ingredient.color}}>
                {ingredient.name}
                <button onClick={() => removeFromBurger(ingredient)}>Remove Ingredient</button>
                </li>
            })}
        </ul>
    )
    
};
  
export default BurgerStack;
  