import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const Enrollment = () => {
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td className="d-flex">
                    <Button variant="outline-info" size="sm" className="mx-2">
                      <FaEdit />
                    </Button>

                    <Button variant="outline-danger" size="sm">
                      <FaTrash />
                    </Button>
                    {/* </div> */}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td className="d-flex">
                    <Button variant="outline-info" size="sm" className="mx-2">
                      <FaEdit />
                    </Button>

                    <Button variant="outline-danger" size="sm">
                      <FaTrash />
                    </Button>
                    {/* </div> */}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td className="d-flex">
                    <Button variant="outline-info" size="sm" className="mx-2">
                      <FaEdit />
                    </Button>

                    <Button variant="outline-danger" size="sm">
                      <FaTrash />
                    </Button>
                    {/* </div> */}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </main>
      </DashboardLayout>
    </div>
  );
};

export default Enrollment;
