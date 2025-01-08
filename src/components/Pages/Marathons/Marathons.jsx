import axios from "axios";
import React, { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { Helmet } from "react-helmet";

const Marathons = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sort order

  const fetchMarathons = () => {
    axios
      .get(`http://localhost:5000/marathons?sortOrder=${sortOrder}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchMarathons();
  }, [sortOrder]); // Refetch data when sortOrder changes

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="max-w-[1320px] mx-auto">
      <Helmet>
        <title>Marathon | All Marathons</title>
      </Helmet>
      <h1 className="text-center pt-6 text-3xl font-semibold">
        Marathon Events for Registration
      </h1>

      {/* Sorting Dropdown */}
      <div className="flex justify-center my-6">
        <select
          className="select select-bordered w-48"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-16">
        {data.map((marathon) => (
          <MarathonCard key={marathon?._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
