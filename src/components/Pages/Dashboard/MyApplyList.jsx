import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Loading from "../../Loading/Loading";
import MyApplyListData from "./MyApplyListData";
import { Helmet } from "react-helmet";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [myApply, setMyApply] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Added search state

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-apply?email=${user.email}&title=${search}`) // Pass search query to the backend
      .then((response) => {
        setMyApply(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching marathon details:", error);
        setLoading(false);
      });
  }, [user?.email, search]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <Helmet>
        <title>Dashboard | My Apply List</title>
      </Helmet>

      {/* Search Input */}
      <div className="flex items-center justify-center ">
        <h2 className="bg-success py-3 px-6 rounded-l-xl font-semibold text-white">
          Search
        </h2>
        <input
          type="text"
          placeholder="Search by Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-1/2 "
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-info">Serial</th>
              <th className="text-base text-info ">Title</th>
              <th className="text-base text-info hidden sm:table-cell">
                Marathon Start
              </th>
              <th className="text-base text-info hidden sm:table-cell">
                Full Name
              </th>
              <th className="text-base text-info hidden sm:table-cell">
                Phone No.
              </th>
            </tr>
          </thead>
          <tbody>
            {myApply?.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-2xl text-error"
                >
                  No Data Found
                </td>
              </tr>
            ) : (
              myApply?.map((apply, idx) => {
                return (
                  <MyApplyListData
                    key={apply?._id}
                    idx={idx}
                    apply={apply}
                    setMyApply={setMyApply}
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

export default MyApplyList;
