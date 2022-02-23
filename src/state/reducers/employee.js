import { ActionTypes } from '../action-types'
const defaultState = { data: [], loading: false, error: null }
const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.SET_EMPLOYEE:
            return {
                loading: false,
                error: null,
                data: action.payload.employees,
            }
        case ActionTypes.SET_EMPLOYEE_ERROR:
            return {
                loading: false,
                error: action.payload.message,
                data: null,
            }
        case ActionTypes.SET_EMPLOYEE_LOADING:
            return {
                loading: true,
                error: null,
                data: null,
            }
        default:
            return state
    }
}
export default reducer
