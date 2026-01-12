import React, { useContext } from "react";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import { Link } from "react-router-dom";
import Icon from "../Elements/Icon";
// Import ThemeContext untuk mengambil hex color
import { ThemeContext } from "../../context/themeContext";

function CardBalance(props) {
  const { data } = props;
  
  // Gunakan useContext untuk mengakses state global tema
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      title="Total Balance"
      desc={
        <DotsMobileStepper
          data={data.map((item) => (
            <div key={item.id} className="p-2">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                  ${item.balance.toLocaleString()}
                </div>
                <Link to="/balance" className="text-xs text-gray-400 hover:underline">
                  All account
                </Link>
              </div>
              
              <div className="border-b border-gray-100 my-4"></div>
              
              {/* Bagian kartu menggunakan inline style agar sinkron dengan grafik */}
              <div 
                className="text-white p-4 rounded-xl flex justify-between transition-colors duration-300"
                style={{ backgroundColor: theme.color }}
              >
                <div>
                  <p className="text-[10px] opacity-80 uppercase">Account Type</p>
                  <p className="text-lg font-bold italic">{item.accountType}</p>
                  <p className="text-[10px] mt-1 tracking-widest">{item.accountNumber}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div>{item.logo}</div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold me-2">${item.balance.toLocaleString()}</span>
                    {/* Ikon panah kecil juga mengikuti warna tema */}
                    <div 
                      className="bg-white rounded-full p-0.5"
                      style={{ color: theme.color }}
                    >
                      <Icon.ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      }
    />
  );
}

export default CardBalance;