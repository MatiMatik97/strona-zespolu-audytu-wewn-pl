import React, { useEffect } from "react";
import "./DownloadPage.css";
import { pagesLinks } from "../../utils/links";
import UniversalPage from "../UniversalPage/UniversalPage";
import ListRow from "../../components/ListRow/ListRow";
import LinkIcon from "@material-ui/icons/Link";

const DownloadPage = () => {
  const downloadPageComponent = (
    <div className="download">
      <h2>Zespół Audytu Wewnętrznego PL</h2>
      <h4>Akty prawne i regulaminy do pobrania</h4>

      <ListRow
        icon={<LinkIcon />}
        text={
          "Zarządzenie Nr R–48/2011 Rektora Politechniki Lubelskiej z dnia 1 września 2011 r. w sprawie wprowadzenia Regulaminu audytu wewnętrznego Politechniki Lubelskiej"
        }
        link={
          "http://www.pollub.pl/files/4/news/files/1915_Zarzadzenie,Nr,R-48-2011.pdf"
        }
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Przepisy wprowadzające ustawę o finansach publicznych z dnia 27 sierpnia 2009 r."
        }
        link={
          "http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20091571241/U/D20091241Lj.pdf"
        }
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Ujednolicony tekst ustawy o finansach publicznych z dnia 27 sierpnia 2009 r."
        }
        link={
          "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20091571240/U/D20091240Lj.pdf"
        }
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Rozporządzenie Ministra Finansów z dnia 1 lutego 2010 r. w sprawie przeprowadzania i dokumentowania audytu wewnętrznego "
        }
        link={
          "http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20100210108/O/D20100108.pdf"
        }
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Rozporządzenie Ministra Finansów z dnia 4 września 2015 r. w sprawie audytu wewnętrznego oraz informacji o pracy i wynikach tego audytu"
        }
        link={
          "https://pg.edu.pl/documents/46469294/49145496/Rozporz%C4%85dzenie%20ws%20dokumentacji%20AW%20%28nowe%29.pdf"
        }
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Komunikat Nr 4 Ministra Finansów z dnia 20 maja 2011 r. w sprawie standardów audytu wewnętrznego dla jednostek sektora finansów publicznych"
        }
        link={"http://g.ekspert.infor.pl/p/_dane/akty_pdf/U02/2011/5/23.pdf"}
      />

      <ListRow
        icon={<LinkIcon />}
        text={
          "Definicja audytu wewnętrznego, Kodeks etyki oraz Międzynarodowe standardy praktyki zawodowej audytu wewnętrznego"
        }
        link={
          "https://na.theiia.org/translations/PublicDocuments/IPPF-Standards-2017-Polish.pdf"
        }
      />
    </div>
  );

  useEffect(() => {
    document.title = pagesLinks.DOWNLOAD_PAGE.title;
  }, []);

  return <UniversalPage component={downloadPageComponent} />;
};

export default DownloadPage;
