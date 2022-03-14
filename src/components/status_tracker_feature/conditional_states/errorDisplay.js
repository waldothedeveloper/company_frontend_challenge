import PropTypes from "prop-types";
import React from "react";

export default function ErrorDisplay({ message }) {
  //
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="my-32">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
                Something went wrong!
              </h1>
              <p className="mt-6 text-base font-semibold text-rose-500">
                {message.message}{" "}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

ErrorDisplay.propTypes = {
  message: PropTypes.object.isRequired,
};
