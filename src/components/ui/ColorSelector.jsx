// components/ui/ColorSelector.jsx
import React from 'react';

const ColorSelector = ({ title = "Popular Colors" }) => {
  const colors = [
    { name: "Blue", class: "bg-blue-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Red", class: "bg-red-500" },
    { name: "Cyan", class: "bg-cyan-500" },
  ];
  
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="flex items-center justify-between">
        {colors.map(color => (
          <button 
            key={color.name}
            className={`w-10 h-10 rounded-full ${color.class} hover:ring-4 hover:ring-gray-200 transition-all`}
            aria-label={`${color.name} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;