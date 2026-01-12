import React, { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
// Import ThemeContext untuk mengambil warna tema global [cite: 1735]
import { ThemeContext } from "../../context/themeContext";

const BarsDataset = (props) => {
  const { dataset } = props;
  
  // Mengambil state global theme [cite: 1792]
  const { theme } = useContext(ThemeContext);

  // Mengatur agar warna grafik "This Week" mengikuti warna tema aktif [cite: 1795, 1804, 1805]
  const expensesSeries = [
    { 
      dataKey: "amountThisWeek", 
      label: "This Week", 
      color: theme.color // Menggunakan hexcode dari context
    },
    { 
      dataKey: "amountLastWeek", 
      label: "Last Week", 
      color: "#E8E8E8" 
    },
  ];

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "date" }]}
      series={expensesSeries}
      height={220}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      slotProps={{ legend: { hidden: true } }}
    />
  );
};

export default BarsDataset;