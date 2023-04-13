import React from 'react'
import DashboardLayout from '../admin/DashboardLayout'
import { Table } from 'react-bootstrap'

const MyCourse = () => {
  return (
    <div>
          <DashboardLayout>
        <main className="ttr-wrapper">
        <div className="container-fluid">
        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </main>
        </DashboardLayout>
    </div>
  )
}

export default MyCourse