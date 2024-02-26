import Head from 'next/head'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import ContactViewScreen from '../Components/ContactScreens/ContactViewScreen'

export default function ContactView() {
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
          <SideBar isactive='contact' />
          <ContactViewScreen/>
        </div>
      </main>
    </>
  )
}