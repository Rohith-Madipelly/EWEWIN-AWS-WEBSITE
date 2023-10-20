import React from "react";
import { Alert } from "react-bootstrap";
import classes from "./AlertMessage.module.css";

function AlertMessage(props) {


  return (
    <div className={classes.container}>
      <Alert
        className={classes.alert}
        variant={props.type}
        // onClose={() => setShow(false)}
        // dismissible
      >
        <h6>{props.message}</h6>
      </Alert>
    </div>
  );
}

export default AlertMessage;
