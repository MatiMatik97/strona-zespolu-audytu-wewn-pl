import React from "react";
import "./HomePage.css";
import UniversalPage from "../UniversalPage/UniversalPage";

const HomePage = () => {
  const homePageComponent = (
    <div className="home">
      <h2>Zespół Audytu Wewnętrznego PL</h2>
      <h4>Definicja audytu wewnętrznego</h4>
      <h5>
        Art. 272. (Ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych)
      </h5>

      <p>
        <strong>1.</strong> Audyt wewnętrzny jest działalnością niezależną i
        obiektywną, której celem jest wspieranie ministra kierującego działem
        lub kierownika jednostki w realizacji celów i zadań przez systematyczną
        ocenę kontroli zarządczej oraz czynności doradcze.
      </p>

      <p>
        <strong>2.</strong> Ocena, o której mowa w ust. 1, dotyczy w
        szczególności adekwatności, skuteczności i efektywności kontroli
        zarządczej w dziale administracji rządowej lub jednostce.
      </p>
    </div>
  );

  return <UniversalPage component={homePageComponent} />;
};

export default HomePage;
