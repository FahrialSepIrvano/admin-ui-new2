import React, { useState, useContext } from "react";
import Card from "../Elements/Card";
// Import ThemeContext untuk mengambil kode warna hex secara langsung
import { ThemeContext } from "../../context/themeContext";

const CardRecentTransaction = (props) => {
  const { data } = props;
  const [type, setType] = useState("All");

  // Mengambil state global theme dari context
  const { theme } = useContext(ThemeContext);

  const filteredTransactions = type === "All" 
    ? data 
    : data.filter((transaction) => transaction.type === type);

  return (
    <Card
      title="Recent Transactions"
      link="/transaction"
      desc={
        <div>
          {/* Tab Filter */}
          <div className="flex gap-4 mb-6 border-b border-gray-100">
            {["All", "Revenue", "Expense"].map((item) => (
              <button
                key={item}
                onClick={() => setType(item)}
                // Gunakan style inline untuk warna teks dan border bawah saat aktif
                style={
                  type === item 
                    ? { color: theme.color, borderBottomColor: theme.color } 
                    : {}
                }
                className={`pb-2 text-sm transition-all ${
                  type === item 
                    ? "border-b-2 font-bold" 
                    : "text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* List Transaksi */}
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="bg-gray-100 p-2 rounded-lg">{transaction.icon}</div>
                  <div>
                    <p className="text-sm font-bold">{transaction.transactionName}</p>
                    <p className="text-xs text-gray-500">{transaction.shopName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">${transaction.amount}</p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default CardRecentTransaction;