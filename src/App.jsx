
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

function App() {
  
  return (
    <div className="App">
      <div>

      </div>

      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Forget_Password' element={<ForgetPassword />} />
      
        <Route path='/VerifyOtp' element={<VerifyOtp />} />


        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='/PaymentDone' element={<PaymentDone/>}/>
        <Route path='/PaymentFailed' element={<PaymentFailed/>}/>
        {/* <Route path='/Wallet' element={<Wallet/>}/> */}
        <Route path='/TermandConditions' element={<TermandConditions/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/PaymentScreen' element={<PaymentScreen/>}/>
        
        {/* <Route path='/Error' element={<Login />}/> */}

        {/* <Route path='/PaymentPage' element={<PaymentPage />} /> */}
        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  );
}

export default App;
