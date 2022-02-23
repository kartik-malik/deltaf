import logo from './logo.svg'
import './App.css'
import { store } from './state/store'
import { Provider } from 'react-redux'
import EmployeeList from './components/EmployeeTable/EmployeeTable'
import CompaniesDropDown from './components/CompaniesDropDown/CompaniesDropDown'
function App() {
    return (
        <Provider store={store}>
            <CompaniesDropDown />
            <EmployeeList />
        </Provider>
    )
}

export default App
