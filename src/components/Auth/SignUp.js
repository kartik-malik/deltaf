import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants'
import { signupActionCreator } from '../../state/action-creators/auth'
import Loader from '../Ui/loader/Loader'
import classes from './AuthForm.module.css'
const SignUp = () => {
    // const submitHandler = () => {};
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { error, loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signupActionCreator({ email, username: name, password }))
    }

    return (
        <section className={classes.auth}>
            <h1>{'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
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
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div className={classes.actions}>
                    <button disabled={loading}>
                        {loading ? <Loader inline={true} /> : 'Create Account'}
                    </button>

                    <Link className={classes.toggle} to="/auth">
                        {'Login with existing account'}
                    </Link>
                </div>
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </section>
    )
}

export default SignUp
