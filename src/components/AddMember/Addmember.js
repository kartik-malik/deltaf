import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmploy } from '../../state/action-creators/employee'
import MemberForm from '../MemberForm'
import Modal from '../Ui/Modal/Modal'
import classes2 from '../MemberForm.module.css'

const AddMember = () => {
    const [addModal, setAddModal] = useState(false)
    const dispatch = useDispatch()
    const toggleModal = () => {
        setAddModal((prev) => !prev)
    }

    const addData = ({ name, status, notes, company }) => {
        dispatch(addEmploy({ name, status, notes, company })).then((res) => {
            setAddModal(false)
        })
    }
    return (
        <>
            <button className={classes2.actions} onClick={toggleModal}>
                Add Member
            </button>
            {addModal && (
                <Modal
                    toggleModal={() => {
                        setAddModal((prev) => !prev)
                    }}
                >
                    <MemberForm submitHandler={addData} />
                </Modal>
            )}
        </>
    )
}
export default AddMember
