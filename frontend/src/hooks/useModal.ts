import { createGlobalState } from 'react-use';

export enum EModalTypes {
  CREATE_PAYMENT,
  LOADER
};


type ModalData = {
    type?: EModalTypes,
    props?: any
}


const useGlobalModal = createGlobalState<ModalData>({});


const useModal = () => {
  const [data, setData] = useGlobalModal();

  const openModal = ({ type, props }: ModalData) => {
    setData({ type, props });
  };
  const closeModal = () => {
    setData({});
  };

  return { modal: data, openModal, closeModal };
};

export default useModal;
