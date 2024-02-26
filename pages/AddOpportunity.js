import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import AddOpportunityScreen from '../Components/OpportunityScreens/AddOpportunityScreen'

export default function AddOpportunity() {
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
                    <SideBar isactive='opportunity' />
                    <AddOpportunityScreen />
                </div>
            </main>
        </>
    )
}