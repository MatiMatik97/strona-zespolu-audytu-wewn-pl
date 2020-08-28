import React from "react";
import "./ListRow.css";

const ListRow = ({ icon, text, link }) => {
  return (
    <div className="listRow">
      {icon}
      {link ? (
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ListRow;
