import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MarathonCard from "./MarathonCard";

const Marathons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/marathons")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-3 gap-16">
      {data.map((marathon) => (
          <MarathonCard key={marathon?._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
