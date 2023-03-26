import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NagdPul from "./Nagdpul";
import EMANETTT from "./EMANETTT";
import Page404 from "../../Header/Page404";
const suretlikecidler = () => {
  console.log("Component is loaded");
  return (
    <div>
      <p className="suretlikecidler">Sürətli keçidlər</p>
      <div />
      <div className="partt">
        <Link className="his1" to="/">
          Nağd pul krediti
        </Link>
        <div className="kr">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/286282195-1230945007715991-4385574820732660927-n.png" />
        </div>
        <Link className="his2" to="/EMANETTT">
          {" "}
          Əmanətlər
        </Link>
        <div className="kr1">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/286710278-732471204703581-1850678723141511623-n.png" />
        </div>
        <Link className="his3" to="/pulkoc">
          {" "}
          Pul köçürmələri
        </Link>
        <div className="kr2">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/286604558-1391650481313324-3195504302439119032-n.png" />
        </div>
        <Link className="his4" to="/kasbak">
          {" "}
          Keşbek
        </Link>
        <div className="kr3">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/285519191-411334104212629-5350735794494530799-n.png" />
        </div>
        <Link className="his5" to="/komppaniya">
        {" "}
          Kampaniyalar
        </Link>
        <div className="kr4">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/285724494-321696796681110-2875749146954822456-n.png" />
        </div>
        <Link className="his6" to="/kartmanepremium">
        {" "}
          Kartmane Premium
        </Link>
        <div className="kr5">
          <img src="https://www.rabitabank.com/resized/resize140/center/pages/1/294260910-5064615340328296-6826333305475359908-n.png" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<NagdPul />} />
        <Route path="/EMANETTT" element={<EMANETTT />} />
        <Route path="/pulkoc" element={<pulkoc />} />
        <Route path="/kasbak" element={<kasbak />} />
        <Route path="/komppaniya" element={<komppaniya />} />
        <Route path="/kartmanepremium" element={<kartmanepremium />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default suretlikecidler;
