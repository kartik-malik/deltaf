import axios from 'axios'
import { BASE_URL } from '../../constants'
import { ActionTypes } from '../action-types'
export const setEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionTypes.SET_EMPLOYEE_LOADING,
                payload: {
                    type: ActionTypes.SET_EMPLOYEE_LOADING,
                },
            })
            const { data } = await axios.get(`${BASE_URL}/employ`)
            console.log(data)
            dispatch({
                type: ActionTypes.SET_EMPLOYEE,
                payload: {
                    employees: data,
                },
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ActionTypes.SET_EMPLOYEE_ERROR,
                payload: {
                    payload: {
                        message: 'Error',
                    },
                },
            })
        }
    }
}
