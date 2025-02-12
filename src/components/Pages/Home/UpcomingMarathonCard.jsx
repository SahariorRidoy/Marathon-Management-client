import React from 'react';

const UpcomingMarathonCard = ({ marathon }) => {
    const { imageUrl, distance, description, title, location, registrationStartDate, registrationEndDate, marathonStartDate } = marathon;
    
    return (
        <div className="bg-white w-full max-w-md shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <figure>
                <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
            </figure>
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
                    {title}
                </h2>
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
                <div className="mt-4">
                    <p className="text-gray-800 font-medium">Location: <span className="text-gray-600">{location}</span></p>
                    <p className="text-gray-800 font-medium">Distance: <span className="text-gray-600">{distance} km</span></p>
                </div>
                <div className="mt-3 text-sm">
                    <p className="font-medium">Registration Start: <span className='text-accent'>{registrationStartDate}</span></p>
                    <p className="font-medium">Registration End: <span className='text-accent'>{registrationEndDate}</span></p>
                    <p className="font-medium">Marathon Start: <span className='text-accent'>{marathonStartDate}</span></p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMarathonCard;