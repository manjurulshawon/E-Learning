import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../componets/home/Header";
import Footer from "../componets/home/Footer";
import { Button, Spinner, Table } from "react-bootstrap";
import EnrollModal from "./EnrollModal";
import Portal from "../componets/portal/Portal";

const Enroll = () => {
  const { enrollId } = useParams();
  console.log("enroll id", enrollId);
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${enrollId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("courses", data);

        setCourse(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="page-content bg-white">
        <div className="page-banner backgroudGray">
          <div className="container">
            <div className="page-banner-entry">
              <h1 className="text-white">Enrollment</h1>
            </div>
          </div>
        </div>
        <div class="content-block">
          <div class="section-area section-sp1">
            <div class="container">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className="text-white">#</th>
                    <th className="text-white">Course Name</th>
                    <th className="text-white">Instructor Name</th>
                    <th className="text-white">Lecture</th>
                    <th className="text-white">Enrollment Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading ? (
                    <tr>
                      <td>1</td>
                      <td>{course.course_name}</td>
                      <td>{course.created_by}</td>
                      <td>{course.lectures}</td>
                      <td>{course.price}</td>
                    </tr>
                  ) : (
                    <div className="text-center">
                      <Spinner animation="border" />
                    </div>
                  )}
                </tbody>
              </Table>
              <div className="text-center">
                <Button onClick={handleShow}>Proceed Payment</Button>
                {/* <Portal> */}
                <EnrollModal
                  show={show}
                  handleClose={handleClose}
                  course={course}
                />
                {/* </Portal> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enroll;
