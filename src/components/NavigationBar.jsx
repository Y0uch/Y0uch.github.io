import React from "react";
import "./NavigationBar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      {/* Bootstrap 5 scripts and stylesheets */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      ></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      ></link>

      <div className="navbar-whole-container">
        <div className="navbar-name-container">
          <a href="/"><h5>Youngjun Cho</h5></a>
        </div>
        <div className="navbarItems">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Designs</Link>
              </li>
              <li className="nav-item">
                <NavLink to={"/illustrations"} className="nav-link">Illustrations</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about-me"} className="nav-link">About Me</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
