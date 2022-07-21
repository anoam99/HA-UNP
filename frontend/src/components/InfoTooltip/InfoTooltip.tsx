import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { StyledTooltip } from './InfoTooltip.styled';
import { InfoTooltipProps } from './InfoTooltip.types';

const InfoTooltip: FC<InfoTooltipProps> = ({ message }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box component={'span'} display={'inline'}>
        <StyledTooltip
          onClose={handleTooltipClose}
          open={open}
          placement="top"
          disableFocusListener
          disableHoverListener
          title={message}
        >
          <Box
            component={'span'}
            sx={{ display: 'inline', cursor: 'pointer' }}
            onClick={handleTooltipOpen}
          >
            <img src="/assets/icons/info.svg" />
          </Box>
        </StyledTooltip>
      </Box>
    </ClickAwayListener>
  );
};

export default InfoTooltip;
