import React from 'react'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
export const  SidebarData = [
    {
        title:"Apprentiship",
        icon:<WorkspacePremiumOutlinedIcon/>,
        link:"../Pages/Apprentiship"
    },
    {
        title:"Dashboard",
        icon:<DashboardRoundedIcon />,
        link:"../Pages/Dashboard"
    },
    {
        title:"Internship",
        icon:<ImportContactsRoundedIcon/>,
        link:"../Pages/Internship"
    },
    {
        title:"Jobs",
        icon : <BusinessCenterOutlinedIcon />,
        link:"../Pages/Jobs"
    },
    {
        title:"Settings",
        icon:<SettingsOutlinedIcon/>,
        link:"../Pages/Settings"
    }

]