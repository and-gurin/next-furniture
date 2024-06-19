import React from 'react';
import style from './Modal.module.scss';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <span className={style.modal__close} onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Modal;