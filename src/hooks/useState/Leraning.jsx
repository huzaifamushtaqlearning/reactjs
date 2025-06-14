import React, { useEffect, useState } from 'react';

function Leraning() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return()=>{
      clearInterval(timer)
    }

    
  }, [count]); // Dependency needed for continuous update

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-100 to-cyan-300 font-sans">
      <h1 className="text-4xl text-cyan-900 mb-4 font-semibold">Counter:</h1>
      <div className="text-6xl font-bold text-white bg-cyan-700 px-12 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        {count}
      </div>
    </div>
  );
}

export default Leraning;
