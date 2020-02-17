import {
    SET,
    ADD_ONE,
    DEC_ONE,
    JOIN_ITEM,
    REMOVE_ITEM,
    SELECT_ALL,
    RESET_ALL,
    ADD_TO_CAR
  } from '../constants/shopper'
  
  
  export const set = (info) => {
    return {
      type: SET,
      value: info
    }
  }
  export const addOne = (index) => {
    return{
      type:ADD_ONE,
      index
    }
  }

  export const decOne = ( index ) =>{
    return{
      type:DEC_ONE,
      index
    }
  }
  export const joinItem = ( info, index ) =>{
    return{
    type:JOIN_ITEM,
    info,
    index
    }
  }
  export const removeItem = ( index ) =>{
    return{
      type:REMOVE_ITEM,
      index
    }
  }
  export const selectAll = () =>{
    return{
      type:SELECT_ALL,

    }
  }
  export const resetAll = () =>{
    return{
      type:RESET_ALL
    }
  }
  export const addToCar = ( info ) =>{
    return{
      type:ADD_TO_CAR,
      info
    }
  }
     