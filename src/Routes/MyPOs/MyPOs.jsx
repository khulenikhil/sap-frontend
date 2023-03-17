import Table from "../../Components/Table/Table";
import React from "react";
import "./MyPOs.css";

function MyPOs({ pos }) {
  return (
    <div>
      <Table rows={[]} data={pos} />
    </div>
  );
}

export default MyPOs;
