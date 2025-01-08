import React from 'react';

const MarathonTips = () => {
    return (
        <section className="max-w-[1320px] mx-auto bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Start Training Early</h3>
          <p className="text-lg text-gray-700">
            Begin your marathon training well in advance to build endurance and reduce the risk of injury. Gradually increase your distance each week, and don’t forget to rest!
          </p>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Stay Hydrated</h3>
          <p className="text-lg text-gray-700">
            Proper hydration is key to maintaining energy levels throughout the marathon. Drink plenty of water and electrolyte drinks to stay energized.
          </p>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Nutrition is Key</h3>
          <p className="text-lg text-gray-700">
            Fuel your body with proper nutrition before and during the race. Include carbs, protein, and healthy fats in your meals. Make sure to eat a balanced breakfast before the race.
          </p>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Practice Mental Toughness</h3>
          <p className="text-lg text-gray-700">
            Marathons are just as much a mental challenge as a physical one. Develop strategies to stay positive and push through tough moments. Visualizing success can be a powerful tool.
          </p>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Pacing is Crucial</h3>
          <p className="text-lg text-gray-700">
            It’s easy to get carried away in the excitement of the race. Find a comfortable pace early on to avoid burnout. Listen to your body and adjust your pace accordingly.
          </p>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Rest and Recover</h3>
          <p className="text-lg text-gray-700">
            After the marathon, give your body the time it needs to recover. Stretch, hydrate, and consider light jogging or swimming to keep your muscles active and prevent stiffness.
          </p>
        </div>
      </div>
    </section>
    );
};

export default MarathonTips;