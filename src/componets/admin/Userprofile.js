import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import useAuth from "../../hooks/useAuth";

const Userprofile = () => {
  const [data, setdata] = useState({});
  const { user } = useAuth();
  console.log("userf", user);
  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("courses", data);
    //     setData(data);
    //     setIsLoading(false);
    //   });
  }, []);
  return (
    <DashboardLayout>
      <main class="ttr-wrapper">
        <div class="container-fluid">
          <div class="db-breadcrumb">
            <h4 class="breadcrumb-title">User Profile</h4>
          </div>
          <div class="row">
            <div class="col-lg-12 m-b30">
              <div class="widget-box">
                <div class="widget-inner">
                  <form class="edit-profile m-b30">
                    <div class="">
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Full Name</label>
                        <div class="col-sm-7">
                          <input
                            class="form-control"
                            type="text"
                            value={user.displayName}
                            readOnly
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-7">
                          <input
                            class="form-control"
                            type="text"
                            value={user.email}
                            readOnly
                          />
                        </div>
                      </div>

                      {/* <div class="seperator"></div> */}
                    </div>
                    {/* <div class="">
                      <div class="">
                        <div class="row">
                          <div class="col-sm-2"></div>
                          <div class="col-sm-7">
                            <button type="reset" class="btn-secondry">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Userprofile;
