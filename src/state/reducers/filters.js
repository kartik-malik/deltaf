import { ActionTypes } from '../action-types'
const defaultFilterState = {
    status: 'active',
    companies: [],
}
const reducer = (state = defaultFilterState, action) => {
    switch (action.type) {
        case ActionTypes.SET_FILTER_ARRAY:
            return { ...state, companies: action.payload.filterArray }
        case ActionTypes.SET_STATUS:
            return { ...state, status: action.payload.status }
        default:
            return state
    }
}
export default reducer
