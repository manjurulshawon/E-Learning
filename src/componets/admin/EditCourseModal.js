import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

// import Modal from "react-modal";
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

// Modal.setAppElement("#root");

const EditCourseModal = (props) => {
  const { handleClose, method, modalIsOpen,courseId } = props;
  const [data, setData] = useState({});
  const [arrayInput, setArrayInput] = useState('');
  const [about, setAbout] = useState('');
  const [limitations, setLimitations] = useState('');
  const [audience, setAudience] = useState('');
  const [prerequisites, setPrerequisite] = useState('');


//   const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  // console.log("idc", courseId);
  // console.log("courses", data.length);
  // let data = allCourses.filter(course=> course._id == courseId)
  // let data = allCourses.find((course) => course._id == courseId);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
          
          setData(data);
          setIsLoading(false);
          // console.log("courses", data);
      });
  }, []);


useEffect(() => {
 setArrayInput(data?.topics?.join(","))
//  console.log("topics",arrayInput);
}, [])




  const handleSkill = (e) => {
    setData({
      ...data,
      skill: e.target.value,
    });
  };
  const handleInstructorName = (e) => {
    setData({
      ...data,
      created_by: e.target.value,
    });
  };
  const handleCourseName = (e) => {
    setData({
      ...data,
      course_name: e.target.value,
    });
  };
  const handleCourseType = (e) => {
    setData({
      ...data,
      course_type: e.target.value,
    });
  };
  const handleDescription = (e) => {
    setData({
      ...data,
      description: e.target.value,
    });
  };
  const handlePrice = (e) => {
    setData({
      ...data,
      price: e.target.value,
    });
  };
  const handleDuration = (e) => {
    setData({
      ...data,
      duration: e.target.value,
    });
  };
  const handleLanguage = (e) => {
    setData({
      ...data,
      language: e.target.value,
    });
  };
  const handleQuiz = (e) => {
    setData({
      ...data,
      quiz: e.target.value,
    });
  };
  const handleStudent = (e) => {
    setData({
      ...data,
      student: e.target.value,
    });
  };
  const handleAssignment = (e) => {
    setData({
      ...data,
      assignment: e.target.value,
    });
  };
  const handleImage = (e) => {
    setData({
      ...data,
      picture: e.target.value,
    });
  };
  const handleLectures = (e) => {
    setData({
      ...data,
      lectures: e.target.value,
    });
  };
  const handleLearningOutcomes = (e) => {
   const arrayValue =e.target.value
    const parsedArray = arrayValue.split(",");
    // console.log("a", parsedArray);
    setData({
      ...data,
      topics: parsedArray,
    });
  };
  const handleIntro = (e) => {
   setAbout(e.target.value)
  };
  const handleAudience = (e) => {
   setAudience(e.target.value)
  };
  const handlePrerequisites = (e) => {
   setPrerequisite(e.target.value)
  };
  const handleLimitations = (e) => {
   setLimitations(e.target.value)
  };
  const handleVideo = (e) => {
    setData({
      ...data,
      video: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    const updatedData ={
      ...data,
      content:{
        about:about,
        audience:audience,
        prerequisites:prerequisites,
        limitations:limitations
      }
    }
    delete updatedData._id
    console.log("submit data", updatedData);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${courseId}`, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (true) {
          // console.log("up", data);
          toast.success("Course Added Successfully");
          handleClose()
          // setData(data);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div>
      <Modal
        show={modalIsOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // style={{ top: "10%" }}
      >
        <Modal.Header closeButton>
          <div>
            <h4>Edit Course</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
    {  !isLoading &&    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course Name"
                onChange={handleCourseName}
                value={data.course_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL Only"
                onChange={handleImage}
                value={data.picture}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course Type"
                onChange={handleCourseType}
                value={data.course_type}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                onChange={handleDescription}
                value={data.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Learning OutComes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Learning OutComes"
                onChange={handleLearningOutcomes}
                value={data?.topics?.join(",")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Instructor"
                onChange={handleInstructorName}
                value={data.created_by}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={handlePrice}
                value={data.price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Duration"
                onChange={handleDuration}
                value={data.duration}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lecture</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lecture"
                onChange={handleLectures}
                value={data.lectures}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                placeholder="
                Language"
                onChange={handleLanguage}
                value={data.language}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quiz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quiz"
                onChange={handleQuiz}
                value={data.quiz}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Intro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Intro"
                onChange={handleIntro}
                value={data?.content?.about}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Audience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Audience"
                onChange={handleAudience}
                value={data?.content?.audience}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prerequisites</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prerequisites"
                onChange={handlePrerequisites}
                value={data?.content?.prerequisites}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Limitations</Form.Label>
              <Form.Control
                type="text"
                placeholder="Limitations"
                onChange={handleLimitations}
                value={data?.content?.limitations}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Video</Form.Label>
              <Form.Control
                type="text"
                placeholder="Video URL Only"
                onChange={handleVideo}
                value={data.video}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skill</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSkill}
                value={data.skill}
              >
                {/* <option>Skill</option> */}
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assignment</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleAssignment}
                value={data.assignment}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
            <Button className="me-3" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>}
        </Modal.Body>
      </Modal>
     
    </div>
  );
};

export default EditCourseModal;
