import React, { useContext } from "react";
import LogoDashboard from "../Elements/LogoDashboard";
import { ThemeContext } from "../../context/themeContext";

// src/components/Layouts/AuthLayout.jsx

const AuthLayout = (props) => {
  const { children, title } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name} font-poppins`}>
      {/* PERBAIKAN: Hapus 'shadow-sm' 
          Gunakan 'border border-gray-200' untuk tampilan flat yang tetap rapi 
      */}
      <div className="w-full max-w-sm  p-8 rounded-2xl">
        <div className="flex justify-center mb-10">
          <LogoDashboard variant="primary" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center text-slate-900">{title}</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Welcome back! Please enter your details.</p>
        {children}
      </div>
    </main>
  );
};
export default AuthLayout;