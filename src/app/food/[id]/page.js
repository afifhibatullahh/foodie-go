"use client";

import Navbar from "@/components/Navbar/Navbar";

const FoodDetails = ({ params }) => {
  return (
    <>
      <Navbar />
      <div>FoodDetails {params.id} </div>
    </>
  );
};

export default FoodDetails;
