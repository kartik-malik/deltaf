import { ActionTypes } from '../action-types'

const defaultState = { loading: false, data: [], error: null }
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_COMPANIES_LOADING:
            return { loading: true, data: [], error: null }
        case ActionTypes.GET_COMPANIES:
            return {
                loading: false,
                data: action.payload.companies,
                error: null,
            }
        case ActionTypes.GET_COMPANIES_ERROR:
            return { loading: false, data: [], error: action.payload.message }
        default:
            return state
    }
}
export default reducer
