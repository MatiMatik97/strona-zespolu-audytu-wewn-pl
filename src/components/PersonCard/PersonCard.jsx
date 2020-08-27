import React from "react";
import "./PersonCard.css";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const PersonCard = ({ name, phone, mail, maps, address, time }) => {
  return (
    <div className="personCard">
      <div className="personCard__row">
        <PersonIcon />
        <p>{name}</p>
      </div>

      <div className="personCard__row">
        <PhoneIcon />
        <p>{phone}</p>
      </div>

      <div className="personCard__row">
        <MailIcon />
        <p>
          <a href={`mailto:${mail}`}>{mail}</a>
        </p>
      </div>

      <div className="personCard__row">
        <HomeWorkIcon />
        <p>
          <a target="_blank" rel="noopener noreferrer" href={maps}>
            {address}
          </a>
        </p>
      </div>

      <div className="personCard__row">
        <AccessTimeIcon />
        <p>{time}</p>
      </div>
    </div>
  );
};

export default PersonCard;
