import React, {useState} from 'react'
import { headerStyles } from '../../../../components/header/headerStyles'
import { headerActions } from '../../../../state/features/headerSlice'
import CommonButton from '../../../../components/common/CommonButton/CommonButton'
import {Box, Button} from '@mui/material'
import UploadFile from '@mui/icons-material/UploadFile'
import handleCsvUpload from './handleCsvUpload'
import { leadsActions } from '../../../../state/features/leadSlice'
import { useDispatch } from 'react-redux'
import CallIcon from '@mui/icons-material/Call';
import BasicSelect from '../../../../components/common/BasicSelect/BasicSelect'
import AddIcon from '@mui/icons-material/Add';

const LeadHeaderMenu = () => {
  const dispatch = useDispatch()
  const [csvData, setCsvData] = useState([]);
  const [filename, setFilename] = useState("");

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setFilename(name);
    handleCsvUpload(file)

    const channel = new BroadcastChannel('sw-messages');
    channel.addEventListener('message', event => {
      console.log('Received', event.data.data);
      dispatch(leadsActions.setData(event.data.data))
    });
  }

  return (
    <Box>
        <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFile />}
        sx={{ marginRight: "1rem" }}
      >
        Import CSV
        <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
      </Button>

      <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFile />}
        sx={{ marginRight: "1rem" }}
      >
        Export CSV
      </Button>

      <Button
        component="label"
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ marginRight: "1rem" }}
        onClick={()=> dispatch(leadsActions.openDialog())}
      >
        Add Lead
      </Button>

      <Button
        component="label"
        variant="outlined"
        startIcon={<CallIcon />}
        sx={{ marginRight: "1rem" }}
        onClick={()=> dispatch(leadsActions.openCallLeadsDialog())}
      >
        Smart-Dialing
      </Button>

      {/* <Button
        component="label"
        variant="outlined"
        startIcon={<CallIcon />}
        sx={{ marginRight: "1rem" }}
      >
        Dial
        <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
      </Button> */}
      {/* <CommonButton
        sx={headerStyles.webButton}
          onClick={()=> console.log('click')}
        >
        Import 
      </CommonButton> */}
    </Box>

  )
}

export default LeadHeaderMenu