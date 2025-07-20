import React from "react";

const Card = ({ title, value, icon: Icon, color = "bg-white", textColor = "text-gray-900" }) => {
  return (
    <div className={`flex items-center justify-between p-5 rounded-2xl shadow-md ${color}`}>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      </div>
      {Icon && (
        <div className="text-4xl text-gray-400">
          <Icon />
        </div>
      )}
    </div>
  );
};

export default Card;
