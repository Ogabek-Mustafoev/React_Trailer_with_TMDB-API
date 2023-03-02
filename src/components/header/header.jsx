import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./header.scss";

export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = (item) => {
    if (pathname.includes(item)) return "active";
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to="/"> TraileR</Link>
        </div>
        <ul className="header__nav">
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${active("movie")}`}>
            <Link to="/movie">Movies</Link>
          </li>
          <li className={`${active("tv")}`}>
            <Link to="/tv">TV Series</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
