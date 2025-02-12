import React from 'react';

const MarathonTips = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-6 py-12 ">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{tip.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const tips = [
    { title: "Start Training Early", description: "Begin your training well in advance to build endurance and prevent injuries. Gradually increase distance each week and allow for proper rest." },
    { title: "Stay Hydrated", description: "Proper hydration is key. Drink water and electrolyte-rich fluids before, during, and after the marathon to maintain energy levels." },
    { title: "Nutrition is Key", description: "Fuel your body with a balanced diet including carbs, protein, and healthy fats. Eat a proper breakfast before the race." },
    { title: "Practice Mental Toughness", description: "Marathons are as much a mental challenge as a physical one. Develop strategies to stay positive and visualize success." },
    { title: "Pacing is Crucial", description: "Start at a comfortable pace to avoid early burnout. Listen to your body and adjust accordingly throughout the race." },
    { title: "Rest and Recover", description: "Post-marathon recovery is essential. Stretch, hydrate, and consider light activity like jogging or swimming to prevent stiffness." }
];

export default MarathonTips;
