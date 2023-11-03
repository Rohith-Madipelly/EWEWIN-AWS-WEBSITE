
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import ForgetPassword from './Screens/ForgetPassword/ForgetPassword';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

import NotFoundPage from './Screens/NotFoundPage/NotFoundPage';
import TermandConditions from './Screens/Term Conditions/TermandConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy/PrivacyPolicy';
import PaymentScreen from './Screens/PaymentScreen/PaymentScreen';
import ProfilePage from './Screens/ProfilePage';
import PaymentDone from './Screens/PaymentDone';
import PaymentFailed from './Screens/PaymentFailed';
import VerifyOtp from './Screens/VerifyOtp';

import { useSelector } from "react-redux";
import SupportPage from './Screens/SupportPage';
import ResetPassword from './Screens/ForgetPassword/ResetPassword';
import ProfileUpdate from './Screens/ProfileUpdate';
import UpComing_Contest from './Screens/UpComing_Contest';




import { toast, ToastContainer, Zoom } from 'react-toastify';

import ContestPage from './Screens/ContestPage';
// UpComing_Contest

function App() {
  const loginSelector = useSelector((state) => state.isLogin);

  console.error("dscfds>>>>",loginSelector)
  return (
    <div className="App">
      <div>

      </div>
      <ToastContainer></ToastContainer>

      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Forget_Password' element={<ForgetPassword />} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
      
        <Route path='/VerifyOtp' element={<VerifyOtp />} />

        
        <Route path='/Profile' element={!loginSelector?<Login/>:<ProfilePage />} />
        <Route path='/ProfileUpdate' element={!loginSelector?<Login/>:<ProfileUpdate />} />

        <Route path='/Contests' element={!loginSelector?<Login/>:<UpComing_Contest/>} />
        <Route path='/Join/:id?' element={!loginSelector?<Login/>:<ContestPage/>}/>


        <Route path='/PaymentDone' element={!loginSelector?<Login/>:<PaymentDone/>}/>
        <Route path='/PaymentFailed' element={!loginSelector?<Login/>:<PaymentFailed/>}/>
        {/* <Route path='/Wallet' element={<Wallet/>}/> */}
        <Route path='/TermandConditions' element={<TermandConditions/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/PaymentScreen' element={!loginSelector?<Login/>:<PaymentScreen/>}/>
        <Route path='/Support' element={<SupportPage/>}/>
        
        {/* <Route path='/Error' element={<Login />}/> */}

        {/* <Route path='/PaymentPage' element={<PaymentPage />} /> */}
        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  );
}

export default App;
