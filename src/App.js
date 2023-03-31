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

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname == "/login" ||
      location.pathname == "/register" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <CourseDetail />
      <Contact />
      <InstructorProfile />
      <ForgetPass />
    </>
  );
}

export default App;
