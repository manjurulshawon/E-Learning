import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import bkash from "../assets/images/bkash.jpg";
import { toast } from "react-toastify";
import Portal from "../componets/portal/Portal";
import useAuth from "../hooks/useAuth";

const EnrollModal = (props) => {
    const {user} =useAuth()
  const { show, handleClose,course } = props;
  const [data, setData] = useState({});
  console.log("enrolCO",course);
  const handleName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };
  const handleTrxId = (e) => {
    setData({
      ...data,
      trxId: e.target.value,
    });
  };
  const handlePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    data.status = "pending"
    data.course = course
    data.displayName = user.displayName
    data.email = user.email
    data.student = course.student
    data.enrollDate = new Date().toLocaleDateString()

    fetch(`${process.env.REACT_APP_API_BASE_URL}/enrolls`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          // alert(" Successfully");

          // clearTheCart();
          // reset();
          // history.push('/')
          toast.success("Payment successfully , wait for confirmation");
          setData({
            name: "",
            trxId: "",
            phone: "",
            
          });
          handleClose()
        }
      });
  };
  return (
    <>
        {/* <Portal> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{top: "10%"}}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
          <img src={bkash} height={120} width={120} />
          <div><h4>01314569874</h4></div>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"
        onChange={handleName}
        value={data.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>TrxId</Form.Label>
        <Form.Control type="text" placeholder="TrxId"
         onChange={handleTrxId}
         value={data.trxId}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" 
         onChange={handlePhone}
         value={data.phone}
        />
      </Form.Group>
      <Button className="me-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">Pay</Button>
    </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary">Pay</Button>
        </Modal.Footer> */}
      </Modal>
      {/* </Portal> */}
    </>
  );
};

export default EnrollModal;
