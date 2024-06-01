import React from 'react';
import EventTypesChart from './components/EventTypesChart';
import SeverityChart from './components/SeverityChart';
import SourceIPChart from './components/SourceIPChart';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-center text-4xl mb-4">Network Security Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventTypesChart />
        <SeverityChart />
        <SourceIPChart />
      </div>
    </div>
  );
};

export default App;
