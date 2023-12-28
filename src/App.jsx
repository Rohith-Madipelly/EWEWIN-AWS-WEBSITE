
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ lazy, Suspense,useEffect }  from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import ProfilePictureUpload from './Screens/Term Conditions/ProfileUpload';

 


const Loader = lazy(() => import('./shared/Loader/Loader'));


const LoadingFallback = () => <Loader/>;



//Page Route
// import Home from './Screens/Home';
const Home = lazy(() => import('./Screens/Home'));
const Login = lazy(() => import('./Screens/Login/Login'));
const Register = lazy(() => import('./Screens/Register/Register'));
const ForgetPassword = lazy(() => import('./Screens/ForgetPassword/ForgetPassword'));
const NotFoundPage = lazy(() => import('./Screens/NotFoundPage/NotFoundPage'));
const TermandConditions = lazy(() => import('./Screens/Term Conditions/TermandConditions'));
const PrivacyPolicy = lazy(() => import('./Screens/PrivacyPolicy/PrivacyPolicy'));


const SupportPage = lazy(() => import('./Screens/SupportPage'));
const ResetPassword = lazy(() => import('./Screens/ForgetPassword/ResetPassword'));
const ProfileUpdate = lazy(() => import('./Screens/ProfileUpdate'));
const ProfileUpdateCopy = lazy(() => import('./Screens/ProfileUpdateCopy'));
const Transactions = lazy(() => import('./Screens/Transactions')); 
const UpComing_Contest = lazy(() => import('./Screens/UpComing_Contest'));
const UpComing_Contest2 = lazy(() => import('./Screens/UpComing_Contest2'));
const VerifyOtp = lazy(() => import('./Screens/VerifyOtp'));


// export const checkDefaultTheme = () => {
//   const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
//   document.body.classList.toggle('dark-theme', isDarkTheme)
//   return isDarkTheme
// }

// checkDefaultTheme()

function App() {

  const loginSelector = useSelector((state) => state.isLogin);

  const requestPermission = async () => {

    const permission = await Notification.requestPermission()
    //permission > default denied granted
    if (permission === "granted") {

      const newSw = await navigator.serviceWorker.register(
        'firebase-messaging-sw.jsx'
      );

      console.error("fewf")

      const FCMtoken =await getToken(messaging, { vapidKey:'BG69UuiKTGIsERQLTFFvAynES2hMU1uzuzAs-Nv3JHOJz1nbIwZYzGZn4bWToibeUf8a-B3HH8alS94OmvK1DPQ',serviceWorkerRegistration:newSw })
      
      console.error("Token Gen",FCMtoken)
      // SaveFCMToken(FCMtoken)

    }
    else if (permission === "denied") {
      // requestPermission()
      alert("You denied for the notification")
    }
  }

  const SaveFCMToken=async(FCMtoken)=>{
    console.error("this is the token going to save in db",FCMtoken)
    // try {
    //   const responsed=UserFCMNotificationsToken(FCMtoken)
    //   if (responsed) {
    //     console.error("FCM Token is Saved")
    //   }
    //   else {
    //     console.error("No Response from FCM Token API")
    //   }
    // } catch (error) {
    //   console.error("Error in FCM TOKEN API")
    // }
  }


  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <div className="App">

      <Suspense fallback={<LoadingFallback/>}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={!loginSelector ? <Login /> : <Home />} />
          <Route path='/Register' element={!loginSelector ? <Register /> : <Home />} />
          <Route path='/Forget_Password' element={!loginSelector ? <ForgetPassword /> : <Home />} />
          <Route path='/ResetPassword' element={!loginSelector ? <ResetPassword /> : <Home />} />
          <Route path='/VerifyOtp' element={<VerifyOtp />} />
    
          <Route path='/Profile' element={!loginSelector ? <Login /> : <ProfileUpdate />} />
          <Route path='/ProfileCopy' element={!loginSelector ? <Login /> : <ProfileUpdateCopy />} />

          {/* <Route path='/Contests' element={!loginSelector ? <Login /> : <UpComing_Contest />} /> */}
          <Route path='/Contests' element={!loginSelector ? <Login /> : <UpComing_Contest2 />} />


          <Route path='/Transactions' element={<Transactions />} />
          <Route path='/TermandConditions' element={<TermandConditions />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/Support' element={<SupportPage />} />
          <Route path='*' element={<NotFoundPage />} /> 


          <Route path='/upload' element={<ProfilePictureUpload />} /> 
      

        </Routes>
      </Suspense>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
