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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CallLeads({
    isOpen, 
    onClose,
    title,
    data,
}) {

  const inputName = React.useRef(null)
  const inputCategory = React.useRef(null)

  console.log(data)

  const [leadData, setLeadData] = React.useState({})

  const onChangeName = (key, e) => {
    // setCampaignData({
    //   ...campaignData,
    //   name: e.target.value
    // })
    setLeadData({
        ...leadData,
        [key]: e.target.value
    })

    console.log(leadData)
  }

  const handleDialogOnClose = (type) => {
    onClose(type, leadData)
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
            New Lead
          </Box>
        </DialogTitle>
        <DialogContent>
            {data && Object.keys(data).map((key, index) => (
               key != 'id' && ( index == 0 ? <TextField
                    autoFocus
                    margin="dense"
                    id="index"
                    label={key}
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => onChangeName(key, e)}
                /> : <TextField
                sx={{marginTop: 3}}
                margin="dense"
                id={index}
                label={key}
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => onChangeName(key, e)}
            />)
            ))
            }
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDialogOnClose('Negative')}>Cancel</Button>
          <Button onClick={()=>handleDialogOnClose('Positive')}>Create Campaign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}