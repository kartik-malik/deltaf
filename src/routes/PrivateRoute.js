import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoute = (props) => {
    console.log('hi')
    const { user } = useSelector((state) => state.auth)
    return user ? props.children : <Navigate to="/auth" />
}
export default PrivateRoute
