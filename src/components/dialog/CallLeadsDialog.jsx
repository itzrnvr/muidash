import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CampaignIcon from '@mui/icons-material/Campaign';
import {Box, Divider} from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils';
import CallLeadsList from './CallLeadsList';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client'
import { socket } from '../../socket';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CallLeadsDialog({
    isOpen, 
    onClose,
    title,
    data,
}) {

  const dispatch = useDispatch()

  console.log(data)

  const handleDialogOnClose = () => {
    onClose()
  }

  const callLeads = (item) => {
    axios.post('http://localhost:3000/smartCall', item, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  React.useEffect(() => {
    console.log("DataToBeCalled", data)
    socket.connect();

    socket.on('foo', (data) => {
      console.log(data)
    });

    callLeads(data[0])

    return () => {
      socket.disconnect();
    };
  }, [isOpen])

  return (
    <div>
      <Dialog open={isOpen}  TransitionComponent={Transition} onClose={onClose}>
        <DialogTitle>
          <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
          >
            <CampaignIcon sx={{marginRight: 1}}/>
            Smart-Dialing
          </Box>
        </DialogTitle>
        <DialogContent>

        <CallLeadsList data={data}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDialogOnClose()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}