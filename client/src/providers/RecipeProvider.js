import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext();

export const RecipeConsumer = RecipeContext.Consumer;

const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState([])
  const [recipe, setRecipe] = useState()

  const getRecipes = (dishType_id) => {
    axios.get(`/api/dish_types/${dishType_id}/recipes`)
    .then( res => {
      setRecipes([...recipes, res.data])
    })
    .catch(err => console.log(err))
  }

  const addRecipe = (dishType_id, recipe) => {
    axios.post(`/api/dish_types/${dishType_id}/recipes`, {recipe})
    .then( res => {
      setRecipes([...recipes, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateRecipe = (dishType_id, id, recipe) => {
    axios.put(`/api/dish_types/${dishType_id}/recipes/${id}`, {recipe})
    .then( res => {
      const updatedRecipes = recipes.map( r => {
        if(r.id === id) {
          return res.data
        }
        return r
      })
      setRecipes(updatedRecipes)
    })
    .catch(err => console.log(err))
  }

  const deleteRecipe = (dishType_id, id) => {
    axios.delete(`/api/dish_types/${dishType_id}/recipes/${id}`)
    .then( res => {
      setRecipes(recipes.filter(r => r.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }


  return (
    <RecipeContext.Provider value={{
      recipes: recipes,
      recipe: recipe,
      getRecipes: getRecipes,
      addRecipe: addRecipe,
      updateRecipe:updateRecipe,
      deleteRecipe: deleteRecipe
    }}>
      { children }
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;