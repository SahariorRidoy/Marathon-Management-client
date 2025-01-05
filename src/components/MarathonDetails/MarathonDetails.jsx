import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MarathonDetails = () => {
  const { id } = useParams(); // Access the dynamic parameter from the URL
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch marathon details using the `id` from params
    axios
      .get(`http://localhost:5000/marathons/${id}`)
      .then((response) => {
        setMarathon(response.data); // Set the fetched data to the state
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error('Error fetching marathon details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!marathon) {
    return <p>No marathon details found.</p>;
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <img src={marathon.image} alt={marathon.title} className="w-full object-cover" />
      <h1 className="text-3xl font-bold mt-4">{marathon.title}</h1>
      <p className="text-gray-600 mt-2">{marathon.description}</p>
      <p className="mt-2">Location: {marathon.location}</p>
      <p className="mt-2">Distance: {marathon.distance}</p>
      <p className="mt-2">Start Date: {new Date(marathon.start_date).toLocaleDateString()}</p>
      <p className="mt-2">End Date: {new Date(marathon.end_date).toLocaleDateString()}</p>
    </div>
  );
};

export default MarathonDetails;
