import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editData } from '../../state/action-creators/employee'
import MemberForm from '../MemberForm'
import Modal from '../Ui/Modal/Modal'
const EditMember = ({ eid, item }) => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const editMember = (data) => {
        dispatch(editData({ eid, data }))
    }
    const toggleModal = () => {
        setModal((prev) => !prev)
    }
    return (
        <>
            <button onClick={toggleModal}>Edit</button>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <MemberForm
                        submitHandler={editMember}
                        name={item.name}
                        company={item.company._id}
                        status={item.status}
                        notes={item.notes}
                    />
                </Modal>
            )}
        </>
    )
}
export default EditMember
