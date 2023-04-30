import React, { useEffect, useState } from "react";
import DashboardLayout from "../admin/DashboardLayout";
import { Button, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const { user, isLoading, setIsLoading } = useAuth();

  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/enrolls`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("courses", data);
        const userEmail = user.email;
        const updateData = data.filter((mo) => mo.email === userEmail);
        setData(updateData);
        setIsLoading(false);
      });
  }, [data]); 

  const handleNavigate =(id)=>{
    navigate(`/coursesMaterials/${id}`)
  }
  return (
    <div>
      <DashboardLayout>
        <main className="ttr-wrapper">
          <div className="container-fluid">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Instructor</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  data?.map((dt, key) => (
                    <tr>
                      <td>{key + 1}</td>

                      <td>{dt.course.course_name}</td>
                      <td>{dt.course.created_by}</td>

                      <td>{dt.status}</td>
                      <td className="d-flex">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="mx-2"
                          onClick={(e) => handleNavigate(dt.course._id, e)}
                    
                        >
                         View
                        </Button>

                      
                     
                      </td>
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

export default MyCourse;
