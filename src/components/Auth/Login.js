import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants'
import { loginCreator } from '../../state/action-creators/auth'
import classes from './AuthForm.module.css'
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // if (authCtx.isLoggedIn) {
    //   navigate("/");
    // }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginCreator({ email, password })).then(() => {})
    }

    return (
        <section className={classes.auth}>
            <h1>{'Login'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button>{'Login'}</button>
                    <Link to="/signup" className={classes.toggle}>
                        {'Create new account'}
                    </Link>
                </div>
            </form>
        </section>
    )
}
export default LoginForm
