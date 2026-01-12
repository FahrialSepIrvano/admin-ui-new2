import React, { useContext } from "react";
// Import ThemeContext untuk mengambil kode warna hex secara langsung
import { ThemeContext } from "../../context/themeContext";

const LogoDashboard = (props) => {
  const { variant = "primary" } = props;
  
  // Mengambil state global theme dari context
  const { theme } = useContext(ThemeContext);

  const variantClasses = {
    // Varian untuk halaman Auth (Login/Signup)
    primary: "text-4xl justify-center mb-6",
    // Varian untuk Sidebar (MainLayout)
    secondary: "text-sm sm:text-2xl justify-start",
  };

  return (
    <div 
      className={`flex font-poppins tracking-wide ${variantClasses[variant]}`}
      // Menggunakan inline style agar warna teks logo sinkron dengan state global theme.color
      style={{ color: theme.color }}
    >
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
};

export default LogoDashboard;