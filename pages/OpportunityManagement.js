import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import OpportuntyManagementScreen from '../Components/OpportunityManagement/OpportunityManagementScreen'

export default function OpportunityManagement() {
  return (
    <>
      <Head>
        <title>LeadShyne</title>
        <meta name="description" content="Leadshyne CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main_wrapper">
        <Topnav />
        <div className="content_wrapper">
          <SideBar isactive='opportunityManage' />
          <OpportuntyManagementScreen/>
        </div>
      </main>
    </>
  )
}
