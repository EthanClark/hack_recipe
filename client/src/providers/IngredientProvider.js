import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const IngredientContext = React.createContextContext();

export const IngredientConsumer = IngredientContext.Consumer;

const IngredientProvider = ({children}) => {
  const [ingredients, setIngredients] = useState([])
  const [ingredient, setIngredient] = useState ()

  const getIngredients = (recipe_id) => {
    axios.get(`/api/recipes/${recipe_id}/ingredients`)
    .then( res => {
      setIngredients( res.data )
    })
    .catch(err => console.log(err))
  }

  const addIngredient = (recipe_id, ingredient) => {
    axios.post(`/api/recipes/${recipe_id}/ingredients`, {ingredient})
    .then(res => {
      setIngredients([...ingredients, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateIngredient = (recipe_id, ingredient) => {
    axios.put(`/api/recipes/${recipe_id}/ingredients/${id}`, {ingredient})
    .then( res => {
      const updatedIngredients = ingredients.map( i => {
        if (i.id === id) {
          return res.data
        }
        return i
      })
      setIngredients(updatedIngredients)
    })
    .catch(err => console.log(err))
  }

  const deleteIngredient = (recipe_id, id) => {
    axios.delete(`/api/recipes/${recipe_id}/ingredients/${id}`)
    .then( res => {
      setIngredients(ingredients.filter(i => i.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }

  return (
    <IngredientContext.Provider value={{
      ingredients: ingredients,
      ingredient: ingredient,
      getIngredients: getIngredients,
      addIngredient: addIngredient,
      updateIngredient: updateIngredient,
      deleteIngredient: deleteIngredient
    }}>
      {children}
    </IngredientContext.Provider>
  )

}

export default IngredientProvider;