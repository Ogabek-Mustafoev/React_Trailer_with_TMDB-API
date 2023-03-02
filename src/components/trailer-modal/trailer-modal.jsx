import { useRef } from "react";
import { Modal, ModalContent } from "../";

export default function TrailerModal({ item }) {
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
      </ModalContent>
    </Modal>
  )
}
