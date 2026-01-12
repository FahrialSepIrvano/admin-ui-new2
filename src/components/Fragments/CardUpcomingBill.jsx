import React, { useContext } from "react";
import Card from "../Elements/Card";
// 1. Import ThemeContext agar bisa mengambil hex color langsung
import { ThemeContext } from "../../context/themeContext";

const CardUpcomingBill = (props) => {
  const { data } = props;
  
  // 2. Gunakan useContext untuk mengambil warna (seperti di CardGoal/CompositionExample)
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      title="Upcoming Bill"
      link="/bill"
      desc={
        <div className="space-y-4">
          {data.map((bill) => (
            <div key={bill.id} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-100 px-3 py-1 rounded-lg text-center">
                  <p className="text-xs text-gray-500">{bill.month}</p>
                  <p className="text-lg font-bold">{bill.date}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {bill.icon}
                    <p className="text-sm font-bold">{bill.name}</p>
                  </div>
                  <p className="text-xs text-gray-500">Last Charge: {bill.lastCharge}</p>
                </div>
              </div>
              {/* 3. Gunakan inline style dengan theme.color agar pasti berubah seperti grafik */}
              <p 
                className="text-sm font-bold text-white px-3 py-1 rounded-full transition-colors duration-300"
                style={{ backgroundColor: theme.color }}
              >
                ${bill.amount}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default CardUpcomingBill;