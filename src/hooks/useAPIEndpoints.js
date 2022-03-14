import { useState } from "react";

export const useAPIEndpoints = () => {
  const [endpoints, setEndpoints] = useState({ num: 1, text: "/api/1" });

  //! this is for DEMO purposes, to allow for testing different endpoints such as /api/1, /api/2, etc.
  const handleAPIEndPoints = (value) => {
    const num = value.split("/api/")[1];
    setEndpoints({ num: Number.parseInt(num), text: `${value}` });
  };

  return { endpoints, handleAPIEndPoints };
};
