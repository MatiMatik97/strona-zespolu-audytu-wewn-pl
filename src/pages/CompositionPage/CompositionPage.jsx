import React from "react";
import "./CompositionPage.css";
import UniversalPage from "../UniversalPage/UniversalPage";
import PersonCard from "../../components/PersonCard/PersonCard";

const CompositionPage = () => {
  const linkToGoogleMaps =
    "https://www.google.com/maps/place/Nadbystrzycka+40A,+20-619+Lublin";

  const compositionPageComponent = (
    <div className="composition">
      <h2>Zespół Audytu Wewnętrznego PL</h2>
      <br />
      <h4>Skład osobowy</h4>

      <div className="composition__team">
        <PersonCard
          name={"dr inż. Bogna SAWICKA"}
          phone={"(81) 538.48.75"}
          mail={"b.sawicka@pollub.pl"}
          maps={linkToGoogleMaps}
          address={"pokój nr 6, budynek stołówki (40A)"}
          time={"Poniedziałek - Piątek, 08:00 - 15:00"}
        />

        <PersonCard
          name={"mgr inż. Karolina GAŁĄZKA"}
          phone={"(81) 538.48.75"}
          mail={"k.galazka@pollub.pl"}
          maps={linkToGoogleMaps}
          address={"pokój nr 6, budynek stołówki (40A)"}
          time={"Poniedziałek - Piątek, 08:00 - 15:00"}
        />
      </div>
    </div>
  );

  return <UniversalPage component={compositionPageComponent} />;
};

export default CompositionPage;
