import { ActionTypes } from '../action-types'

export const setFilterDataArray = (data) => {
    return {
        type: ActionTypes.SET_FILTER_ARRAY,
        payload: {
            filterArray: data,
        },
    }
}
export const setStatusData = (data) => {
    return {
        type: ActionTypes.SET_STATUS,
        payload: {
            status: data,
        },
    }
}
