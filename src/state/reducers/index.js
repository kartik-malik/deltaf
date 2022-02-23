import { combineReducers } from 'redux'
import filterReducers from './filters'
import emloyeeReducer from './employee'
import companyReducer from './company'
const reducers = combineReducers({
    filters: filterReducers,
    employees: emloyeeReducer,
    companies: companyReducer,
})
export default reducers
