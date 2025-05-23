import './Modal.css';

function Modal({ openModal, CloseModal, children }) {
	return (
		<div
			className={`modal ${openModal ? 'show-modal' : ''} `}
			onClick={CloseModal}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
				<button onClick={CloseModal} className="btn-close">
					x
				</button>
			</div>
		</div>
	);
}

export default Modal;
