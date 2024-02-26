import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import AddSub_3Product from '../Components/ManageProductSub-3Catogery/AddSub_3Product'


export default function AddSub_3ProductList() {
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
                    <SideBar isactive='product' />
                    <AddSub_3Product/>
                 
                
                </div>
            </main>
        </>
    )
}
