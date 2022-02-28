import classes from './Modal.module.css'
const ModalContainer = ({ children }) => {
    return <div className={`${classes.modal__main}`}>{children}</div>
}
const ModalBackground = ({ toggleModal }) => {
    return (
        <div
            className={`${classes.modal__background}`}
            onClick={() => {
                toggleModal(false)
            }}
        ></div>
    )
}
const Modal = ({ children, toggleModal }) => {
    return (
        <div className={`${classes.modal}`}>
            <ModalBackground toggleModal={toggleModal}></ModalBackground>
            <ModalContainer>{children}</ModalContainer>
        </div>
    )
}
export default Modal
