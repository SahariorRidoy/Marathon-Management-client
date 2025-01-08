import React from 'react';

const UpcomingMarathonCard = ({marathon}) => {
    const { imageUrl,distance,description, title, location, registrationStartDate, registrationEndDate,marathonStartDate, _id } = marathon;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={imageUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-accent">Upcoming</div>
          </h2>
          <p>Description: {description}</p>
          <p>Location: {location}</p>
          <p>Distance: {distance}</p>
          
            <div className="font-medium ">Registration Start: <span className='text-primary'>{registrationStartDate}</span> </div>
            <div className="font-medium ">Registration End: <span className='text-primary'>{registrationEndDate}</span> </div>
            <div className="font-medium ">Marathon Start: <span className='text-primary'>{marathonStartDate}</span> </div>
          
          
        </div>
      </div>
    );
};

export default UpcomingMarathonCard;