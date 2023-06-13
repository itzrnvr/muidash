import React, {useMemo} from 'react'
import { CircularProgress, Box, Divider, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const StepperWithProgress = ({callEvents}) => {
    const data = [
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

    const lastPos = data.length

    return (
        <Box sx={{
        width: '100%',
        display: 'flex', 
        alignItems: 'center',
        marginLeft: -3 
        }}>
            {data.map((item, index, arr) => <StepperElement 
            status = {item.status}
            label={item.label}
            position={index} 
            last={lastPos}/>)}
        </Box>
    )
}


const StepperElement = ({position, last, status, label}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                {position != 0 ? <Box sx={{
                    minWidth: 45,  
                    height: '2px', 
                    backgroundColor: 'black',
                    marginRight: 1,
                    borderRadius: 2
                }}></Box> : 
                    <Box sx={{
                        minWidth: 45,  
                        height: '2px', 
                        backgroundColor: 'white',
                        marginRight: 1,
                        borderRadius: 2
                    }}></Box>}
                <Box>
                <Box>
                {status == 'loading' && <Box sx={{height: 42, paddingTop: 1}}><CircularProgress size={24}/></Box>}
                {status == 'stale' && <Brightness1Icon sx={{fontSize: 34, color: 'gray', marginTop: '3px', marginRight: -1}}/> }
                {status == 'success' && <CheckCircleIcon sx={{fontSize: 34, color: 'green', marginTop: '3px', marginRight: -1}}/> }
                {status == 'fail' && <ReportProblemIcon sx={{fontSize: 34, color: 'red', marginTop: '3px', marginRight: -1}}/>}
                </Box> 
                </Box>
                {position != last ? <Box sx={{
                    minWidth: 45,  
                    height: '2px', 
                    backgroundColor: 'black',
                    marginLeft: 2,
                    borderRadius: 2
                }}></Box> :
                    <Box sx={{
                        minWidth: 45,  
                        height: '2px', 
                        backgroundColor: 'white',
                        marginLeft: 2,
                        borderRadius: 2
                    }}></Box>}
            </Box>
        <Typography sx={{fontSize: 14, wordBreak: 'break-all', textAlign: 'center'}}>{label}</Typography>
        </Box>
    )
}

export {StepperElement} 
export default StepperWithProgress