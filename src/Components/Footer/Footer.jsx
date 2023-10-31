import './Footer.css'
import '../Button.css'
import { BiCopyright } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast} from 'react-toastify';



function Footer() {
    const [email, setEmail] = useState('')
    const handleSubscribe = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        // setErrorMessage("Please enter valid email address.");
        toast.error('Please enter valid email address.', { position: toast.POSITION.TOP_CENTER })

        return false;
    }
    else {
        setErrorMessage("");
    }

}
    return (
            <footer className="footer mt-3 pt-3">
                <div className='container  border-bottom border-light pb-2'>

                    <div className="Newsletter">
                        <div className="headline">
                            <h2 className='text-white'>Our Newsletter</h2>
                            <p className='centerr  text-white'>Get in touch with us to raise a query regarding the service you need with a easy call. Every customer is served with great attention and priority time.</p>
                        </div>
                    </div>
                    <div className="subscribe centerr my-2">
                        <form className="form" onSubmit={handleSubscribe}>

                            <input className="emailInput border-0 " placeholder="Email" type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input className="bn632-hover bn19 " type="submit" value="Subscribe" />
                            
                        </form>
                    </div>
                    <div className='box-container  pb-4'>
                    <div className='box '>
                            
                            <img src='src/assets/img/Logo4.png' className="rohith" style={{width:"10rem", margin:"0 4vw"}}/>
                            <div className='d-flex gap-3 ms-3'>

                            <a href='https://www.facebook.com/' target='blank'>
                                <img  
                                className="social Facebook"
                                src='src/assets/img/Social Icons/Facebook.png'
                                width={35}
                                alt="Facebook"/>
                            </a>
                            <a href='https://www.Twitter.com/' target='blank'>
                                <img 
                                className="social Twitter"
                                src='src/assets/img/Social Icons/XTwitter.png'
                                width={34}
                                alt="Twitter"/>
                            </a>
                            <a href='https://www.instagram.com/' target='blank'>
                                <img 
                                className="social Instagram"
                                src='src/assets/img/Social Icons/Instagram.png'
                                width={35}
                                alt="Instagram"/>
                            </a>
                            <a href='https://www.youtube.com/' target='blank'>
                                <img 
                                className="social Youtube"
                                src='src/assets/img/Social Icons/Youtube.png'
                                width={35}
                                alt="Youtube"/>
                            </a>
                            <a href='https://www.linkedin.com/feed/' target='blank'>
                                <img 
                                className="social LinkedIn"
                                src='src/assets/img/Social Icons/LinkedIn.png'
                                width={35}
                                alt="LinkedIn"/>
                            </a>                         
                            </div>
                        </div>
                        <div className='box Boxlinks'>
                            <strong>Page Navigation</strong>
                            <a href='#HomeTop' className='text-white'><IoIosArrowForward className='me-1'/>Home</a>
                            <a href='#nextContest' className='text-white'><IoIosArrowForward className='me-1'/>Next Contest</a>
                            <a href='#PriceMoney' className='text-white'><IoIosArrowForward className='me-1'/>Price Money</a>
                            <a href='#WinnersList'className='text-white'><IoIosArrowForward className='me-1'/>Winners List </a>
                            <a href='#FAQ'className='text-white'><IoIosArrowForward className='me-1'/>FAQ</a>

                        </div>
                        <div className='box Boxlinks'>
                            <strong>Legal</strong>
                            <span></span><Link to="/TermandConditions"><a className='text-white' href=''><IoIosArrowForward className='me-1'/>Privacy Policy</a></Link>
                            <Link to="/TermandConditions"><a className='text-white'  href=''><IoIosArrowForward className='me-1'/>Terms and Conditions</a></Link>
                        </div>
                        <div className='box Boxlinks'>
                            <strong>Help</strong>
                            <a  href='/Support'className='text-white'><IoIosArrowForward className='me-1'/>Support</a>
                            {/* <a href='#HomeTop' className='text-white'><IoIosArrowForward className='me-1'/>Login</a> */}
                            <a href='tel:918919088163'  className='text-white'><IoIosArrowForward className='me-1'/>Call</a>
                            <a  href='https://api.whatsapp.com/send/?phone=%2B918919088163&text&type=phone_number&app_absent=0'  className='text-white'><IoIosArrowForward className='me-1'/>Chat Support</a>                       
                        </div>
                    </div>
                </div>   
                <div className="copyRight pt-2">
                    <p className='text-white'><BiCopyright /> Copyright Ezewin. All Rights Reserved</p>
                </div>
            </footer>  
    )
}
export default Footer;