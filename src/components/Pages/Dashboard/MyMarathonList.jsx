import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyMarathonList = ({ marathon, idx, setMarathons  }) => {
    const { image, title,end_date,start_date, _id } = marathon;
  
 
    return (
        <tr>
        <td>{idx + 1}</td>
        <td className='hidden sm:table-cell'>
          <img className="w-20 rounded-md" src={image} alt="" />
        </td>
        <td>{title}</td>
        <td className='hidden sm:table-cell'>{end_date}</td>
        <td className='hidden sm:table-cell'>{start_date}</td>
        <td>
          <div>
            <div className="flex gap-3 ml-[-35px]">
              <Link
                
                className="btn btn-info text-white"
              >
                Update
              </Link>
              <button
                
                className="btn btn-error text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
};

export default MyMarathonList;