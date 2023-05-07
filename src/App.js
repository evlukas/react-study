import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Nonefoundpage from "./pages/Nonefoundpage";
import Blogpage from "./pages/Blogpage";
import Aboutpage from "./pages/Aboutpage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route path="*" element={<Nonefoundpage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
