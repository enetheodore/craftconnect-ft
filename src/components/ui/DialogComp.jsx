import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material';

export default function DialogComp({title,triger,content,open,setOpen,action}) {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {triger}
      <Dialog
        open={open}
        onClose={handleClose}
        BackdropProps={{
        style: {
          backgroundColor: 'rgba(25,32,39, 0.7)', // Change this to your desired color
        },
      }}
        PaperProps={{  
          style: {
          // backgroundColor: theme.palette.mode =="dark"?"rgb(30,37,45)" :"", 
          background:theme.palette.mode =="dark"?"rgb(35, 49, 65)" :"",  // Change this to your desired color
        },
        
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
        {
            content
        }
          {/* 
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           */}
        </DialogContent>
        <DialogActions>
         {
            action
         }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
