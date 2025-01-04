import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className=" footer mt-10 bg-base-200 text-base-content p-10 place-items-center">
      <aside>
        <img src={logo} alt="" />
        <p>
          Marathon Management
          <br />
          Providing Marathon Campaign Management Program since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Marathon Creation</a>
        <a className="link link-hover">Participate Services</a>
        <a className="link link-hover">Marathon Promotion</a>
        <a className="link link-hover">Marathon Events</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
