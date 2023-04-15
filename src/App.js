import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import "./assets/css/style.css";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./componets/home/Header";
import CourseDetails from "./componets/courseDetails/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import InstructorProfile from "./pages/InstructorProfile";
import ForgetPass from "./pages/ForgetPass";
import Error from "./pages/Error";
import AllCourses from "./pages/allCourses/AllCourses";
import "./componets/admin/Admin";
import "./assets/css/dashboard.css";
import AuthProvider from "./context/AuthProvider";
//  import './assets/css/dashboardStyle.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./componets/PrivateRoute/PrivateRoute";
import Footer from "./componets/home/Footer";
import Admin from "./componets/admin/Admin";
import Dashboard from "./componets/admin/Dashboard";
import Course from "./componets/admin/Course";
import DashboardLayout from "./componets/admin/DashboardLayout";
import Userprofile from "./componets/admin/Userprofile";
import useFirebase from "./hooks/useFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Eventdetails from "./pages/eventdetails/Eventdetails";
import Enrollment from "./componets/admin/Enrollment";
import Users from "./componets/admin/Users";
import MyCourse from "./componets/user/MyCourse";
import AdminRoute from "./componets/adminRoute/AdminRoute";
import Quiz from "./componets/admin/Quiz";

function App() {
  let location = useLocation();
  const { user } = useFirebase();
  // history.navigate = useNavigate();
  // history.location = useLocation();
  console.log("location", location);
  console.log("location", process.env.REACT_APP_API_BASE_URL);
  return (
    <AuthProvider>
      {/* <Header /> */}
      {/* {location.pathname == "/login" ||
        location.pathname == "/register" ||
        location.pathname == "/dashboard" ||
        location.pathname == "/dashboard/course" ? null : (
        <Header />
      )} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/events/:eventId" element={<Eventdetails />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/enrole"
          element={
            <PrivateRoute>
              <Enrollment />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/myCourse"
          element={
            <PrivateRoute>
              <MyCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/course"
          element={
            // <DashboardLayout>
            <Course />

            // </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/MyProfile"
          element={
            // <DashboardLayout>

            <Userprofile />
            // </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/quiz"
          element={
            // <DashboardLayout>

            <Quiz />
            // </DashboardLayout>
          }
        />
        {/* <Route path="/dashboard" element={
        <PrivateRoute>

          <Dashboard />
        </PrivateRoute>
        } /> */}
        {/* <PrivateRoute path="/dashboard" element={<Dashboard />}></PrivateRoute> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
      {/* <CourseDetail /> */}

      {/* <InstructorProfile />
      <ForgetPass /> */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  );
}

export default App;
