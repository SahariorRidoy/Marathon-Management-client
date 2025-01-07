import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { format } from "date-fns";

const MyApplyListData = ({ idx, apply, setMyApply }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const { _id, title, marathon_start } = apply;

  useEffect(() => {
    setFormData({
      first_name: apply.first_name,
      last_name: apply.last_name,
      phone: apply.phone,
    });
  }, [apply]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/my-apply/${_id}`,
        updatedData
      );

      if (response.data) {
        setMyApply((prev) =>
          prev.map((app) =>
            app._id === _id ? { ...app, ...updatedData } : app
          )
        );
        setOpenModal(false);
        Swal.fire("Success", "Application updated successfully!", "success");
      }
    } catch (error) {
      console.error("Error updating application:", error);
      Swal.fire("Error", "Failed to update application", "error");
    }
  };

  const handleDelete = async () => {
    try {
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
        const response = await axios.delete(
          `http://localhost:5000/my-apply/${_id}`
        );

        if (response.data.success) {
          setMyApply((prev) => prev.filter((app) => app._id !== _id));
          Swal.fire("Deleted!", "Application has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete application", "error");
        }
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      Swal.fire("Error", "Failed to delete application", "error");
    }
  };

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td className="hidden sm:table-cell">
          {marathon_start && format(new Date(marathon_start), "MM/dd/yyyy")}
        </td>
        <td className="hidden sm:table-cell">
          {formData.first_name} {formData.last_name}
        </td>
        <td className="hidden sm:table-cell">{formData.phone}</td>
        <td>
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-info btn-sm text-white mr-4"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error btn-sm text-white"
          >
            Delete
          </button>
        </td>
      </tr>

      {openModal && (
        <dialog className="modal bg-gray-300" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Application</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">First Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.first_name}
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Phone</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary ">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-error text-white mt-2"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default MyApplyListData;
