import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Loading from "../../Loading/Loading";
import MyMarathonList from "./MyMarathonList";
import axios from "axios";
import { Helmet } from "react-helmet";

const MyMarathon = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-gray-six.vercel.app/my-marathons?email=${user.email}`)
      .then((response) => {
        setMarathons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching marathon details:", error);
        setLoading(false);
      });
  }, [user?.email]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-[1320px] mx-auto">
      <Helmet>
        <title>Dashboard | My Marathon List</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">My Marathon List</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-info">Serial</th>
              <th className="text-base text-info hidden sm:table-cell">
                Image
              </th>
              <th className="text-base text-info">Title</th>
              <th className="text-base text-info hidden sm:table-cell">
                Registration Start
              </th>
              <th className="text-base text-info hidden sm:table-cell">
                registration End
              </th>
            </tr>
          </thead>
          <tbody>
            {marathons?.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-2xl text-error"
                >
                  No Data Found
                </td>
              </tr>
            ) : (
              marathons?.map((marathon, idx) => {
                return (
                  <MyMarathonList
                    key={marathon?._id}
                    idx={idx}
                    marathon={marathon}
                    setMarathons={setMarathons}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathon;
