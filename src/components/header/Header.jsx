import React from 'react'
import CommonButton from '../common/CommonButton/CommonButton'
import NotificationBell from '../common/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {headerStyles} from './headerStyles'
import { campaignActions } from '../../state/features/campaignSlice';
import { headerActions } from '../../state/features/headerSlice';
import { deserialize } from 'react-serialize';
import * as MuiIcons from '@mui/icons-material'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const Header = ({ title}) => {

    const dispatch = useDispatch()
    const state = useSelector(state=> state.header)
    
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell
                    iconColor="white"
                />
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    {state.actionMenu.length != 0 ? state.actionMenu.map(dat => {
                        switch(dat.type){
                            case 'Button': 
                                return (
                                    <CommonButton
                                        sx={headerStyles.webButton}
                                        variant={dat.variant}
                                        onClick={()=> dispatch(headerActions.executeEvent(dat.event))}
                                    >
                                        {dat.title}
                                    </CommonButton>
                                )
                            case 'IconButton':
                                return (
                                    <Tooltip
                                        title={dat.title}
                                    >
                                        <IconButton
                                            color="white"
                                            sx={headerStyles.helpIcon}
                                            onClick={()=> dispatch(headerActions.executeEvent(dat.event))}
                                        >
                                            {MuiIcons[DeleteIcon]}
                                        </IconButton>
                                    </Tooltip>
                                )
                            default:
                                
                        }
                    }): ''}


                </Box>
            </Box>
        </Box>
    )
}

export default Header