import React, { useEffect, useState } from 'react';
import MarathonCard from '../Marathons/MarathonCard';
import axios from 'axios';

const MarathonSection = () => {
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
 
  console.log(data);
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
export default MarathonSection;