import React from "react";
import "./stylesheets/navbar.css";
import { useMenu } from "./hooks/useMenu";


export const options = ['Home', "About", "Services"];

function Navbar() {
    const {openMenu, changeMenuStatus} = useMenu();

  return (
    <nav>
      <div className="nav-title">
        <svg>
          {" "}
          <text x="50%" y="54%" text-anchor="middle">
            Plug
          </text>
        </svg>
      </div>
      <div className="nav-links">
        {/* <button>
          <a href="#home">Home</a>
          <span className="indicator"></span>
        </button>
        <button>
          <a href="#about">About</a>
          <span className="indicator"></span>
        </button>
        <button>
          <a href="#services">Services</a>
          <span className="indicator"></span>
        </button> */}
        {
            options.map((opt) => {
                return (
                        <a href={`#${opt}`} >{opt}<span className="indicator"></span></a>
                )
            })
        }
      </div>
      <div className="nav-auth">
        <button>Contact us.</button>
      </div>
      <div className="min-menu-btn">
        <button onClick={changeMenuStatus}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
