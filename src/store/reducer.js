import { CHANGE_DATE, ADD_DATE, DELETE_DATE } from  './actionTypes';
const defaultState = {
    inputValue: '',
    list:[]
}
export default (state = defaultState, action) => {
    if(action.type === CHANGE_DATE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_DATE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_DATE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.key,1)
        return newState;
    }
    return state;
}