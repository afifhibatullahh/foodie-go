"use client";

import { useParams } from "next/navigation";

const FoodDetails = () => {
  const params = useParams();

  return <div>FoodDetails {params.id} </div>;
};

export default FoodDetails;
