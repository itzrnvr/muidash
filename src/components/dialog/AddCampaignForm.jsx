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

export default function AddCampaignForm({
    isOpen, 
    onClose,
    title,
}) {

  const inputName = React.useRef(null)
  const inputCategory = React.useRef(null)

  const [campaignData, setCampaignData] = React.useState({
    name: '',
    category: '',
  })

  const onChangeName = (e) => {
    setCampaignData({
      ...campaignData,
      name: e.target.value
    })
  }

  const onChangeCategory = (e) => {
    setCampaignData({
      ...campaignData,
      category: e.target.value
    })
  }

  const handleDialogOnClose = (type) => {
    onClose(type, campaignData)
    inputName.current.value = ''
    inputCategory.current.value = ''
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
            New Campaign
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            ref={inputName}
            autoFocus
            margin="dense"
            id="name"
            label="Campaign Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeName(e)}
          />
            <TextField
                ref={inputCategory}
                sx={{marginTop: 3}}
                autoFocus
                margin="dense"
                id="category"
                label="Category"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => onChangeCategory(e)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDialogOnClose('Negative')}>Cancel</Button>
          <Button onClick={()=>handleDialogOnClose('Positive')}>Create Campaign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}