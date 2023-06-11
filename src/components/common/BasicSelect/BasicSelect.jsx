import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect() {
  const [dialingMode, setDialingMode] = React.useState('Smart-Dialing');

  const handleChange = (event) => {
    setDialingMode(event.target.value);
  };

  return (
    <Box sx={{ 
        display: 'inline', 
        minWidth: '180px', 
        height: '10px', 
    }}>
      <FormControl sx={{

        }}>
        <InputLabel color='white' id="demo-simple-select-label">Dialing Mode</InputLabel>
        <Select 
        sx={{
          color: 'white!important', 
          borderColor: 'white!important',
          height: '36px',
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dialingMode}
        label="Dialing Mode"
        onChange={handleChange}
        >
          <MenuItem value={10}>Smart-Dialing</MenuItem>
          <MenuItem value={20}>Preview</MenuItem>
          <MenuItem value={30}>Predictive</MenuItem>
          <MenuItem value={40}>Power</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}