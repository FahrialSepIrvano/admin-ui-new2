import React from "react";
import Logo from "../Elements/Logo";

const AuthLayout = (props) => {
  const { children, title } = props; // Props 'type' sudah tidak dibutuhkan di sini
  return (
    <div className="flex justify-center min-h-screen items-center font-poppins">
      <div className="w-full max-w-xs">
        {/* Logo */}
        <div className="flex justify-center mb-6">
            <Logo />
        </div>
        
        {/* Judul Halaman */}
        <h1 className="text-2xl font-bold mb-8 text-center text-slate-900">{title}</h1>
        
        {/* Form akan dirender di sini (sudah termasuk link footer di dalamnya) */}
        {children}
        
      </div>
    </div>
  );
};

export default AuthLayout;