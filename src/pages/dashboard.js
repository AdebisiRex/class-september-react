import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/Components/Layout/Navbar";
import { useAppSelector } from "@/redux/store";

const Dashboard = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const userData = useAppSelector(state=> state)

  return (
    <div>
      <Navbar/>
      <h1>{userData.name}</h1>
      <h1 className="display-1 p-5 bg-success">This is the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
