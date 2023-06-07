import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

const Modal = (props: ModalProps) => {
  const {
    open,
    setOpen,
    title,
    children,
    onClose = () => null,
    onSuccess,
    successBtnText = "Ok",
    isDisabled = false,
  } = props;
  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>{title}</Typography>
          <CloseOutlined
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setOpen(false);
              onClose();
            }}
          />
        </Box>
      </DialogTitle>
      <Divider />

      <DialogContent>{children}</DialogContent>

      <Divider />
      <DialogActions>
        <Button variant="contained" disabled={isDisabled} onClick={onSuccess}>
          {successBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  successBtnText?: string;
  onSuccess: () => void;
  isDisabled?: boolean;
}

export default Modal;
