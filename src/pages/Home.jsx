/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UpdateForm from "../components/UpdateForm";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <UpdateForm />
      </div>
    </div>
  );
}

export default Home;
