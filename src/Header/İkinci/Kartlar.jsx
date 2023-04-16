import React from 'react'
import kartM from '../kartMuqayise/kartM';
import { Link, Route, Routes } from "react-router-dom";
import Page404 from "../../Header/Page404";
import firstKartmane from '../../cards/firstKartmane';
import secondKartmane from '../../cards/secondKartmane';
import threeKartmane from '../../cards/threeKartmane';
import dahaEtrafli from '../İkinci/dahaEtrafli';
import widthComission from '../comission/widthComission';
import widthOut from '../comission/widthOut';
const Kartlar = () => {
  return (
    <div className='container2'>
    <div className='onlaynnovbe'>
<div className='karttotal'>
      <h1 className='kart1'>Kartlar</h1>
    <p className='kartsifaris'>Kart sifarisi vermək artıq çox rahatdır. Online kart sifarişi verməklə vaxtınıza qənaət edin.Pulsuz kart sifarisi Rabitəbankla mümkündür.Rabitəbank  sizə  debet                 
     <br/>və kredit kartı təklif edir. Üstəlik, cəmi bir kart ilə bir çox üstünlüklərə sahib olun. Debet kart ilə nağdsız ödənişlərin rahatlığını hiss edin.</p>
     </div>
  
     <div className='hover1'>
      <img className="scaless" src='https://cdn-icons-png.flaticon.com/128/839/839947.png'></img>
 
        <Link className="linK12" to="/kartM">
         Kartları müqayisə et
        </Link>

      <Routes>
      <Route path="/" element={<kartM />} />
      <Route path="*" element={<Page404 />} /> 
      </Routes>
    
      </div>
      <div className='linksUU'>
     <div className='linksU'>
     <Link className="links1" to="/firstKartmane">
         Kartmane Debet
        </Link>
        <p className='xerclemek'> Kartmane ilə xərclədikcə qazan!</p>
        <div className='Kesbek'>
          <p className='cashbackk'>Keşbek</p>
          <p className='qaliga'>Qalığa faiz</p>
          </div>
          <div className='qirxDord'>
          <h5 className='qirxfaiz'>40%-dək</h5>
          <h5 className='dordfaiz'>4%</h5>
          </div>
          <div className='sekilIcon'>
          <img className="iconqara"
                
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
          <img className='kartfoto' src='https://www.rabitabank.com/resized/fit388x313/center/pages/143/290130172-850772025904371-6204130269586217984-n.png'></img>
          
        </div>



        <div className='linksU1'>
        <Link className="links2" to="/secondKartmane">
         Kartmane Kredit
        </Link>
        <p className='xerclemek1'>100 gün güzəşt müddəti ilə indi al,sonra ödə!</p>
        <div className='Kesbek1'>
          <p className='cashbackk1'>Güzəşt müddəti</p>
          <p className='qaliga1'>İllik faiz dərəcəsi</p>
          </div>
          <div className='qirxDord1'>
          <h5 className='qirxfaiz1'>100 gün</h5>
          <h5 className='dordfaiz1'>25%</h5>
          </div>
          <div className='sekilIcon1'>
          <img className="iconqara1"
                
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
          <img className='kartfoto1' src='https://www.rabitabank.com/resized/fit388x313/center/pages/148/290678029-1395991960900133-6913061568720080822-n.png'></img>
          
        </div>
        </div>


        <div className='linksU2'>
        <Link className="links3" to="/threeKartmane">
         Kartmane Premium
        </Link>
        <p className='xerclemek2'>Kartmane Premium ilə üstünlüklərdən<br/>yararlanın.</p>
        <div className='Kesbek2'>
          <p className='cashbackk2'>Keşbek</p>
          <p className='qaliga2'>Qalığa faiz</p>
          </div>
          <div className='qirxDord2'>
          <h5 className='qirxfaiz2'>40%-dək</h5>
          <h5 className='dordfaiz2'>6%</h5>
          </div>
          <div className='sekilIcon2'>
          <img className="iconqara2"
                
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
          <img className='kartfoto2' src='https://www.rabitabank.com/resized/fit388x313/center/pages/153/291877538-1340980016311655-7274419457211441503-n-1.png'></img>
          
        </div>

        </div>
        <Routes>
      <Route path="/" element={<firstKartmane/>}/>
      <Route path="/secondKartmane" element={<secondKartmane/>}/>
      <Route path="*" element={<threeKartmane/>}/>
      </Routes>
      </div>
    
       <div className='umumitarifler'>
        <div className='birlesme'><h2 className='tarifLimit'>Tariflər və Limitlər</h2>
        <p className='qazanıl'>Kartmane ilə xərclədikcə qazan!</p></div>
         <div className='sec1'>
         <img className='pic11' src='https://www.rabitabank.com/resized/fit208x178/center/pages/142/tarif-ve-limit.png'></img>
        
         <Link className="linKss" to="/dahaEtrafli">
        Daha ətraflı
        </Link>
        </div>
      <Routes>
      <Route path="/" element={<dahaEtrafli />} />
     
      </Routes>

       </div>
       </div>
          <div className='cardstotal'>
          <h3 className='karts1'>Kart Sifarişi</h3>
           <p className='genis1'>
           Debet kart: Geniş funksiyalara sahib olan Kartmane Debet ilə yalnız qalıq məbləğə faiz gəliri deyil, həm də hər ödənişindən cashback qazanacaq və digər<br/>
           üstünlüklərindən faydalanacaqsan! İlkin mədaxil edərək pulsuz kart sifarisi edə bilərsiniz. Rabitəbank saytı vasitəsilə Online kart sifarisi etmək olduqca rahat<br/>
           və sürətlidir. Üstünlükləri olan bir kart əldə etmək istəyirsinizsə, Kartmane kartı ən uyğun seçimlərdəndir. Debet kart ilə dünyanın istənilən ölkəsində rahat alış-<br/>
           veriş, onlayn ödənişlər edə, restoran, bilet və digər xidmətlərdən istifadə edə və ya vəsaiti rahat nağdlaşdıra bilərsiniz. Həmçinin debet kart şifrəsini online pin<br/>
           set xidmətindən yararlanaraq təyin edə bilərsiniz.
           </p>
           <h3 className='karts2'>Pulsuz Kart Sifarişi</h3>
           <p className='genis2'>
           Kredit kart: Nağdsız ödənişlərinizdə rahatlıqla istifadə edəcəyiniz kredit kartları ilə təhlükəsiz şəkildə əməliyyatlar edin. Online kart sifarisi imkanı ilə rahatlıqla<br/>kartmane kredit kartı əldə etmək mümkündür. Kredit kartları ilə isə faizsiz və komissiyasız alış-verişlərin zövqünü yaşayın. Pulsuz kart sifarisi imkanını əldə etmək <br/>üçün isə ilkin mədaxil seçimini etməyiniz kifayətdir. Kreditin məbləği: 200 AZN –15 000 AZN. Kredit məbləği 10 000 AZN-dən yuxarı olarsa əmək haqqı <br/>minimum 5 000 AZN və ya VİP müştərilərə verilə bilər. 100 gün güzəşt müddəti ilə indi al, sonra ödə!<br/>
           </p>
           </div>

         <div className='widths'>

         <Link className="width1" to="/widthComission">
        Kart Sifarişi
        </Link>

        <Link className="width2" to="/widthOut">
        Pulsuz Kart Sifarişi
        </Link>


         <Routes>
      <Route path="/widthComission" element={<widthComission/>} />
      <Route path="/widthOut" element={<widthOut/>} />
      
      </Routes>

      </div>
     
     



      </div>

 



      </div>


   
  )
}

export default Kartlar