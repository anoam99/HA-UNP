import { Typography, Box } from '@mui/material';
import { FC } from 'react';
import { useModal } from '../../hooks';
import { SummaryProps } from './Summar.types';
import { CloseButtonWrapper } from './Summary.styled';
import { Button } from '../Button';
import currenySymbolsMap from '../../utils/currencySymbol';

const Summary: FC<SummaryProps> = ({
  total,
  currency,
  customerName,
  description,
  setExecutePaymentReq,
}) => {
  const { closeModal } = useModal();

  const handleCreateCheckoutLink = async () => {
    setExecutePaymentReq(true);
  };

  return (
    <>
      <CloseButtonWrapper>
        <img src={'/assets/icons/Cross.svg'} onClick={closeModal} />
      </CloseButtonWrapper>
      <div>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', marginBottom: '17px' }}
        >
          Payement Request Summary
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          {currenySymbolsMap[currency]}
          {total}
        </Typography>
        <Box sx={{ margin: '17px 0' }}>
          <img src={'/assets/icons/ArrowDownContained.svg'} />
        </Box>
        <Typography variant="h4">{customerName}</Typography>
        <Typography variant="h4">{description}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={'15px'}
          sx={{ marginTop: '17px' }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleCreateCheckoutLink}
          >
            Confirm and Request
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => closeModal()}
          >
            Edit Request
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Summary;
