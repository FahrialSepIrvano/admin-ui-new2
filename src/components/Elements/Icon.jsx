import React from "react";

// 1. Import Ikon Utama & Sidebar [cite: 384-393]
import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";

// 2. Import Ikon Brand & Kategori [cite: 394-397, 400]
import AdobeSVG from "../../assets/icons/Adobe.svg?react";
import FigmaSVG from "../../assets/icons/Figma.svg?react";
import FoodSVG from "../../assets/icons/Food.svg?react";
import GamepadSVG from "../../assets/icons/gamepad-2.svg?react";
import HouseSVG from "../../assets/icons/Housing.svg?react";
import MovieSVG from "../../assets/icons/Movie.svg?react";
import OtherSVG from "../../assets/icons/Others.svg?react";
import ShoppingSVG from "../../assets/icons/Shopping.svg?react";
import TransportSVG from "../../assets/icons/Trasnport.svg?react";

// 3. Import Ikon Navigasi & Aksi [cite: 400-403]
import ArrowRightSVG from "../../assets/icons/arrow-right.svg?react";
import ArrowDownSVG from "../../assets/icons/Downarrow.svg?react";
import ArrowUpSVG from "../../assets/icons/Uparrow.svg?react";
import ArrowUpRightSVG from "../../assets/icons/arrow-up-right.svg?react";
import EditSVG from "../../assets/icons/edit.svg?react";
import MastercardSVG from "../../assets/icons/Mastercard-Logo.svg?react";
import VisaSVG from "../../assets/icons/Visa_Logo.svg?react";
import TargetSVG from "../../assets/icons/target.svg?react";
import AwardSVG from "../../assets/icons/Award.svg?react";

// Helper function untuk membuat komponen ikon [cite: 404-407]
const createIcon = (SVG) => ({ size = 24, color = "currentColor", ...props }) => (
  <SVG width={size} height={size} stroke={color} {...props} />
);

// Objek Icon untuk diekspor [cite: 408-429]
const Icon = {
  // Menu Sidebar
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),

  // Brand & Kategori
  Adobe: createIcon(AdobeSVG),
  Figma: createIcon(FigmaSVG),
  Food: createIcon(FoodSVG),
  Gamepad: createIcon(GamepadSVG),
  House: createIcon(HouseSVG),
  Movie: createIcon(MovieSVG),
  Other: createIcon(OtherSVG),
  Shopping: createIcon(ShoppingSVG),
  Transport: createIcon(TransportSVG),

  // Navigasi, Aksi, & Kartu (PENTING untuk Balances & Goals)
  ArrowRight: createIcon(ArrowRightSVG),
  ArrowDown: createIcon(ArrowDownSVG),
  ArrowUp: createIcon(ArrowUpSVG),
  ArrowUpRight: createIcon(ArrowUpRightSVG),
  Edit: createIcon(EditSVG),
  Mastercard: createIcon(MastercardSVG),
  Visa: createIcon(VisaSVG),
  Target: createIcon(TargetSVG),
  Award: createIcon(AwardSVG),
};

export default Icon;