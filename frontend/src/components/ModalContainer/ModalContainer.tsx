import { useModal, EModalTypes } from '../../hooks';
import { CreatePaymentModal } from '../CreateLinkModal';
import { LoaderModal } from '../LoaderModal';

const ModalsMapper = {
  [EModalTypes.CREATE_PAYMENT]: CreatePaymentModal,
  [EModalTypes.LOADER]: LoaderModal,
};

const ModalContainer = () => {
  const {
    modal: { type, props },
  } = useModal();

  if (type === undefined) return null;

  const Modal = ModalsMapper[type];

  return <Modal {...props} />;
};
export default ModalContainer;
