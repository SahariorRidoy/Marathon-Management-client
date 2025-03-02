import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { Helmet } from "react-helmet";
import Loading from "../../Loading/Loading";
import { AuthContext } from "../../../Provider/AuthProvider";

const Marathons = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); 

  const fetchMarathons = () => {
    axios
      .get(`https://assignment-11-server-gray-six.vercel.app/marathons?sortOrder=${sortOrder}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  useEffect(() => {
    fetchMarathons();
  }, [sortOrder,user?.email]); // Refetch data when sortOrder changes

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-200 pb-6" > 
      <div className=" max-w-[1320px] mx-auto">
      <Helmet>
        <title>Marathon | All Marathons</title>
      </Helmet>
      <h1 className="text-center pt-6 text-3xl font-semibold">
        Marathon Events for Registration
      </h1>

      {/* Sorting Dropdown */}
      <div className="flex justify-center items-center my-6">
        <label htmlFor="sort" className="mr-2 text-lg text-success font-semibold">
          Sort by:
        </label>
        <select
          className="select select-bordered w-48"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {data.map((marathon) => (
          <MarathonCard key={marathon?._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Marathons;
