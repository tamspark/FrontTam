import { FC } from "react";
import { ModalContent, ModalForm } from "./style/Modal.style";

const Modal: FC<{}> = () => {
  return (
    <>
      <ModalForm>
        <ModalContent>
          <p>Hello here!</p>
        </ModalContent>
      </ModalForm>
    </>
  );
};
export default Modal;
