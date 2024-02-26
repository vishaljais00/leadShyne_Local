import Head from 'next/head'
import ViewUserScreens from '../Components/AdminScreens/ViewUserScreens'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'


export default function ViewUsers() {
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
                    <SideBar isactive='leads' />
                    <ViewUserScreens />
                </div>
            </main>
        </>
    )
}
