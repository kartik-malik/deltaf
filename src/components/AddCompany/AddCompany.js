import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompany } from '../../state/action-creators/company'
import classes from '../MemberForm.module.css'
import Modal from '../Ui/Modal/Modal'
import classes2 from '../MemberForm.module.css'

const AddCompany = () => {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const toggleModal = () => {
        setModal((prev) => !prev)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addCompany({ name }))
    }
    return (
        <>
            <button className={classes2.actions} onClick={toggleModal}>
                Add Company
            </button>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <form onSubmit={onSubmit}>
                        <div className={classes.control}>
                            <label htmlFor="name">Name</label>
                            <input
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            ></input>
                        </div>
                        <button className={classes.actions}>Add </button>
                    </form>
                </Modal>
            )}
        </>
    )
}
export default AddCompany
