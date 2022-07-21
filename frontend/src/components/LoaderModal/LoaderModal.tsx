import {
  CircularProgress,
  Dialog,
  DialogContent,
} from '@mui/material';
const LoaderModal = () => {
  return (
    <Dialog open>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
};

export default LoaderModal;
