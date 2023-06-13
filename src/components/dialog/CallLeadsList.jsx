import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';
import CallStepper from './CallStepper';
import StepperWithProgress, { StepperElement } from '../common/StepperWithProgress/StepperWithProgress';

export default function CallLeadsList({data, event}) {


  const stepperData = [
    {
        label: 'Initiating Call',
        desc: 'Trying to reach the number',
        status: 'loading'
    },
    {
        label: 'Ringing',
        desc: 'Trying to reach the number',
        status: 'success'
    },
    {
        label: 'Answered',
        desc: 'dsgjosslks',
        status: 'stale',
    },
    {
        label: 'Completed',
        desc: 'Trying to reach the number',
        status: 'fail'
    }
  ]

  return (
    <Box sx={{ width: '500px',  bgcolor: 'background.paper'}}>
      <Typography sx={{color: 'black!important'}} variant='h6'>{`Calling ${data[0]['Lead Number']}`}</Typography>
      <StepperWithProgress data={data}/>
    </Box>
  );
}