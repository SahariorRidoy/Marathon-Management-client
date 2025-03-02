import React, { useContext, useEffect, useState } from 'react';
import MarathonCard from '../Marathons/MarathonCard';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../../../Provider/AuthProvider';

const MarathonSection = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-gray-six.vercel.app/marathon-section")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user?.email]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {data.map((marathon) => (
          <MarathonCard key={marathon?._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};
export default MarathonSection;