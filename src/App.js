import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./config/routes";
import { Footer, Header, Loader } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 300,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Loader />
      <RoutesPath />
      <Footer />
    </BrowserRouter>
  );
}
