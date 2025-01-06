import React from 'react';
import { Link } from 'react-router';

const MarathonCard = ({marathon}) => {
    const {image,title,location, start_date,end_date,_id } = marathon;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-primary">Open</div>
    </h2>
    <p>Location: {location}</p>
    
      <div className="badge badge-outline">Registration Start: {start_date}</div>
      <div className="badge badge-outline">Registration End: {end_date}</div>
    
    <Link to={`/marathons/${_id}`}><button className='btn btn-success text-white w-full'>See Details</button></Link>
  </div>
</div>
    );
};

export default MarathonCard;