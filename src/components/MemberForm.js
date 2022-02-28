import { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './MemberForm.module.css'
const MemberForm = (props) => {
    const { data } = useSelector((state) => state.companies)
    const [name, setName] = useState(props.name || '')
    const [status, setStatus] = useState(props.status || true)
    const [company, setCompany] = useState(props.company || '')
    const [desc, setDesc] = useState(props.notes || '')
    const submitForm = (e) => {
        e.preventDefault()
        props.submitHandler({ name, status, notes: desc, company })
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <div className={classes.control}>
                    <label htmlFor="name">Name:</label>
                    <input
                        required
                        value={name}
                        id="name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className={`${classes.radioContainer} ${classes.control}`}>
                    <label>Status:</label>
                    <div className={classes.control}>
                        <input
                            type="radio"
                            name="Active"
                            id="Active"
                            onChange={() => {
                                setStatus(true)
                            }}
                            checked={status}
                        />
                        <label htmlFor="Active">Active</label>
                    </div>
                    <div className={classes.control}>
                        <input
                            type="radio"
                            name="Inactive"
                            id="Inactive"
                            checked={!status}
                            onChange={() => {
                                setStatus(false)
                            }}
                        />
                        <label htmlFor="Inactive">Inactive</label>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Notes:</label>
                    <textarea
                        value={desc}
                        id="name"
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="company">Company</label>
                    <select
                        name="company"
                        value={company}
                        onChange={(e) => {
                            setCompany(e.target.value)
                        }}
                        required
                    >
                        <option></option>
                        {data.map((item) => {
                            return (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <button className={`${classes.actions} `}>Submit </button>
            </form>
        </>
    )
}
export default MemberForm
