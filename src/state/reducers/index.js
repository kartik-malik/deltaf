import { combineReducers } from 'redux'
import filterReducers from './filters'
import emloyeeReducer from './employee'
import companyReducer from './company'
import authReducer from './auth'
const reducers = combineReducers({
    filters: filterReducers,
    employees: emloyeeReducer,
    companies: companyReducer,
    auth: authReducer,
})
export default reducers
