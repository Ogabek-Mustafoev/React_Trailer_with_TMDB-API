import { useEffect, useRef, useState } from 'react';
import './modal.scss'

export const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  );
}

export const ModalContent = props => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) props.onClose();
  }

  return (
    <div data-aos='fade-up' data-aos-delay='600' ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content-close" onClick={closeModal}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  )
}
