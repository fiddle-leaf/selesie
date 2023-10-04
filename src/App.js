import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Photography from "./components/photography/Photography";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="photos" element={<Photography />} />
      </Route>
    </Routes>
  );
}

export default App;
