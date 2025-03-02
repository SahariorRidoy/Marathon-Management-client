import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("marathon added successfully");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-[1320px] mx-auto px-5 py-10  rounded-xl flex items-center flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions or need assistance? Reach out to us for any inquiries
            related to
            <strong>
              {" "}
              registration, add/manage marathons, event details or technical support.
            </strong>
          </p>

          <div className="space-y-4 text-gray-800">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-gray-700 text-lg" />
              <a
                href="mailto:support@marathonms.com"
                className="hover:text-gray-900 font-medium"
              >
                support@marathonms.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-gray-700 text-lg" />
              <span className="font-medium">+8801712-345678</span>
            </p>
           
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-700 text-lg" />
              <span className="font-medium">
                Mirpur, Dhaka, Bangladesh
              </span>
            </p>
          </div>

          <div className="flex gap-5 text-2xl mt-6">
            <a
              href="https://facebook.com"
              target="blank"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaFacebook  className="text-3xl"/>
            </a>
            <a
              href="https://twitter.com"
                target="blank"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaTwitter  className="text-3xl"/>
            </a>
            <a
              href="https://instagram.com"
                target="blank"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaInstagram  className="text-3xl"/>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-accent mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-accent text-white py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
