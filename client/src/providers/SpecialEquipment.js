import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const SpecialEquipmentContext = React.createContext();

export const SpecialEquipmentConsumer = SpecialEquipmentContext.Consumer;

const SpecialEquipmentProvider = ({children}) => {
  const [specialEquipments, setSpecialEquipments] = useState([])
  const [specialEquipment, setSpecialEquipment] = useState()

  const getSpecialEquipments = (recipe_id) => {
    axios.get(`/api/recipes/${recipe_id}/special_equipments`)
    .then( res => {
      setSpecialEquipments( res.data )
    })
    .catch(err => console.log(err))
  }

  const addSpecialEquipment = (recipe_id, specialEquipment) => {
    axios.post(`/api/recipes/${recipe_id}/special_equipments`)
    .then( res => {
      setSpecialEquipments([...specialEquipment, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateSpecialEquipment = (recipe_id, id, specialEquipment) => {
    axios.put(`/api/recipes/${recipe_id}/special_equipments/${id}`, {specialEquipment})
    .then( res => {
      const updatedSpecialEquipments = specialEquipments.map( s => {
        if (s.id === id) {
          return res.data
        }
        return s
      })
      setSpecialEquipments(updatedSpecialEquipments)
    })
    .catch(err => console.log(err))
  }

  const deleteSpecialEquipment = (recipe_id, id) => {
    axios.delete(`/api/recipes/${recipe_id}/special_equipments/${id}`)
    .then( res => {
      setSpecialEquipments(specialEquipments.filter(s => s.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }

  return (
    <SpecialEquipmentContext.Provider value={{
      specialEquipments: specialEquipments,
      specialEquipment: specialEquipment,
      getSpecialEquipments: getSpecialEquipments,
      addSpecialEquipment: addSpecialEquipment,
      updateSpecialEquipment: updateSpecialEquipment,
      deleteSpecialEquipment: deleteSpecialEquipment
    }}>
      {children}
    </SpecialEquipmentContext.Provider>
  )

}

export default SpecialEquipmentProvider;