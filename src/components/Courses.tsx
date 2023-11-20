import "../css/Courses.css";

import curs2 from "../poze/bani.png";
import curs3 from "../poze/bani.png";
import curs4 from "../poze/bani.png";

interface Prop {
  display: boolean;
}

function Courses({ display }: Prop) {
  if (!display) {
    return null;
  }
  const curs1 =
    "https://www.ateliereleilbah.ro/wp-content/uploads/2021/08/curs-bucatar-calificare-scoala-bucatari-curs-gatit-cooking-bucuresti-cluj-ploiesti.jpg";
  const curs2 =
    "https://www.ateliereleilbah.ro/wp-content/uploads/2021/08/Curs-Programare-IT-App-Web-Development-FullStack-FrontEnd-BackEnd-Developer-Atelierele-ILBAH-1.jpg";
  const curs3 =
    "https://www.ateliereleilbah.ro/wp-content/uploads/2022/04/Curs-Barman-1.jpg";
  const curs4 =
    "https://www.ateliereleilbah.ro/wp-content/uploads/2021/08/Curs-GoogleAds-si-Analytics-Atelierele-ILBAH.jpg";

  return (
    <center>
      <div className="courses-container">
        <div className="column">
          <a href="https://www.ateliereleilbah.ro/cursuri/curs-bucatar-scoala-bucatari/">
            <img className="tabel" src={curs1} alt="Curs 1" />
          </a>
          <a href="https://www.ateliereleilbah.ro/cursuri/curs-programare-it-full-stack-developer-front-end-back-end/">
            <img className="tabel" src={curs2} alt="Curs 2" />
          </a>
        </div>
        <div className="column">
          <a href="https://www.ateliereleilbah.ro/cursuri/curs-barman/">
            <img className="tabel" src={curs3} alt="Curs 3" />
          </a>
          <a href="https://www.ateliereleilbah.ro/cursuri/curs-google-ads-si-google-analytics/">
            <img className="tabel" src={curs4} alt="Curs 4" />
          </a>
        </div>
      </div>
    </center>
  );
}

export default Courses;
