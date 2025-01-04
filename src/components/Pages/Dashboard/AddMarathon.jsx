import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddMarathon = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonStartDate, setMarathonStartDate] = useState(new Date());
  const createdAt =new Date();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;

    const title=form.title.value;
    const startDate=form.startDate.value;
    const endDate=form.endDate.value;
    const marathonStart=form.marathonStart.value;
    const location=form.location.value;
    const distance=form.distance.value;
    const description=form.description.value;
    const image=form.image.value;
    const createdAt=form.createdAt.value;
    
    const addMarathon = {
      image,
      title,
      description,
      startDate,
      endDate,
      marathonStart,
      location,
      distance,
      createdAt,
      // email,
      // name,
    };
    console.log(addMarathon);
    form.reset();
  }
  return (
    <div className=" w-[900px] mx-auto p-6 border rounded-md shadow">
      <h2 className="text-2xl font-bold mb-4">Add Marathon</h2>
      <div className="card bg-base-100 max-w-lg w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marathon Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Marathon Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Start Registration Date</span>
            </label>
            <DatePicker
              showIcon
              name="startDate"
              className="w-full input input-bordered"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">End Registration Date</span>
            </label>
            <DatePicker
            name="endDate"
              showIcon
              className="w-full input input-bordered"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marathon Start Date</span>
            </label>
            <DatePicker
            name="marathonStart"
              showIcon
              className="w-full input input-bordered"
              selected={marathonStartDate}
              onChange={(date) => setMarathonStartDate(date)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Running Distance</span>
            </label>
            <select name="distance"  className="select select-bordered w-full max-w-lg">
              <option disabled defaultValue="SelectDistance">
                Select Distance
              </option>
              <option>25k</option>
              <option>10k</option>
              <option>3k</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
            name="description"
              placeholder="Description"
              className="textarea textarea-bordered textarea-lg w-full max-w-lg"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marathon Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Created At</span>
            </label>
            <input
            name="createdAt"
              value={createdAt}
              className="input input-bordered"
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Registration Count 0</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Marathon</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;
