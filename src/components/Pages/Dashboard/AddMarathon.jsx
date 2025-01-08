import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider";
const AddMarathon = () => {
  const {user}=useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonStartDate, setMarathonStartDate] = useState(new Date());
  const createdAt = new Date();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const start_date = startDate;
    const end_date = endDate;
    const marathon_Start = marathonStartDate;
    const location = form.location.value;
    const distance = form.distance.value;
    const description = form.description.value;
    const image = form.image.value;
    const created_At = createdAt;
    const email=user.email;
    const name=user.displayName;
    const addMarathon = {
      image,
      title,
      description,
      start_date,
      end_date,
      marathon_Start,
      location,
      distance,
      created_At,
      email,
      name,
    };

    // Added to server side
    try {
      await axios.post(`http://localhost:5000/add-marathon`, addMarathon);

      toast.success("marathon added successfully");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-8 border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Add Marathon</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Marathon Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Marathon Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Start Registration Date</span>
            </label>
            <DatePicker
              name="startDate"
              className="w-full input input-bordered"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">End Registration Date</span>
            </label>
            <DatePicker
              name="endDate"
              className="w-full input input-bordered"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Marathon Start Date</span>
            </label>
            <DatePicker
              name="marathonStart"
              className="w-full input input-bordered"
              selected={marathonStartDate}
              onChange={(date) => setMarathonStartDate(date)}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Running Distance</span>
            </label>
            <select
              name="distance"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Distance
              </option>
              <option value="25k">25k</option>
              <option value="10k">10k</option>
              <option value="3k">3k</option>
            </select>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">Marathon Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Created At */}
        <div className="form-control">
          <label className="label font-medium">
            <span className="label-text">Created At</span>
          </label>
          <input
            name="createdAt"
            value={createdAt}
            className="input input-bordered w-full"
            required
            disabled
          />
        </div>

        {/* Registration Count */}
        <div className="form-control">
          <label className="label font-medium">
            <span className="label-text">Total Registration Count: 0</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button className="btn btn-success text-white w-full">Add Marathon</button>
        </div>
      </form>
    </div>
  );
};

export default AddMarathon;
