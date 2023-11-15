import React, { useState, useEffect } from 'react'
import './Header.css'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { SiTestrail } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";


import { MdPrivacyTip } from "react-icons/md";
import {HiClipboardDocument} from "react-icons/hi2"
// Funtionality 
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { setToken } from '../../redux/actions/loginAction';

import {HomeClick,NextContest,PriceMoney,WinnersList,FAQS} from '../../shared/Navigations/Navigations'

function Header() {

  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  const loginSelector = useSelector((state) => state.isLogin);

  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/' || location.pathname === '/Home'; // Define what's considered the home page


  const handleLogout = () => {
    // Clear the token from localStorage
    console.error("Clear the token from localStorage")
    dispatch(setToken(""));
    localStorage.removeItem('token');
  };


  return (
    <div className='fixed-top Header  header2'>
      <nav className=''>
        <div className='container'>
          <div className='d-flex justify-content-between my-1'>
            {/* Left Side */}
            <div>
              <a href='#'><NavLink to="/"><img src="src/assets/img/Logo4.png" alt="no logo" loading={"lazy"} style={{ width: '70px' }} /></NavLink></a>
            </div>
            {/* Right Side */}
            
            <Toolbar disableGutters>
              
              {isHomePage == true ? <div><Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} id="main-header">
                <MenuItem onClick={HomeClick} to="/"
                 
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b> Home</b>
                </MenuItem>

                <MenuItem
                  onClick={NextContest}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Next Contest</b>
                </MenuItem>

                <MenuItem
                  onClick={PriceMoney}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Price Money</b>
                </MenuItem>


                <MenuItem
                  onClick={WinnersList}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Winners List </b>
                </MenuItem>

                <MenuItem
                  onClick={FAQS}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Faq </b>
                </MenuItem>
              </Box></div> 
              :"" 
              // <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} id="main-header">
              //   <Button as={NavLink} to="/TermandConditions"
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: "white", display: "block" }}>
              //   Terms & Conditions
              // </Button>


              //   <Button as={NavLink} to="/PrivacyPolicy"
              //     onClick={handleCloseNavMenu}
              //     sx={{ my: 2, color: "white", display: "block" }}>
              //     <MdPrivacyTip size={25} /> Privacy Policy
              //   </Button>
              // </Box>
              }




{/* Contests */}

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

              {loginSelector ?
                  <MenuItem as={NavLink} to="/Contests"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}>
                    <b><SiTestrail size={25} /> Book Contest</b>
                  </MenuItem> : ""}


                  
                {loginSelector ?
                  <MenuItem as={NavLink} to="/Profile"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}>
                    <CgProfile size={25} /> Profile
                  </MenuItem> : ""}

                  

                  

                <Button className='p-0'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {loginSelector ? <NavLink className="navlogsty" onClick={handleLogout} to="/"><RiLogoutBoxLine size={25} /> Log Out </NavLink> : <span className='bn632-hover bn19 px-3 py-2'>
                    <NavLink className="navlogsty" to="/Login" >Login</NavLink> / <NavLink className="navlogsty" to="/Register">Register</NavLink>
                  </span>}
                </Button>
              </Box>



              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"} }}>
                <IconButton
                  onClick={handleOpenNavMenu}
                >
                  <GiHamburgerMenu color="white" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  // style={{ backgroundColor:"red"}}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    color: 'black',
                    display: { xs: "block", md: "none" },
                    
                  }}
                ><div style={{color:"red",fontWeight:"700",backgroundColor:"black",margin:"-15px 0px",padding:"12px 0px"}}>
                  <NavLink to="/" >
                    <MenuItem onClick={handleCloseNavMenu} style={{color:"white",fontWeight:"700",backgroundColor:"black"}} className='MenuItemHover'>
                     <AiFillHome size={23} className='me-2'/> Home
                    </MenuItem></NavLink>
                  <NavLink to="/TermandConditions">
                    <MenuItem onClick={handleCloseNavMenu} style={{color:"white",fontWeight:"700",backgroundColor:"black"}}>
                      <Typography textAlign="center" style={{color:"white",fontWeight:"700",backgroundColor:"black"}}><HiClipboardDocument size={25}  className='me-1'/>Term & Conditions</Typography>
                    </MenuItem></NavLink>
                  <NavLink to="/PrivacyPolicy"><MenuItem onClick={handleCloseNavMenu} style={{color:"white",fontWeight:"700",backgroundColor:"black"}}>
                    <Typography textAlign="center" style={{color:"white",fontWeight:"700",backgroundColor:"black"}}><MdPrivacyTip size={25}  className='me-1'/> Privacy Policy</Typography>
                  </MenuItem></NavLink>

                  {loginSelector ?
                    <NavLink to="/Profile">
                      <MenuItem onClick={handleCloseNavMenu} style={{color:"white",fontWeight:"700",backgroundColor:"black"}}>
                        <b></b><CgProfile size={25}  className='me-2'/> Profile
                      </MenuItem></NavLink> : ""}

                      {loginSelector ?
                    <NavLink to="/Contests">
                      <MenuItem onClick={handleCloseNavMenu} style={{color:"white",fontWeight:"700",backgroundColor:"black"}}>
                        <b><SiTestrail size={25} className='me-1'/> Book Contest</b>
                      </MenuItem></NavLink> : ""}


                  <MenuItem onClick={handleCloseNavMenu} >
                    {loginSelector ?
                      <NavLink onClick={handleLogout} to="/" style={{color:"white",fontWeight:"700",backgroundColor:"black"}}><RiLogoutBoxLine size={25} className='me-1'/> Log Out </NavLink> :
                      <span ><NavLink to="/Login" style={{color:"white",fontWeight:"700",backgroundColor:"black"}} >Login</NavLink> / <NavLink to="/Register" style={{color:"white",fontWeight:"700",backgroundColor:"black"}}>Register</NavLink></span>}
                  </MenuItem>
                  </div>
                </Menu>
              </Box>


            </Toolbar>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header





