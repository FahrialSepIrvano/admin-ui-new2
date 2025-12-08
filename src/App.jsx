import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/404"; // Pastikan nama file sesuai (404.jsx atau error.jsx)

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        // Sesuai PDF Halaman 10: Tampilan Root dengan navigasi sederhana
        <div className="flex justify-center min-h-screen items-center bg-slate-100 flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-600">Halaman Utama</h1>
          <div className="flex gap-4">
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login Page
            </Link>
            <Link 
              to="/register" 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Register Page
            </Link>
          </div>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;