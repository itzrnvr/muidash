import React, { useState } from 'react'
import CampaignHeaderMenu from '../../pages/campaign/pages/CampaignHeaderMenu'
import LeadHeaderMenu from '../../pages/campaign/pages/LeadManagement/LeadHeaderMenu'
import DashboardHeaderMenu from '../../pages/dashboard/DashboardHeaderMenu'
import { useSelector } from 'react-redux'

const HeaderMenu = () => {
    const currentPath = useSelector((state) => state.path.path)
    const [currentMenu, setCurrentMenu] = useState()
    const menuItems = {
        '/dashboard': <DashboardHeaderMenu/>,
        '/campaign/campaignManagement': <CampaignHeaderMenu/>,
        '/campaign/leadManagement': <LeadHeaderMenu/>
    }
    return (
        menuItems[currentPath]
    )
}

export default HeaderMenu