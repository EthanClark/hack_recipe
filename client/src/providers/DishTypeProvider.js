import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DishTypeContext = React.createContext();

export const DishTypeConsumer = DishTypeContext.Consumer;

const DishTypeProvider = ({children}) => {
  const [dishType, setDishType] = useState()
  const [dishTypes, setDishTypes] = useState([])

  const getDishTypes = (cuisine_id) => {
    axios.get(`/api/cuisines/${cuisine_id}/dish_types`)
    .then( res => {
      setDishTypes( res.data )
    })
    .catch(err => console.log(err))
  }

  const addDishType = (cuisine_id, dishType) => {
    axios.post(`/api/cuisines/${cuisine_id}/dish_types`, {dishType})
    .then( res => {
      setDishTypes([...dishTypes, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateDishType = (cuisine_id, id, dishType) => {
    axios.put(`/api/cuisines/${cuisine_id}/dish_types/${id}`, {dishType})
      .then( res => {
        const updatedDishTypes = dishTypes.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        setDishTypes(updatedDishTypes)
      })
      .catch(err => console.log(err))
  }

  const deleteDishType = (cuisine_id, id) => {
    axios.delete(`/api/cuisines/${cuisine_id}/dish_types/${id}`)
    .then( res => {
      setDishTypes(dishTypes.filter(d => d.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }

  return (
    <DishTypeContext.Provider value={{
      dishType: dishType,
      dishTypes: dishTypes,
      getDishTypes: getDishTypes,
      addDishType: addDishType,
      updateDishType: updateDishType,
      deleteDishType: deleteDishType
    }}>
    { children }
    </DishTypeContext.Provider>
  )

}

export default DishTypeProvider;