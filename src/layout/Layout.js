import { Outlet } from "react-router-dom";
import "./layout.sass";
import Header from "./header/Header";
import Footer from "./foobar/Footer";

export default function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
