import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const CuisineContext = React.createContext();

export const CuisineConsumer = CuisineContext.Consumer;

const CuisineProvider = ({children}) => {
  const [cuisine, setCuisine] = useState()
  const [cuisines, setCuisines] = useState([])

  const getCuisines = () => {
    axios.get(`/api/cuisines`)
    .then( res => {
      setCuisines( res.data )
    })
    .catch(err => console.log(err))
  }

  const addCuisine = (cuisine) => {
    axios.post(`/api/cuisines`, {cuisine})
    .then( res => {
      setCuisines([...cuisines, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateCuisine = (id, cuisine) => {
    axios.put(`/api/cuisines/${id}`, {cuisine})
    .then( res => {
      const updatedCuisines = cuisines.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
      setCuisines(updatedCuisines)
    })
    .catch(err => console.log(err))
  }

  const deleteCuisine = (id) => {
    axios.delete(`/api/cuisines/${id}`)
    .then( res => {
      setCuisines(cuisines.filter( c => c.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }

  return (
    <CuisineContext.Provider value={{
      cuisine: cuisine,
      cuisines: cuisines,
      getCuisines: getCuisines,
      addCuisine: addCuisine,
      updateCuisine: updateCuisine,
      deleteCuisine: deleteCuisine
    }}>
      { children }
    </CuisineContext.Provider>
  )

}

export default CuisineProvider;