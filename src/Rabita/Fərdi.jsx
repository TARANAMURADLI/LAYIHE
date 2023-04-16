import React from "react";
import SlidesSekiller from "../Header/slidessekiller";
import SuretliKecidler from "../Header/suretlikecidler/suretlikecidler";
import Mobile from "../Header/RabitaMobile/Mobile";
import Kreditlər from "../Header/İkinci/Kreditlər";
import Əmanətlər from "../Header/İkinci/Əmanətlər";
import Kartlar from "../Header/İkinci/Kartlar";
import Boşluq from "../Header/İkinci/Boşluq";
import ValyutaKursu from "../Header/ValyutaKursu/ValyutaKursu";
import RabitaBot from "../Header/rabitaBot/rabitaBot";
const Fərdi = () => {
 
  return (
   
  
   <div>
  
      <div className="main">  
    
      </div>
      <div className="slayd">
        <SlidesSekiller />
      </div>
      <div className="partt">
        <SuretliKecidler/>
      </div>
      <div className="rabitamobile">
        <Mobile />
      </div>
      <div className="butt">
         <ValyutaKursu/>
      </div>
    <div className="total">
      <RabitaBot/>
    </div>
    </div>
   
  );
};

export default Fərdi;
