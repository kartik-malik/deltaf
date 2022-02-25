import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const LoginRoute = (props) => {
    const { user } = useSelector((state) => state.auth)
    console.log(user)
    return !user ? props.children : <Navigate to="/" />
}
export default LoginRoute
