import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout";
import "./App.css";
import Courses from "./pages/Courses";
import SingleCourses from "./pages/SingleCourses";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<SingleCourses />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
