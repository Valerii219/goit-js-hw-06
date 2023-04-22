const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientEl = document.querySelector(`#ingredients`);


const addOptionToIngredient = ingredients => {
return ingredients.map ( ingredient => {  
  const ingredientLiEl = document.createElement(`li`);
  ingredientLiEl.classList.add(`item`); 
  ingredientLiEl.textContent = ingredient;
  
  return ingredientLiEl})}  

  const elements = addOptionToIngredient(ingredients);
  
  ingredientEl.append(...elements)