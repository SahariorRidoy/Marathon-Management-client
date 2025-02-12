import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
   <section className=" bg-gray-800">
     <footer className="footer max-w-[1320px] gap-12 md:gap-16 lg:gap-32 mx-auto text-white px-12 lg:px-6 py-10 place-items-center">
      <aside className="-ml-9">
        <div className="flex items-center">
        <img src={logo} alt="" />
        <h2 className="text-3xl">Marathon Management</h2>
        </div>
        <p>
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
   </section>
  );
};

export default Footer;
