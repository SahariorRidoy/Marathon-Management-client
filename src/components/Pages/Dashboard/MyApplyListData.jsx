import React from "react";
import { Link } from "react-router";

const MyApplyListData = ({ apply, idx, setMyApply }) => {
  const { image, title, marathon_start,first_name,last_name,phone,distance } = apply;

  return (
    <tr>
      <td>{idx + 1}</td>
      <td >{title}</td>
      <td className="hidden sm:table-cell">{marathon_start}</td>
      <td className="hidden sm:table-cell">{first_name} {last_name}</td>
      <td className="hidden sm:table-cell">{phone}</td>
      <td className="hidden sm:table-cell">{distance}</td>
      <td>
        <div>
          <div className="flex gap-3 ml-[-35px]">
            <Link className="btn btn-info text-white">Update</Link>
            <button className="btn btn-error text-white">Delete</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyApplyListData;
