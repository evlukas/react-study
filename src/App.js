import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Nonefoundpage from "./pages/Nonefoundpage";
import Blogpage from "./pages/Blogpage";
import Aboutpage from "./pages/Aboutpage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="*" element={<Nonefoundpage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
