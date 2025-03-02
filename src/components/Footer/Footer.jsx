import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import Swal from "sweetalert2";
const Footer = () => {

  const handlePrivacyPolicy = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Privacy Policy",
    icon: "info",
    confirmButtonText: "Close", 
  });
  }
  const handleCookie = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Cookie Policy",
    icon: "info",
    confirmButtonText: "Close", 
  });
  }

  return (
    <section className=" bg-gray-800">
      <footer className="footer max-w-[1320px] gap-12 md:gap-16 lg:gap-32 mx-auto text-white px-12 lg:px-6 py-10 ">
        <aside className="-ml-9">
          <div className="flex items-center">
            <img src={logo} alt="" />
            <h2 className="text-3xl">Marathon Management</h2>
          </div>
          <p>Providing Marathon Campaign Management Program since 2024</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="dashboard" className="link link-hover">
            Add Marathon
          </Link>
          <Link to="marathons" className="link link-hover">
            Marathons
          </Link>
          <Link to="dashboard/my-apply" className="link link-hover">
            My Apply
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="login" className="link link-hover">
            Login
          </Link>
          <Link to="register" className="link link-hover">
            Register
          </Link>
          <Link to="faq" className="link link-hover">FAQ</Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          
          <button onClick={handlePrivacyPolicy} className="link link-hover">Privacy policy</button>
          <button onClick={handleCookie} className="link link-hover">Cookie policy</button>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
