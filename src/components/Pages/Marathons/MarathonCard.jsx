import { format } from "date-fns";
import React from "react";
import { Link } from "react-router";

const MarathonCard = ({ marathon }) => {
  const { image, title, location, start_date, end_date, _id } = marathon;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-primary">Open</div>
        </h2>
        <p className="text-lg">Location: <span className="text-primary ml-1 text-lg"> {location}</span></p>

        <div className="badge badge-outline text-lg">
          Registration Start: <span className="text-error ml-1 text-lg"> {start_date && format(new Date(start_date), "MMMM dd, yyyy")}</span>
        </div>
        <div className="badge badge-outline text-lg">Registration End: <span className="text-error ml-1 text-lg"> {end_date && format(new Date(end_date), "MMMM dd, yyyy")}</span></div>

        <Link to={`/marathons/${_id}`}>
          <button className="btn btn-success text-white w-full">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MarathonCard;
