import axios from 'axios'
import { BASE_URL } from '../../constants'
import { ActionTypes } from '../action-types'
import { setFilterDataArray } from './filters'
export const setCompanies = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionTypes.GET_COMPANIES_LOADING,
            })
            const { data } = await axios.get(`${BASE_URL}/company`)
            console.log(data)
            const companyName = data.map((item) => {
                return item.name
            })
            dispatch(setFilterDataArray(companyName))
            dispatch({
                type: ActionTypes.GET_COMPANIES,
                payload: {
                    companies: data,
                },
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ActionTypes.GET_COMPANIES_ERROR,
                payload: {
                    payload: {
                        message: 'Error',
                    },
                },
            })
        }
    }
}
