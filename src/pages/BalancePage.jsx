import React from "react";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {/* Card Putih Sederhana untuk Balances */}
        <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800">this balances</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default BalancePage;