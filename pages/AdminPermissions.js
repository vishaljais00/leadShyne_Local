import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hasCookie } from 'cookies-next';
import { adminMode } from '../store/dbModeSlice'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import AdminPermissionScreen from '../Components/SuperAdminScreen/AdminPermissionScreen';
import withAdmin from '../HOC/Withhoc';


 function AdminPermissions() {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const dbMode = useSelector((state) => state.dbMode.value)

    useEffect(() => {
        if (hasCookie('Admin')) {
            setisLoggedIn(true)
            dispatch(adminMode())
        }
    }, [])

    return (
        <>
            <Head>
                <title>LeadShyne</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main_wrapper">
                <Topnav />
                <div className="content_wrapper">
                    <SideBar mode='admin' />
                    <AdminPermissionScreen />
                </div>
            </main>
        </>
    )
}

export default withAdmin(AdminPermissions)
