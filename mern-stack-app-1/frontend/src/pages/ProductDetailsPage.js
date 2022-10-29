import { useParams } from "react-router-dom";
import React from "react";

export function ProductDetailsPage() {
  const { id } = useParams();
  return <div>ProductDetailsPage with {id}</div>;
}
