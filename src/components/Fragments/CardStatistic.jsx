import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

const CardStatistic = (props) => {
  const { data } = props;

  return (
    <Card
      title="Statistics"
      desc={
        <div className="p-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">Weekly Comparison</h3>
            
            {/* Legend Grafik */}
            <div className="flex gap-4 text-[10px] font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-gray-500">This Week</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
                <span className="text-gray-500">Last Week</span>
              </div>
            </div>
          </div>

          {/* Memanggil BarsDataset dengan data dinamis dari props */}
          <div className="h-[220px]">
            <BarsDataset dataset={data} />
          </div>
        </div>
      }
    />
  );
};

export default CardStatistic;