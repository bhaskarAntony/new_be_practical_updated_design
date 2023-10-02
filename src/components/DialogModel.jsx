import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../styles/dialogmodel.css'
import Form from 'react-bootstrap/Form';

function DialogModel({ show, handleClose }) {
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (e) => {
    //   setInputValue(e.target.value);
    // };
  return (
    <Modal show={show} onHide={handleClose} className='dialog_register'>
      <Modal.Header closeButton className='modal-header align-items-center d-flex'>
        <Modal.Title>
            <div className="online-indicator"></div>
        </Modal.Title>
        <p className='px-2 fw-bold pt-4'>Our Counceler is in <span classname="text-success">Online</span></p>
      </Modal.Header>
      <Modal.Body className='modal-body'>
  
      <div className="register-card">
       <div className="text-center">
       {/* <img src="https://abhirajchatterjee.netlify.app/images/hello-transparent-2.gif" alt="" /> */}
       </div>
        <Form.Label>Can i Know your name?</Form.Label>
        <Form.Group controlId="floatingInput" claaName="mt-2">
      <Form.Control
        type="text"
        placeholder="Enter Name"
      />
    </Form.Group>
    <Form.Label>Mobile Number</Form.Label>
      <Form.Group controlId="floatingInput" className="mt-2">
      <Form.Control
        type="text"
        placeholder="Enter Your number"
      />
    </Form.Group>
    <button className="register-btn w-100 mt-3 p-2 position-relative fs-5">Send Request To Chat
    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle fs-5">
       
       <span class="visually-hidden">New alerts</span>
     </span>
    </button>
      </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default DialogModel;
