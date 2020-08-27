import React from "react";
import "./ListRow.css";

const ListRow = ({ icon, text }) => {
  return (
    <div className="listRow">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default ListRow;
