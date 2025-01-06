import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const MarathonRegistration = () => {
  const Location = useLocation();
  const { marathon } = Location.state || {};
  const { user } = useContext(AuthContext);
  const { email } = user;
  const {image, title,distance,location}=marathon
  console.log(marathon)

  // Register Marathon
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const title=form.title.value;
    const first_name=form.f_name.value;
    const last_name=form.l_name.value;
    const phone=form.phone.value;
    const marathon_start=form.marathon_start.value;
    const m_image=image;
    const m_distance=distance;
    const m_location=location;

    const registrationData={
        email:email,
        title:title,
        first_name:first_name,
        last_name:last_name,
        phone:phone,
        marathon_start:marathon_start,
        image:m_image,
        distance:m_distance,
        location:m_location,
    }
     // Add Data into server side
     try {
        await axios.post(`http://localhost:5000/my-apply`, registrationData);
  
        toast.success("marathon added successfully");
        form.reset();
      } catch (error) {
        toast.error(error.message);
      }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-300 shadow-md rounded-lg">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold my-6 text-center">Registration to Marathon</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Marathon Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={marathon?.title || ''}
              className="input input-bordered w-full"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="f_name"
              placeholder="First Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="l_name"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Contact No.</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone No."
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Start Date</span>
            </label>
            <input
              type="text"
              name="marathon_start"
              value={marathon?.marathon_Start || ''}
              className="input input-bordered w-full"
              disabled
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="btn btn-success px-8 text-white"
          >
            Register
          </button>
          
        </div>
        </form>
      </div>
    </div>
  );
};

export default MarathonRegistration;
