import React, { createContext, useState, useEffect,useCallback } from "react";
import { MovementService } from '../services/movementService';

export const MovementContext = createContext();

const MovementContextProvider = (props) => {
  const movementService = new MovementService()

  const [movements, setMovements] = useState([])

  const [editMovement, setEditMovement] = useState(null)
 

  useEffect(() => {
    movementService.readAll().then((data) => setMovements(data));
    //showProduct()
  }, []);

  const createMovement = (movement) => {
    movementService
      .create(movement)
      .then((data) => setMovements([...movements, data]));
  };

  const deleteMovement = (id) => {
      console.log("Context: ",id)
    movementService
      .delete(id)
      .then(() => setMovements(movements.filter((p) => p._id !== id)));
  };

  const findMovement= (id) => {
    const movement = movements.find((p) => p._id === id);
    setEditMovement(movement);
  };

  const updateMovement = (movement) => {
    movementService
      .update(movement)
      .then(res => {
        console.log("context: ", res)
        movementService.readAll().then((data) => setMovements(data));
      }
      );
  };

  return (
    <MovementContext.Provider
      value={{
        createMovement,
        deleteMovement,
        findMovement,
        updateMovement,
        editMovement,
        movements,
      }}
    >
      {props.children}
    </MovementContext.Provider>
  );
};

export default MovementContextProvider;