import { CHANGE_DATE, ADD_DATE, DELETE_DATE } from  './actionTypes';
export const getInputValue = (value) => ({
        type: CHANGE_DATE,
        value  
})
export const getAddDate = () => ({
    type: ADD_DATE   
})
export const getDeleteDate = (key) => ({
    type: DELETE_DATE,
    key  
})