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
import { alignProperty } from '@mui/material/styles/cssUtils';x
import CallLeadsList from './CallLeadsList';
import { useSelector, useDispatch } from 'react-redux';

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
  const selectedData = useSelector((state) => state.leads.selectedData)

  console.log(data)

  const handleDialogOnClose = (type) => {
    onClose(type, leadData)
  }

  const callLeads = () => {
    console.log()
  }

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

        <CallLeadsList data={selectedData}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDialogOnClose('Negative')}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}