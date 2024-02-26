import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import ManageLeadScreen from '../Components/LeadsScreens/ManageLeadScreen'
import withUser from '../HOC/WithUserhoc'

 function ManageLeads() {
  return (
    <>
      <ManageLeadScreen />
    </>
  )
}

export default withUser(ManageLeads);