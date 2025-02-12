import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Helmet } from "react-helmet";

const MarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-gray-six.vercel.app/marathons/${id}`)
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

  const registrationStartDate = new Date(marathon.start_date);
  const registrationEndDate = new Date(marathon.end_date);
  const marathonStartTime = new Date(marathon.marathon_Start).getTime();
  const currentTime = Date.now();

  const isRegistrationOpen =
    currentTime >= registrationStartDate.getTime() && currentTime <= registrationEndDate.getTime();

  const remainingTime = Math.max((marathonStartTime - currentTime) / 1000, 0);

  const renderTime = ({ remainingTime }) => {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);

    return (
      <div className="flex flex-col items-center text-gray-800">
        <h2 className="text-lg font-semibold mb-1">Time Left</h2>
        <p className="text-xl font-medium">
          {days}d {hours}h {minutes}m
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1320px]  mx-auto p-6">
      <Helmet>
        <title>Marathon | Marathon Details</title>
      </Helmet>
      <div className=" rounded-lg overflow-hidden flex flex-col lg:flex-row">
        <figure className="lg:w-2/3">
          <img src={marathon.image} alt="Marathon" className="w-full h-full object-cover" />
        </figure>
        <div className="p-6 flex flex-col justify-between lg:w-1/3">
          <h1 className="text-3xl font-bold text-gray-900">{marathon.title}</h1>
          <p className="text-gray-700 mt-3 text-lg">{marathon.description}</p>
          <div className="mt-4 text-gray-600 space-y-1">
            <p><span className="font-medium">Location:</span> {marathon.location}</p>
            <p><span className="font-medium">Distance:</span> {marathon.distance} km</p>
            <p><span className="font-medium">Start Date:</span> {new Date(marathon.start_date).toLocaleDateString()}</p>
            <p><span className="font-medium">End Date:</span> {new Date(marathon.end_date).toLocaleDateString()}</p>
            <p><span className="font-medium">Marathon Start:</span> {new Date(marathon.marathon_Start).toLocaleDateString()}</p>
          </div>
          <div className="flex justify-center mt-6 p-4 bg-gray-100 rounded-lg">
            <CountdownCircleTimer
              isPlaying
              duration={remainingTime}
              colors={[["#4A5568"]]}
              size={130}
              strokeWidth={6}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className={`px-6 py-3 rounded-lg text-white font-semibold transition-all shadow-md ${isRegistrationOpen ? "bg-accent btn btn-ghost hover:bg-accent" : "bg-gray-400 cursor-not-allowed"}`}
              disabled={!isRegistrationOpen}
            >
              {isRegistrationOpen ? (
                <Link to={{ pathname: "marathon-registration" }} state={{ marathon }}>
                  Register Now
                </Link>
              ) : (
                "Registration Closed"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarathonDetails;