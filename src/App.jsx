import Home from "./pages/home/Home";
import Reserve from "./pages/reserve/Reserve";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reserve" element={<Reserve></Reserve>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
