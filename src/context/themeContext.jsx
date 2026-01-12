import { createContext, useState } from "react";

// Create: Membuat wadah context [cite: 854, 868]
export const ThemeContext = createContext();

// Provide: Komponen penyedia data [cite: 855, 869]
export const ThemeContextProvider = ({ children }) => {
  // Simpan state tema global [cite: 861-862]
  const [theme, setTheme] = useState({ 
    name: "theme-green", 
    color: "#299D91" 
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};