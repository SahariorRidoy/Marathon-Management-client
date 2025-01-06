import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import MyApplyListData from './MyApplyListData';



const MyApplyList = () => {


    const {user} = useContext(AuthContext)
    const [myApply, setMyApply] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user.email);
    
    useEffect(() => {
        axios
          .get(`http://localhost:5000/my-apply?email=${user.email}`)
          .then((response) => {
            setMyApply(response.data);
            setLoading(false); 
          })
          .catch((error) => {
            console.error("Error fetching marathon details:", error);
            setLoading(false);
          });
      }, [user?.email]);
      if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="max-w-[1320px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-info">Serial</th>
              <th className="text-base text-info ">Title</th>
              <th className="text-base text-info hidden sm:table-cell">Marathon Start</th>
              <th className="text-base text-info hidden sm:table-cell">Full Name</th>
              <th className="text-base text-info hidden sm:table-cell">Phone No.</th>
              <th className="text-base text-info hidden sm:table-cell">Distance</th>
            </tr>
          </thead>
          <tbody>
            {myApply?.length === 0 ? (
               <tr>
               <td colSpan="5" className="text-center py-10 text-2xl text-error">
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
