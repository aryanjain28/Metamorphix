import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import Button from "../buttons/Button";

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
        <Button
          sx={{ width: "25%" }}
          onClick={onSuccess}
          label={successBtnText}
        />
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
