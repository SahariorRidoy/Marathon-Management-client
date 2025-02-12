import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom"; // Fixed import

const MarathonCard = ({ marathon }) => {
  const { image, title, location, start_date, end_date, _id } = marathon;

  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 relative">
      <figure className="w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="p-5 pb-16"> 
        <h2 className="text-xl font-semibold flex items-center justify-between">
          {title}
          <span className="badge bg-success text-white px-2 py-1 text-sm rounded-md">
            Open
          </span>
        </h2>
        <p className="mt-2 text-gray-600">
          Location: <span className="text-success font-medium">{location}</span>
        </p>
        <p className="mt-2 text-gray-700 text-sm">
          <span className="font-medium text-gray-800">Registration:</span>
          <span className="text-success ml-1">
            {start_date && format(new Date(start_date), "MM/dd/yyyy")}
          </span>{" "}
          -{" "}
          <span className="text-success">
            {end_date && format(new Date(end_date), "MM/dd/yyyy")}
          </span>
        </p>
      </div>

      <Link to={`/marathons/${_id}`} className="absolute bottom-4 left-0 w-full">
        <button className="w-[90%] mx-auto flex justify-center bg-gray-600 opacity-80 hover:opacity-100 hover:bg-accent text-white font-semibold py-2 rounded-lg transition-all">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default MarathonCard;
