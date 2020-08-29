import React, { useEffect } from "react";
import "./FunctionsPage.css";
import { pages } from "../../utils/links";
import UniversalPage from "../UniversalPage/UniversalPage";
import WorkIcon from "@material-ui/icons/Work";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import ListRow from "../../components/ListRow/ListRow";

const FunctionsPage = () => {
  const functionsPageComponent = (
    <div className="functions">
      <h2>Zespół Audytu Wewnętrznego PL</h2>
      <h4>Funkcje audytu wewnętrznego</h4>

      <div className="functions__duties">
        <ListRow
          icon={<WorkIcon />}
          text={
            "ocena adekwatności, skuteczności i efektywności kontroli zarządczej"
          }
        />

        <ListRow
          icon={<WorkIcon />}
          text={"ocena działań podejmowanych przez kierowników"}
        />

        <ListRow
          icon={<WorkIcon />}
          text={
            "identyfikowanie, analiza i ocena ryzyka oraz jego wpływu na realizację celów i zadań w poszczególnych obszarach działalności"
          }
        />

        <ListRow
          icon={<WorkIcon />}
          text={
            "wydawanie niezaleznych opinii na temat jakości systemów i procesów zarządzania ryzykiem"
          }
        />
      </div>

      <h4>Cele audytu wewnętrznego</h4>

      <div className="functions__goals">
        <ListRow
          icon={<GolfCourseIcon />}
          text={
            "celem prowadzonego audytu wewnętrznego jest przysparzanie wartości dodanej i usprawnianie funkcjonowania Uczelni"
          }
        />

        <ListRow
          icon={<GolfCourseIcon />}
          text={
            "rola audytu wewnetrznego polega na wykrywaniu i szacowaniu potencjalnego ryzyka mogącego się pojawić w związku z działalnością Uczelni oraz na badaniu i ocenianiu adekwatności, skuteczności i efektywności kontroli zarządczej w celu wyeliminowania lub ograniczenia takiego ryzyka"
          }
        />
      </div>
    </div>
  );

  useEffect(() => {
    document.title = pages.FUNCTIONS_PAGE.title;
  }, []);

  return <UniversalPage component={functionsPageComponent} />;
};

export default FunctionsPage;
