import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/styles.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { SSRProvider } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Topnav from '../Components/Basics/Topnav';
import SideBar from '../Components/Basics/SideBar';
import { getCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function App({ Component, pageProps }) {

  const user = store.getState().userLogin;
  const [showBasic, setShowBasic] = useState(false)

 
  const checkUSer = () => {
    if(hasCookie("user")){
      setShowBasic(true)
    }else if(hasCookie("Admin")){
      setShowBasic(false)
    }else{
      setShowBasic(false)
    }
  }

  useEffect(() => {
    checkUSer()
  }, [user]);


  return (
    <>
      <Head>
        <title>LeadShyne</title>
        <meta name="description" content="Leadshyne CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Provider store={store}>
        <SSRProvider>
        <ToastContainer
                  position="top-right"
                  autoClose={500}
                  limit={1}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light" />
        {showBasic ?
          <main className="main_wrapper">
           
              <Topnav />
           
            <div className="content_wrapper">
               
                <SideBar   />
             
                <Component {...pageProps} />
              
                  </div>
          </main>
        : 
        <Component {...pageProps} />
      }
        </SSRProvider>
    </Provider>
  </>
  )

}



export default App;