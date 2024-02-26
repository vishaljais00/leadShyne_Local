import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hasCookie } from 'cookies-next';
import { adminMode } from '../store/dbModeSlice'
import SideBar from '../Components/Basics/SideBar'
import Topnav from '../Components/Basics/Topnav'
import AddClientScreen from '../Components/SuperAdminScreen/AddClientScreen'

export default function AddClient() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (hasCookie('Admin')) {
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
                    <AddClientScreen />
                </div>
            </main>
        </>
    )
}