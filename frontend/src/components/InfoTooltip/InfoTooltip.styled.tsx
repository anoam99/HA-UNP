import { styled, Tooltip } from '@mui/material';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const StyledTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 245,
    padding: '5px 12px 5px 13px',
    background: '#3B3B3B',
  },
});
