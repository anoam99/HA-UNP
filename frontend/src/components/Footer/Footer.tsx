import { Box, Link, Typography } from '@mui/material';
import { Wrapper } from './Footer.styled';

const Footer = () => {
  return (
    <Wrapper>
      <Typography variant="body2" color="gray" align="center">
        Once the payment is made, it will appear in your Mobile Pay
        account in <Link href="/">UNIPaaS admin</Link>.
      </Typography>
      <Box>
        <img src="/assets/logos/PoweredBy.svg" />
      </Box>
    </Wrapper>
  );
};

export default Footer;
