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
import { MdPrivacyTip } from "react-icons/md";
// Funtionality 
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { setToken } from '../../redux/actions/loginAction';

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
              {console.error(isHomePage)}
              {isHomePage == true ? <div><Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} id="main-header">
                <Button href="#HomeTop" to="/"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b> Home</b>
                </Button>


                <Button href="#nextContest"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Next Contest</b>
                </Button>

                <Button href="#PriceMoney"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Price Money</b>
                </Button>


                <Button href="#WinnersList"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>Winners List </b>
                </Button>

                <Button href="#FAQ"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <b>FAQ </b>
                </Button>
              </Box></div> 
              : <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} id="main-header">
                <Button as={NavLink} to="/TermandConditions"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                Term & Conditions
              </Button>


                <Button as={NavLink} to="/PrivacyPolicy"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <MdPrivacyTip size={25} /> Privacy Policy
                </Button>
              </Box>
              }






              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {loginSelector ?
                  <Button as={NavLink} to="/Profile"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}>
                    <CgProfile size={25} /> Profile
                  </Button> : ""}

                <Button className='p-0'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {loginSelector ? <NavLink className="navlogsty" onClick={handleLogout} to="/"><RiLogoutBoxLine size={25} /> Log Out </NavLink> : <span className='bn632-hover bn19 px-3 py-2'>
                    <NavLink className="navlogsty" to="/Login" >Login</NavLink> / <NavLink className="navlogsty" to="/Register">Register</NavLink>
                  </span>}
                </Button>
              </Box>



              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  onClick={handleOpenNavMenu}
                >
                  <GiHamburgerMenu color="white" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}

                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" }
                  }}
                ><NavLink to="/">
                    <MenuItem onClick={handleCloseNavMenu}>
                      Home
                    </MenuItem></NavLink>
                  <NavLink to="/TermandConditions">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Term & Conditions</Typography>
                    </MenuItem></NavLink>
                  <NavLink to="/PrivacyPolicy"><MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><MdPrivacyTip size={25} /> Privacy Policy</Typography>
                  </MenuItem></NavLink>

                  {loginSelector ?
                    <NavLink to="/Profile">
                      <MenuItem onClick={handleCloseNavMenu} >
                        <CgProfile size={25} /> Profile
                      </MenuItem></NavLink> : ""}

                  <MenuItem onClick={handleCloseNavMenu} >
                    {loginSelector ?
                      <NavLink onClick={handleLogout} to="/"><RiLogoutBoxLine size={25} /> Log Out </NavLink> :
                      <span><NavLink to="/Login" >Login</NavLink> / <NavLink to="/Register">Register</NavLink></span>}
                  </MenuItem>

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





