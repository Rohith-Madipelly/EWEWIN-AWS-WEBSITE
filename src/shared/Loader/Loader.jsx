import React from "react";
import "./Loader.css";
import { Backdrop, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Backdrop
      sx={{ color: "#ff0000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" thickness={4} size={60} />

      <br></br>
    
    </Backdrop>
  );
}

export default Loader;
