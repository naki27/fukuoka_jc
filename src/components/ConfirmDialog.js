import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const ConfirmDialog = ({msg, isOpen, doYes, doNo}) => {

  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
      <>
        <Dialog
            open={open}
            keepMounted
            onClose={() => doNo()}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
        >
          <DialogContent>
            {msg}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => doNo()} color="primary">
              No
            </Button>
            <Button onClick={() => doYes()} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
  )
}
export default ConfirmDialog
