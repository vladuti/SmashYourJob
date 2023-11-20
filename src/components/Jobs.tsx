import React from "react";
import "../css/Jobs.css";
import PhotoSwipe from "./PhotoSwipe";

export default function Jobs() {
  return (
    <center>
      <div className="fundal">
        <h1 className="padd100">Jobs</h1>
        <div className="inaltime">
          <PhotoSwipe></PhotoSwipe>
        </div>
      </div>
    </center>
  );
}
