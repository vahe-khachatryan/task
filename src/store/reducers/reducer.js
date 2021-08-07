import * as actionTypes from '../actions/actionTypes';

const initState = {
    arr: [],
    category: [],

}

const reducer = (state = initState, action) => {
    const actionReducer = {
        [actionTypes.CONTACT_GET_SUCCESS]: () => ({
            ...state,
            arr: action.payload
        }),
        [actionTypes.CATEGORIES_GET_SUCCESS]: () => ({
            ...state,
            category: action.payload
        }),


    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }


}
export default reducer