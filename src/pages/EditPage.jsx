import React from "react";
import { useParams } from "react-router";

function EditPage() {
  const { id } = useParams();
  return <div>EditPage {id}</div>;
}

export default EditPage;
