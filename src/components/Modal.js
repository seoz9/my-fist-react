import './Modal.css'
import ReactDOM from 'react-dom'

function Modal({ children, closeModal }) {
    return ReactDOM.createPortal((
        <div className='modal-backdrop'>
            <div className='modal'>
                {children}
                <br />
                <button onClick={closeModal}>Close modal</button>
            </div>
        </div>
    ),document.body) 
}

export default Modal