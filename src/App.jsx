import {useState} from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack.jsx';
import IngredientList from './components/IngredientList.jsx';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [stack, setStack] = useState([]); 

  // ! ADD FUNCTION  
  //adding ingredient to the burger (stack)
  const addToBurger = (ingredient) => { //addToBurger is defined with one parameter (ingredient)
    setStack([...stack, ingredient]) //setStack is updating the state of stack, the newly updated state is created using spread operator 
    //spread copies the existing elements of the stack array and appends the new ingredient at the end
  }

  // ! REMOVE FUNCTION
  //remove an ingredient from the stack
  const removeFromBurger = (index) => { //one parameter - index of the ingredient in the stack that is getting removed
    const newStack = stack.slice(); //using slice to create a copy of stack array
    newStack.splice(index, 1); //using splice to remove 1 element (an ingredient) from nextStack at the specific index
    setStack(newStack) //updating the state
  }

 
  return (
    <>
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* PASSING availableIngredients and stack AS PROPS to the child component (IngredientList & BurgerStack) */}
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} /> {/* Display the list of ingredients on the left side of the screen */}
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/> {/* Display the current stack of ingredients on the right side of the screen */}
      </section>
    </main>
    </>
  );
};

export default App;

