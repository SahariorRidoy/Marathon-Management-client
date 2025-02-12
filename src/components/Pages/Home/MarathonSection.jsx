import React, { useEffect, useState } from 'react';
import MarathonCard from '../Marathons/MarathonCard';
import axios from 'axios';

const MarathonSection = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-gray-six.vercel.app/marathon-section")
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {data.map((marathon) => (
          <MarathonCard key={marathon?._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};
export default MarathonSection;