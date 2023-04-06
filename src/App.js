import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import "./assets/css/style.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import "./assets/css/dashboard.css";
import AuthProvider from "./context/AuthProvider";
// import './assets/css/dashboardStyle.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./componets/PrivateRoute/PrivateRoute";
import Footer from "./componets/home/Footer";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <AuthProvider>
      {location.pathname == "/login" ||
      location.pathname == "/register" ||
      location.pathname == "/dashboard" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        {/* <Route path="/dashboard" element={
        <PrivateRoute>

          <Dashboard />
        </PrivateRoute>
        } /> */}
         {/* <PrivateRoute path="/dashboard" element={<Dashboard />}></PrivateRoute> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* <CourseDetail /> */}

      {/* <InstructorProfile />
      <ForgetPass /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
