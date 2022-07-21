import { FC, FormEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CreateLinkForm, Success } from '../../components';
import { useUserContext } from '../../context/userContext';
import { EModalTypes, useModal } from '../../hooks';
import {
  CreateCheckoutLinkDto,
  getCheckoutLink,
} from '../../services';
import { Wrapper } from './PaymentLinkGenerator.styled';

const PaymentLinkGenerator: FC = () => {
  const { openModal, closeModal } = useModal();
  const { country } = useUserContext();
  const [executePaymentReq, setExecutePaymentReq] = useState(false);
  const [createLinkDto, setCreateLinkDto] =
    useState<CreateCheckoutLinkDto>();
  const { isLoading, data, remove } = useQuery(
    'merchent',
    () =>
      createLinkDto &&
      getCheckoutLink({
        ...createLinkDto,
        country,
        amount: createLinkDto.amount,
      }),
    { enabled: executePaymentReq, staleTime: Infinity }
  );

  useEffect(() => {
    if (isLoading) {
      openModal({
        type: EModalTypes.LOADER,
      });
    } else {
      closeModal();
    }
  }, [isLoading]);

  const resetState = () => {
    setExecutePaymentReq(false);
    remove();
  };

  const handleFormSubmit = (
    event: FormEvent,
    formData: CreateCheckoutLinkDto
  ) => {
    event.preventDefault();
    setCreateLinkDto(formData);
    openModal({
      type: EModalTypes.CREATE_PAYMENT,
      props: { formData, isLoading, setExecutePaymentReq },
    });
  };

  return (
    <Wrapper>
      {!data ? (
        <CreateLinkForm handleSubmit={handleFormSubmit} />
      ) : (
        <Success unipassCheckoutRes={data} handleReset={resetState} />
      )}
    </Wrapper>
  );
};
export default PaymentLinkGenerator;
