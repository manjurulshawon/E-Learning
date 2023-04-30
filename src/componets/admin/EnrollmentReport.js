import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { toast } from "react-toastify";
import './EnrollmentReport.css'
const EnrollmentReport = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // console.log("courses", data.length);
  // let data = allCourses.filter(course=> course._id == courseId)
  // let data = allCourses.find((course) => course._id == courseId);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/enrolls`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("courses", data);
        const confirmData = data.filter(dt=> dt.status == "confirm")
        setData(confirmData);
        setIsLoading(false);
      });
  }, [data]);

  const handleConfirmation = (id, e) => {
    setIsLoading(true);
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      const status = "confirm";
      const updateData = {
        status: status,
      };

      fetch(`${process.env.REACT_APP_API_BASE_URL}/enrolls/${id}`, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (true) {
            console.log("up", data);
            toast.success("Payment Confirmed");
            // setData(data);
          }
        });
      e.preventDefault();
    }
  };
  const handleCancel = (id, e) => {
    setIsLoading(true);
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      const status = "cancel";
      const updateData = {
        status: status,
      };

      fetch(`${process.env.REACT_APP_API_BASE_URL}/enrolls/${id}`, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (true) {
            // console.log("up", data);
            toast.success("Payment Canceled");
            // setData(data);
          }
        });
      e.preventDefault();
    }
  };
  function handlePrint() {
    const content = document.getElementById('printable-content');
    window.print(content);
  }
  return (
    <div>
      <DashboardLayout>
        <main className="ttr-wrapper">
          <div className="container-fluid">
          <div className="db-breadcrumb no-print">
            <h4 className="breadcrumb-title">Enrollment</h4>
            <ul className="db-breadcrumb-list">
            
              {/* <li>Courses</li> */}
            </ul>
            <Button  variant="outline-success"
                          size="sm" 
                          onClick={handlePrint}>Print</Button>
          </div>
            <Table striped className="print-only" id="printable-content">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Course Name</th>
                  <th>User Email</th>
                  <th>TrxId</th>
                  <th>Phone</th>
                  <th>Enroll Date</th>
                  {/* <th>Status</th>
                  <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  data?.map((dt, key) => (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{dt.name}</td>
                      <td>{dt.course.course_name}</td>
                      <td>{dt.email}</td>
                      <td>{dt.trxId}</td>
                      <td>{dt.phone}</td>
                      <td>{dt.enrollDate}</td>
                      {/* <td>{dt.status}</td>
                      <td className="d-flex">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="mx-2"
                          onClick={(e) => handleConfirmation(dt._id, e)}
                          disabled={dt.status == "confirm" ? true : false}
                        >
                          <AiOutlineCheck />
                        </Button>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          disabled={dt.status == "cancel" ? true : false}
                          onClick={(e) => handleCancel(dt._id, e)}
                        >
                          <FaTrash />
                        </Button>
                        
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </main>
      </DashboardLayout>
    </div>
  );
};

export default EnrollmentReport;
