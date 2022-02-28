import logo from './logo.svg'
import './App.css'

import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './components/Auth/SignUp'
import LoginForm from './components/Auth/Login'
import jwtDecode from 'jwt-decode'
import { setUserData } from './state/action-creators/auth'
import PrivateRoute from './routes/PrivateRoute'
import LoginRoute from './routes/LoginRoutes'
import { useDispatch } from 'react-redux'
import Home from './components/Home'
function App() {
    const dispatch = useDispatch()
    if (localStorage.getItem('tokn')) {
        console.log(localStorage.getItem('tokn'))
        dispatch(setUserData(jwtDecode(localStorage.getItem('tokn'))))
    }
    return (
        <Routes>
            <Route path="/" exact element={<Navigate to="/company" />} />
            <Route
                path="/signup"
                exact
                element={
                    <LoginRoute>
                        <SignUp />
                    </LoginRoute>
                }
            ></Route>
            <Route
                path="/auth"
                exact
                element={
                    <LoginRoute>
                        <LoginForm />
                    </LoginRoute>
                }
            ></Route>
            <Route
                path="/company"
                exact
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            ></Route>
        </Routes>
    )
}

export default App
