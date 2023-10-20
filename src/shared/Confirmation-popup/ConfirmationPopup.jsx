import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import classes from "./ConfirmationPopup.module.css";

function ConfirmationPopup(props) {
  return (
    <Modal
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Confrim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Are you sure you want to cancel the booking?</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.cancelBooking}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationPopup;
