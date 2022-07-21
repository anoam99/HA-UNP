import { FC } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { Summary } from '../Summary';
import { CreateLinkModalProps } from './CreateLinkModal.types';

const CreatePaymentModal: FC<CreateLinkModalProps> = ({
  formData,
  setExecutePaymentReq,
}) => {
  const { amount, description, firstName, currency } = formData;

  return (
    <Dialog open>
      <DialogContent sx={{ textAlign: 'center', width: 380 }}>
        <Summary
          total={amount}
          currency={currency}
          setExecutePaymentReq={setExecutePaymentReq}
          customerName={firstName}
          description={description}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePaymentModal;
