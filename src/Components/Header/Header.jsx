import React,{ useState,useEffect}  from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import { setToken } from '../../redux/actions/loginAction';

function Header() {
  const [HiddenLink, setHiddenLink] = useState(false);
  const [isLogin1, setisLogin1] = useState("");
  const dispatch = useDispatch();
  // const loginSelector = useSelector((state) => state.loginReducer);


  const loginSelector = useSelector((state) => state.isLogin);

    
      const onClickHandler=()=>{
        if (screenWidth < 650) {
  setHiddenLink(!HiddenLink)
}

}


  // useEffect(() => {
   
  // }, []);

  const handleLogin = async () => { 
    // onClickHandler()

    // const token = 'YOUR_TOKEN'; 
    // localStorage.setItem('token', token);
    
    // Update isLogin1 to indicate the user is logged in
    setisLogin1(true);
  };

  const handleLogout = () => {
    onClickHandler()
    // Clear the token from localStorage
    dispatch(setToken(""));
    localStorage.removeItem('token');
    setisLogin1(false);  // Update isLogin1 to indicate user is logged out
  };

  

  return (
    <div className='fixed-top Header  header2'>
      <nav className=''>
        <div className='container'>
          <div className='d-flex justify-content-between my-1'>
            <div>
              <a href='#'><Link to="/"><img src="src/assets/img/Logo4.png" alt="no logo" loading={"lazy"} style={{ width: '70px' }} /></Link></a>
            </div>
            <div className="rightside mt-2">
              <div className="links" id={HiddenLink ? "hidden" : ""}>
                <div>
                  <a className='nav-item '><Link to="/" onClick={onClickHandler}>Home</Link></a >
                  <a className='nav-item '><Link to="/TermandConditions" onClick={onClickHandler}>Term & Conditions</Link></a >
                  <a className='nav-item '><Link to="/PrivacyPolicy" onClick={onClickHandler}>Privacy Policy</Link></a >
                 

                  <a className="bn632-hover bn19 p-2"  onClick={onClickHandler}>{loginSelector ? <Link  onClick={handleLogout} to="/">Log Out</Link> : <span className='inline-flex' ><Link to="/Login" className='inline-flex'  onClick={onClickHandler}>Login</Link>/<Link className='inline-flex' to="/Register"  onClick={onClickHandler}>Register</Link></span>}</a>   
                </div>
              </div>
              <button onClick={() => setHiddenLink(!HiddenLink)}>
                <TfiMenu style={{ color: "#ffffff", }} /> 
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header





