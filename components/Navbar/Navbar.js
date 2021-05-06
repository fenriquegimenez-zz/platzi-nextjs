import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <menu>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link active">About</a>
            </Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
