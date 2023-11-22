
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ lazy, Suspense }  from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast, ToastContainer, Zoom } from 'react-toastify';



const Loader = lazy(() => import('./shared/Loader/Loader'));


const LoadingFallback = () => <Loader/>;



//Page Route
const Home = lazy(() => import('./Screens/Home'));
const Login = lazy(() => import('./Screens/Login/Login'));
const Register = lazy(() => import('./Screens/Register/Register'));
const ForgetPassword = lazy(() => import('./Screens/ForgetPassword/ForgetPassword'));
const NotFoundPage = lazy(() => import('./Screens/NotFoundPage/NotFoundPage'));
const TermandConditions = lazy(() => import('./Screens/Term Conditions/TermandConditions'));
const PrivacyPolicy = lazy(() => import('./Screens/PrivacyPolicy/PrivacyPolicy'));
const PaymentScreen = lazy(() => import('./Screens/PaymentScreen/PaymentScreen'));
const PaymentDone = lazy(() => import('./Screens/PaymentDone'));
const PaymentFailed = lazy(() => import('./Screens/PaymentFailed'));
const SupportPage = lazy(() => import('./Screens/SupportPage'));
const ResetPassword = lazy(() => import('./Screens/ForgetPassword/ResetPassword'));
const ProfileUpdate = lazy(() => import('./Screens/ProfileUpdate'));
const ContestPage = lazy(() => import('./Screens/ContestPage'));
const Transactions = lazy(() => import('./Screens/Transactions')); 
const UpComing_Contest = lazy(() => import('./Screens/UpComing_Contest'));
const VerifyOtp = lazy(() => import('./Screens/VerifyOtp'));


function App() {
  const loginSelector = useSelector((state) => state.isLogin);
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
          <Route path='/Profile' element={!loginSelector ? <Login /> : <ProfileUpdate />} />
          <Route path='/Contests' element={!loginSelector ? <Login /> : <UpComing_Contest />} />
          <Route path='/Join/:id?' element={!loginSelector ? <Login /> : <ContestPage />} />
          <Route path='/PaymentScreen' element={!loginSelector ? <Login /> : <PaymentScreen />} />
          <Route path='/PaymentDone' element={!loginSelector ? <Login /> : <PaymentDone />} />
          <Route path='/PaymentFailed' element={!loginSelector ? <Login /> : <PaymentFailed />} />
          <Route path='/Transactions' element={<Transactions />} />
          <Route path='/TermandConditions' element={<TermandConditions />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/Support' element={<SupportPage />} />
          <Route path='*' element={<NotFoundPage />} /> 
        </Routes>
      </Suspense>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
