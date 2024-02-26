import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import Sub_2ProductScreen from '../Components/ManageProductSub-2Catogery/Sub_2ProductScreen';


 export default function ManageSub_2Product(){

    return(

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
          <SideBar isactive='ProfilePermissionManagement' />
        <Sub_2ProductScreen/>
        </div>
      </main>
        </>
    )
}