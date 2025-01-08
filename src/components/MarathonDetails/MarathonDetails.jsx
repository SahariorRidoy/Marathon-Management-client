import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
    return <Loading />;
  }

  if (!marathon) {
    return <p>No marathon details found.</p>;
  }

  // React Countdown 
  const marathonStartTime = new Date(marathon.marathon_Start).getTime();
  const currentTime = Date.now();
  const remainingTime = Math.max((marathonStartTime - currentTime) / 1000, 0); // Convert to seconds

  const renderTime = ({ remainingTime }) => {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);

    return (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-primary mb-2">Time Left</h2>
        <div className="text-lg text-secondary">
          {days}d {hours}h {minutes}m
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1320px] mx-auto p-6">
      <div className="card lg:card-side bg-white shadow-xl rounded-lg overflow-hidden flex flex-col lg:flex-row">
        <figure className="lg:w-2/3">
          <img
            src={marathon.image}
            alt="Marathon Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </figure>
        <div className="card-body lg:w-1/3 p-6 ml-4 flex flex-col justify-between">
          <h1 className="text-4xl font-semibold mt-4 text-primary">{marathon.title}</h1>
          <p className="text-gray-700 mt-2 text-lg">{marathon.description}</p>
          <div className="mt-4 text-gray-600">
            <p><span className="font-bold">Location:</span> {marathon.location}</p>
            <p><span className="font-bold">Distance:</span> {marathon.distance} km</p>
            <p><span className="font-bold">Start Date:</span> {new Date(marathon.start_date).toLocaleDateString()}</p>
            <p><span className="font-bold">End Date:</span> {new Date(marathon.end_date).toLocaleDateString()}</p>
            <p><span className="font-bold">Marathon Start:</span> {new Date(marathon.marathon_Start).toLocaleDateString()}</p>
          </div>

          <div className="flex justify-center mt-6">
            <CountdownCircleTimer
              isPlaying
              duration={remainingTime} // Total duration in seconds
              colors={["#4caf50", "#ff9800", "#f44336"]}
              colorsTime={[remainingTime, remainingTime / 2, 0]}
              size={150}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>

          <div className="card-actions mt-6 flex justify-center">
            <Link
              to={{
                pathname: `marathon-registration`,
              }}
              state={{ marathon }}
            >
              <button className="btn btn-primary px-8 py-3 text-white font-semibold rounded-full bg-primary hover:bg-primary-dark transition-all">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
