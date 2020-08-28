import React from "react";
import "./PersonCard.css";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ListRow from "../ListRow/ListRow";

const PersonCard = ({ name, phone, mail, maps, address, time }) => {
  return (
    <div className="personCard">
      <ListRow icon={<PersonIcon />} text={name} />
      <ListRow icon={<PhoneIcon />} text={phone} />
      <ListRow icon={<MailIcon />} text={mail} link={`mailto:${mail}`} />
      <ListRow icon={<HomeWorkIcon />} text={address} link={maps} />
      <ListRow icon={<AccessTimeIcon />} text={time} />
    </div>
  );
};

export default PersonCard;
