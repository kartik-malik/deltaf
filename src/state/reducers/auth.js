import { ActionTypes } from '../action-types'

const initialSTate = { user: null, error: null }
const reducer = (state = initialSTate, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER_LOADING:
            return { error: null, user: null, loading: true }
        case ActionTypes.SET_USER:
            return { error: null, user: action.payload.user }
        case ActionTypes.SET_USER_ERROR:
            return { user: null, error: action.payload.message }
        case ActionTypes.SET_USER_LOGOUT:
            return { user: null, error: null }
        default:
            return state
    }
}
export default reducer
