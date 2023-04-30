import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allCourses } from "../../fakeData/allCourses";
import { Button, Spinner } from "react-bootstrap";
import { TbCurrencyTaka } from "react-icons/tb";
import Footer from "../../componets/home/Footer";
import Header from "../../componets/home/Header";
const CourseMaterials = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState({});
  const [enrollStudents, setEnrollStudents] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = (_id) => {
    navigate(`/enroll/${_id}`);
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("courses", data);

        setCourseData(data);
        setIsLoading(false);
      });
  }, []);

  return (<>
  <Header/>
    <div className="page-content bg-white">
      <div
        className="page-banner backgroudGray"
        // style={{backgroundImage:'url(assets/images/banner/banner2.jpg)'}}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Courses Content</h1>
          </div>
        </div>
      </div>

      {!isLoading && (
        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="row d-flex flex-row-reverse">

                <div className="col-lg-9 col-md-8 col-sm-12">
                  <div className="courses-post">
                    <div className="ttr-post-media media-effect">
                      <a href="">
                        {/* <img src={courseData.picture} alt="" style={{height: 350, objectFit: "cover"}}/> */}
                      </a>
          
                    </div>
                    <div className="ttr-post-info">
                      <div className="ttr-post-title ">
                        <h2 className="post-title"> {courseData?.course_name}</h2>
                      </div>
                      <div className="ttr-post-text">
                        {/* <p>{data.description.short_description}</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="courese-overview mt-5" id="overview">
                    
                    <div className="row">
                     
                      <div className="col-md-12 col-lg-8">
                        <h5 className="m-b5">Intro</h5>
                        <p>{courseData?.content?.about}</p>
                        <h5 className="m-b5">Audience</h5>
                        <p>{courseData?.content?.audience}</p>
                     { courseData?.content?.prerequisites && <><h5 className="m-b5">Prerequisites</h5>
                        <p>{courseData?.content?.prerequisites}</p></>  }
                        <h5 className="m-b5">Let's Start</h5>
                        <video width="420" height="340" controls>
                        <source src={courseData?.video} type="video/mp4"/>

                        </video>

                  {   courseData?.content?.limitations && <>  <h5 className="m-b5 mt-5">Limitations</h5>
                        <p>{courseData?.content?.limitations}</p>
                        </> }
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="text-center my-5">
          {" "}
          <Spinner animation="border" />
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CourseMaterials;
