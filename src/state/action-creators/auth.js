import axios from 'axios'
import { BASE_URL } from '../../constants'
import { ActionTypes } from '../action-types'
export const signupActionCreator = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionTypes.SET_USER_LOADING,
            })
            const {
                data: { token, ...userData },
            } = await axios.post(`${BASE_URL}/api/auth/signup`, data)
            localStorage.setItem('tokn', token)
            dispatch({
                type: ActionTypes.SET_USER,
                payload: {
                    user: userData,
                },
            })
            console.log(userData)
        } catch (err) {
            console.log(err.response)
            dispatch({
                type: ActionTypes.SET_USER_ERROR,
                payload: {
                    message:
                        err.response.data.error.message || 'Failed to signup',
                },
            })
        }
    }
}
export const loginCreator = (data) => {
    return async (dispatch, state) => {
        console.log(state())
        try {
            dispatch({
                type: ActionTypes.SET_USER_LOADING,
            })
            const {
                data: { token, ...userData },
            } = await axios.post(`${BASE_URL}/api/auth/signin`, data)
            localStorage.setItem('tokn', token)
            dispatch({
                type: ActionTypes.SET_USER,
                payload: {
                    user: userData,
                },
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: ActionTypes.SET_USER_ERROR,
                payload: {
                    message: 'Failed To login',
                },
            })
        }
    }
}
export const setUserData = (userData) => {
    if (userData) {
        console.log(userData)
        return {
            type: ActionTypes.SET_USER,
            payload: {
                user: userData,
            },
        }
    } else {
        setLogout()
    }
}
export const setLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch({
            type: ActionTypes.SET_USER_LOGOUT,
        })
    }
}
