import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: '/dashboard',
        subRoutes: ['/dashboard']
    },
    {
        id: 1,
        icon: <CampaignIcon />,
        label: 'Campaign',
        route: '/campaign/campaignManagement',
        subRoutes: ['/campaign/campaignManagement', '/campaign/leadManagement']
    }
]