import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout';
import CourseModal from './Modal';
import { Button, Table } from 'react-bootstrap';

const Users = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   
    console.log("courses", data.length);
    // let data = allCourses.filter(course=> course._id == courseId)
    // let data = allCourses.find((course) => course._id == courseId);
    useEffect(() => {
  
      fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then(res => res.json())
        .then(data => {
          console.log("data", data);
          let filter = data.filter(dt=> dt.userType == 'user')
          setData(filter)
          setIsLoading(false)
        })
  
    }, [data])
    const handleDelete= (id)=>{
        const proceed = window.confirm('are you sure, you want to delete?');
        if(proceed){
            const url = `${process.env.REACT_APP_API_BASE_URL}/users/${id}`
            fetch (url,{
                method:'DELETE',
               
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remainingUsers= data.filter(users=>users._id !== id);
                    setData(remainingUsers)
    
                }
            })
        }

    }
    return (
      <DashboardLayout>
        <main className="ttr-wrapper">
          <div className="container-fluid">
            <div className="db-breadcrumb">
              <h4 className="breadcrumb-title">Users</h4>
              <ul className="db-breadcrumb-list">
                <CourseModal />
                {/* <li>Courses</li> */}
              </ul>
            </div>
            <div className="row">
            <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {!isLoading && data.map((dt,key)=> <tr>
            <td>{key+1}</td>
            <td>{dt.displayName}</td>
            <td>{dt.email}</td>
            <td><Button variant="outline-danger"size='sm' onClick={()=>handleDelete(dt._id)}>Delete</Button>{' '}</td>
          </tr>)
          }
        
        </tbody>
      </Table>
            </div>
          </div>
        </main>
      </DashboardLayout>
    );
}

export default Users