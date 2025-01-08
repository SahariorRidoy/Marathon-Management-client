import React from 'react';
import UpcomingMarathonCard from './UpcomingMarathonCard';

const UpcomingMarathon = () => {
    const upcomingMarathon=[
            {
              "title": "Sunset Run 2025",
              "registrationStartDate": "2025-01-15",
              "registrationEndDate": "2025-02-28",
              "marathonStartDate": "2025-03-15",
              "location": "Golden Gate Park, San Francisco",
              "distance": "10 km",
              "description": "A scenic evening run through Golden Gate Park, perfect for all fitness levels.",
              "imageUrl": "https://i.ibb.co.com/ZLz0971/fake1.jpg"

            },
            {
              "title": "Mountain Challenge",
              "registrationStartDate": "2025-03-01",
              "registrationEndDate": "2025-04-10",
              "marathonStartDate": "2025-04-25",
              "location": "Blue Ridge Mountains, North Carolina",
              "distance": "15 km",
              "description": "Test your endurance on this rugged mountain trail run.",
              "imageUrl": "https://i.ibb.co.com/16S11X1/fake2.jpg"
            },
            {
              "title": "City Lights Dash",
              "registrationStartDate": "2025-02-10",
              "registrationEndDate": "2025-03-20",
              "marathonStartDate": "2025-04-05",
              "location": "Downtown Chicago, Illinois",
              "distance": "5 km",
              "description": "A vibrant night run through the heart of Chicago’s skyline.",
              "imageUrl": "https://i.ibb.co.com/d4Z5zN8/fake3.jpg"
            },
            {
              "title": "Coastal Breeze Marathon",
              "registrationStartDate": "2025-04-01",
              "registrationEndDate": "2025-05-15",
              "marathonStartDate": "2025-06-01",
              "location": "Miami Beach, Florida",
              "distance": "21 km",
              "description": "Enjoy the ocean views and sea breeze on this half marathon course.",
              "imageUrl": "https://i.ibb.co.com/r55k7w4/fake4.jpg"
            },
            {
              "title": "Forest Adventure Run",
              "registrationStartDate": "2025-05-01",
              "registrationEndDate": "2025-06-10",
              "marathonStartDate": "2025-06-25",
              "location": "Redwood National Park, California",
              "distance": "12 km",
              "description": "Explore nature's beauty on this trail through towering redwoods.",
              "imageUrl": "https://i.ibb.co.com/ZW8VFv6/fake5.jpg"
            },
            {
              "title": "Desert Dash Challenge",
              "registrationStartDate": "2025-06-01",
              "registrationEndDate": "2025-07-15",
              "marathonStartDate": "2025-08-01",
              "location": "Phoenix, Arizona",
              "distance": "20 km",
              "description": "Brave the heat and conquer the desert in this thrilling marathon.",
              "imageUrl": "https://i.ibb.co.com/RSJN5d4/fake6.jpg"
            }
          ]
          
    console.log(upcomingMarathon);
    
    return (
        <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-3 gap-16">
      {upcomingMarathon.map((marathon) => (
         <UpcomingMarathonCard key={marathon._id} marathon={marathon}></UpcomingMarathonCard>
        ))}
      </div>
    </div>
    );
};

export default UpcomingMarathon;