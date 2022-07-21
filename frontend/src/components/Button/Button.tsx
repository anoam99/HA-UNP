import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

const ButtonRoot: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} sx={{ padding: '10px' }}>
      {children}
    </Button>
  );
};
export default ButtonRoot;
