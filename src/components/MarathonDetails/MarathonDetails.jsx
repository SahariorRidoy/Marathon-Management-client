import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";

const MarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/marathons/${id}`)
      .then((response) => {
        setMarathon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching marathon details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!marathon) {
    return <p>No marathon details found.</p>;
  }

  return (
    <div className="max-w-[1320px] mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
        <figure className="lg:w-2/3">
          <img
            src={marathon.image}
            alt="Album"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/3 p-4 ml-6">
          <h1 className="text-3xl font-bold mt-4">{marathon.title}</h1>
          <p className="text-gray-600 mt-2">{marathon.description}</p>
          <p className="mt-2">Location: {marathon.location}</p>
          <p className="mt-2">Distance: {marathon.distance}</p>
          <p className="mt-2">
            Start Date: {new Date(marathon.start_date).toLocaleDateString()}
          </p>
          <p className="mt-2">
            End Date: {new Date(marathon.end_date).toLocaleDateString()}
          </p>
          
            
              <div className="stat-title">Total Registration: 0</div>
              
              
           
          
          <div className="card-actions mt-4">
            <Link
              to={{
                pathname: `marathon-registration`,
              }}
              state={{ marathon }}
            >
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
