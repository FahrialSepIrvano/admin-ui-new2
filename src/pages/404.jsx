import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg text-slate-500">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;