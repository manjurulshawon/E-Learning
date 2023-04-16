import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-10%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

Modal.setAppElement("#root");

const CourseModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className="btn btn-primary">
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // overlayRef={(node) => (this.overlayRef = node)}
        // contentRef={(node) => (this.contentRef = node)}
        // className="ReactModal__Body--open"
      >
        <div className="d-flex justify-content-between mb-3">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Course</h2>
          <button onClick={closeModal} className="btn btn-danger ml-3">
            close
          </button>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Course Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Course Type" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Instructor" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Lecture" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Duration" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quiz" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
      {/* <Modal
        show={modalIsOpen}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default CourseModal;
