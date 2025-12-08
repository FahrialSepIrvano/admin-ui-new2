import React from "react";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom"; // Import Link dari React Router

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-4">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="Tanzir Rahman"
          name="name"
        />
      </div>
      <div className="mb-4">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      
      <div className="mb-4 relative">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
        {/* Ikon Mata */}
        <span className="absolute top-[40px] right-3 text-slate-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
      </div>

      <div className="mb-6">
        <p className="text-xs text-slate-500">
          By continuing, you agree to our <span className="text-teal-600 font-bold cursor-pointer">terms of service.</span>
        </p>
      </div>

      <Button classname="w-full bg-teal-600 text-white hover:bg-teal-700">Sign up</Button>

      {/* Divider */}
      <div className="my-6 flex items-center justify-center relative">
        <div className="border-t border-slate-300 w-full absolute"></div>
        <span className="px-3 bg-white relative z-10 text-slate-400 text-sm">
          or sign up with
        </span>
      </div>

      <Button 
        variant="secondary" 
        type="button" 
        classname="w-full bg-gray-100 text-slate-600 hover:bg-gray-200"
      >
        <span className="flex items-center justify-center gap-2">
          {/* SVG Google */}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
          Continue with Google
        </span>
      </Button>

      {/* Link Navigasi ke Login */}
      <p className="text-sm mt-5 text-center text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-teal-600 hover:underline">
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default FormSignUp;