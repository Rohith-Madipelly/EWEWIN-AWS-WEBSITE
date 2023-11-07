
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
// import ProfilePage from './Screens/ProfilePage';
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
import Transactions from './Screens/Transactions';
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
        <Route path='/Login' element={!loginSelector?<Login/>:<Home />} />
        <Route path='/Register' element={!loginSelector?<Register />:<Home />} />
        <Route path='/Forget_Password' element={!loginSelector?<ForgetPassword />:<Home />} />
        <Route path='/ResetPassword' element={!loginSelector?<ResetPassword/>:<Home />} />
      
        <Route path='/VerifyOtp' element={<VerifyOtp />} />

        
        {/* <Route path='/Profile' element={!loginSelector?<Login/>:<ProfilePage />} /> */}
        <Route path='/Profile' element={!loginSelector?<Login/>:<ProfileUpdate />} />
        <Route path='/Profile' element={!loginSelector?<Login/>:<ProfileUpdate />} />

        <Route path='/Contests' element={!loginSelector?<Login/>:<UpComing_Contest/>} />

        {/* <Route path='/Join/:id?' element={!loginSelector?<Login/>:<ContestPage/>}/> */}

        <Route path='/PaymentScreen' element={!loginSelector?<Login/>:<PaymentScreen/>}/>
        <Route path='/PaymentDone' element={!loginSelector?<Login/>:<PaymentDone/>}/>
        <Route path='/PaymentFailed' element={!loginSelector?<Login/>:<PaymentFailed/>}/>

        <Route path='/Transactions' element={<Transactions/>}/>

        <Route path='/TermandConditions' element={<TermandConditions/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  );
}

export default App;
