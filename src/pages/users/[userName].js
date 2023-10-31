import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/Components/Layout/Navbar";
const UserName = () => {
  const router = useRouter();

  if (router.query.userName === "adebisi") {
    return (
      <>
        <Navbar />
        <div>Welcome {router.query.userName}</div>
      </>
    );
  } else {
    return (
      <div>
        <Navbar />
        <h1>This is some user, we dont recognize</h1>
      </div>
    );
  }
};

export default UserName;
