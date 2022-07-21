import { Box, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import { FC, useMemo } from 'react';
import { LinkBox, QRCodeWrapper, Title } from './Success.styled';
import { SocialLinksArray, SuccessProps } from './Success.types';
import { Button } from '../Button';
import currencySymbol from '../../utils/currencySymbol';

const Success: FC<SuccessProps> = ({
  unipassCheckoutRes,
  handleReset,
}) => {
  const { firstName, amount, shortLink, currency } =
    unipassCheckoutRes;
  const socialLinksArray: SocialLinksArray = [
    { id: 'copy', label: 'Copy Link', icon: <Typography /> },
    { id: 'email', label: 'Email', icon: <Typography /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <Typography /> },
    { id: 'sms', label: 'SMS', icon: <Typography /> },
  ];

  const MemoShareLinks = useMemo(() => {
    return socialLinksArray.map(({ label, id }) => {
      const imageSrc = require(`../../../public/assets/icons/${id}.svg`);
      return (
        <Box key={id} textAlign="center">
          <img src={imageSrc} />
          <Typography variant="body2" color="gray">
            {label}
          </Typography>
        </Box>
      );
    });
  }, []);

  return (
    <>
      <Title variant="h3" marginBottom={'15px'}>
        Payment request is&nbsp;
        <img src="/assets/icons/checkMarkOutlined.svg" />
        <Typography
          component="span"
          variant="h3"
          fontWeight="bold"
          color="success.main"
        >
          &nbsp;ready
        </Typography>
      </Title>
      <Typography align="center" variant="body1">
        Share the payment request for{' '}
        <Box component="span" sx={{ fontWeight: 'bold' }}>
          {currencySymbol[currency]}
          {amount}
        </Box>{' '}
        with
      </Typography>
      <Typography align="center" sx={{ fontWeight: 'bold' }}>
        {firstName}
      </Typography>
      <QRCodeWrapper>
        <QRCodeCanvas value={shortLink} />
      </QRCodeWrapper>
      <LinkBox>
        <Typography color="primary" variant="h4" component="p">
          {shortLink}
        </Typography>
      </LinkBox>
      <Box
        display="flex"
        margin="15px 0"
        justifyContent={'space-between'}
      >
        {MemoShareLinks}
      </Box>
      <Button fullWidth onClick={handleReset} variant="outlined">
        Create New Request
      </Button>
    </>
  );
};

export default Success;
