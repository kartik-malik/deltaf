import axios from 'axios'
import { useState } from 'react'
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
export const addEmploy = ({ name, status, notes, company }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/employ`, {
                name,
                status,
                notes,
                company,
            })
            const data = response.data
            dispatch({
                type: ActionTypes.ADD_EMPLOYEE,
                payload: ActionTypes.payload.employ,
            })
        } catch (error) {
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
export const editData = ({ eid, data }) => {
    return async (dispatch, getState) => {
        try {
            const { data: newEmp } = await axios.put(
                `${BASE_URL}/employ/${eid}`,
                data
            )
            const { employees } = getState()
            const index = employees.data.findIndex((item) => item._id == eid)
            employees.data[index] = newEmp
            console.log(newEmp)
            console.log(employees.data)
            dispatch({
                type: ActionTypes.EDIT_EMPLOYEE,
                payload: {
                    employees: employees.data,
                },
            })
        } catch (error) {
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
