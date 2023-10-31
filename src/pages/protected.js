import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/Components/Layout/Navbar";
const ProtectedRoute = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(18);

  useEffect(() => {
    console.log("Protected Page has been mounted");

    return () => {
      console.log("You're leaving a protected space");
      // alert("You're leaving a protected space");
    };
  }, [age, number]);

  return (
    <div>
      <Navbar />
      <h1 className="bg-primary p-4 fw-bold text-white display-1">
        This is the protected Route {number} {age}
      </h1>

      <button onClick={() => setNumber(number + 1)}> Change Number</button>
      <button onClick={() => setAge(24)}> Change Age</button>
    </div>
  );
};

export default ProtectedRoute;
