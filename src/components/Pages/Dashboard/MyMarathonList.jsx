import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyMarathonList = ({ marathon, idx, setMarathons }) => {
  const { _id } = marathon;


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    distance: '',
    description: '',
    image: ''
  });

  const [openModal, setOpenModal] = useState(false);

  // Fetch marathon data
  useEffect(() => {
    setFormData({
      title: marathon.title,
      location: marathon.location,
      distance: marathon.distance,
      description: marathon.description,
      image: marathon.image
    });
    
    setStartDate(new Date(marathon.start_date));
    setEndDate(new Date(marathon.end_date));
    setMarathonStartDate(new Date(marathon.marathon_Start));
  }, [marathon]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedMarathon = {
      title: formData.title,
      start_date: startDate,
      end_date: endDate,
      marathon_Start: marathonStartDate,
      location: formData.location,
      distance: formData.distance,
      description: formData.description,
      image: formData.image,
      updated_At: new Date(),
    };
  
    try {
      const response = await axios.put(`http://localhost:5000/marathons/${_id}`, updatedMarathon);
  
      if (response.data) {
        setOpenModal(false); 
        Swal.fire("Success", "Marathon updated successfully", "success"); 
        setMarathons((prev) =>
          prev.map((m) => (m._id === _id ? { ...m, ...updatedMarathon } : m))
        );
      } else {
        
        Swal.fire("Error", "Failed to update marathon", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update marathon", "error");
    }
  };
  const handleDelete = async () => {
    try {
      // Show confirmation prompt using SweetAlert2
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  
      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:5000/marathons/${_id}`);
        
        if (response.data.success) {
          setMarathons((prev) => prev.filter((m) => m._id !== _id)); 
          Swal.fire("Deleted!", "Marathon has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete marathon", "error");
        }
      }
    } catch (error) {
      console.error("Error while deleting marathon:", error);
      Swal.fire("Error", "Failed to delete marathon", "error");
    }
  };
  
  

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td className="hidden sm:table-cell">
          <img className="w-20 rounded-md" src={formData.image} alt="" />
        </td>
        <td>{formData.title}</td>
        <td className="hidden sm:table-cell">{ startDate && startDate.toLocaleDateString()}</td>
        <td className="hidden sm:table-cell">{endDate && endDate.toLocaleDateString()}</td>
        <td>
          <div>
            <div className="flex gap-3 ml-[-35px]">
              <button
                onClick={() => setOpenModal(true)}
                className="btn btn-info text-white"
              >
                Update
              </button>

              {/* Update Marathon Modal */}
              {openModal && (
                <dialog id="my_modal_1" className="modal bg-gray-300" open>
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Marathon</h3>
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
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
                            value={formData.distance}
                            onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                            required
                          >
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
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            placeholder="Enter Image URL"
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="form-control">
                        <button className="btn btn-primary w-full">Update Marathon</button>
                      </div>
                    </form>

                    <div className="modal-action justify-center">
                      <button
                        type="button"
                        className="btn btn-error text-white"
                        onClick={() => setOpenModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              )}
              
              <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyMarathonList;
