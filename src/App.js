
import logo from './logo.svg';
import './App.css';
import Head from "./Header/Head";
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import UmumiMelumat from "./Header/UmumiMelumat";
import FilialVebankomatlar from "./Header/FilialVebankomatlar";
import Page404 from "./Header/Page404"; import Fərdi from "./Rabita/Fərdi";
import Biznes from "./Rabita/Biznes";
import Kreditlər from "./Header/İkinci/Kreditlər";
import Kartlar from "./Header/İkinci/Kartlar";
import Əmanətlər from "./Header/İkinci/Əmanətlər";
import Boşluq from "./Header/İkinci/Boşluq";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import Nagdpulkrediti from "./Header/fayllar/Nagdpulkrediti";
import Emanetler from "./Header/fayllar/Emanetler";
import Pulköçürmələri from "./Header/fayllar/Pulköçürmələri";
import Keşbek from "./Header/fayllar/Keşbek";
import Kampaniyalar from "./Header/fayllar/Kampaniyalar";
import KartmanePremium from "./Header/fayllar/KartmanePremium";
import umummelumat1 from './Header/umummelumat1';
import UMUMIMELUMATLA from './Header/UMUMIMELUMATLA';
import Kreditller from './Header/Kreditller';
import Emanetller from './Header/Emanetller';
import YUKLEMELERDESTEK from './Header/YUKLEMELERDESTEK';
import Kartmane from './Header/Kartmane';
import stratejimissiya from './Header/stratejimissiya';
import tenderelanlari from './Header/tenderelanlari';
import vakansiyalar from './Header/vakansiyalar';
import Plastikkartlar from './Header/Plastikkartlar';
import Rehberlik from './Header/Rehberlik';
import hesabatlarr from './Header/hesabatlarr';
import AMANAT from './Header/AMANAT';
import Onlaynxidmetler from './Header/Onlaynxidmetler';
import BANKXIDMETLERI from './Header/BANKXIDMETLERI.JSX';
import Bnklararasibiznes from './Header/Bnklararasibiznes';
import Sikayetveteklifler from './Header/Sikayetveteklifler';
import Kamp from './Header/Kamp';
import kompaniya from './Header/kompaniya';
import Risklerinidareedilmesi from './Header/Risklerinidareedilmesi';
import FAQ from './Header/FAQ';
function App() {

   return (
  
  <div>
    
    <Head/>
    
    
    <div className='nav-bar'>
      <Link className="link"to='/'>Ümumi məlumat</Link>
      <Link className="Link"to='/FilialVebankomatlar'>Filial və bankomatlar</Link>
 
     </div>
    
      <Routes>
       <Route path='/' element={<UmumiMelumat/>}/>
       <Route path='/FilialVebankomatlar'element={<FilialVebankomatlar/>}/>
       <Route path='*'element={<Page404/>}/>
      </Routes>
      <div className="right">
      <img className="moon" src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAhgMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABgcIBQIDBAH/xAA5EAACAQMCAwQIAwcFAAAAAAAAAQIDBAUGEQchQRIxUWETImJxgaGxwRQyQggjUoKT0eEzQ3Ki0v/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCjQAAAAAH3YfE3+av6dhi7Wpc3NT8sILp4t9yXmyYa10VZ6JwNpDI3Cus5fS3jCk2qVvTjt2n7TbaXPl38uQEBAYAAAAAAAAAAAAAAAAAHS0/hL7UOVoYzGUfSXFaW3PlGC6yk+iRzkt3sluab4SaMhpbAxuLuntlb2KnXb76Uf0017u9+b8kB19D6Nx2jsZ+Gs4qpdVEnc3Ul61WX2iui+5QfGPMPL68v0pb0rJq1p7Pkuz+b/t2jUO6XN9xjLK3LvMpeXTe7r151G/HtSb+4HyAAAAAAAAAAAAAAAAAACdcHNOrP6yt5V4dq0sF+Jqprk2n6kfjLb4JmnSqP2eMYqGnMhkpRXburlQi/Ygv7yZa4HjVTdOaXf2Xz+Bio2wu9bmOdR2csfqDJ2cl2XQu6tPb3SaA5oAAAAAAAAAAAAAAAAAA0/wAFIKHDbFyX65VpP+rNfYnBCOC01LhriUu+Lrp/1pv7k3AGb+O2FeN1nK+hHajkqaqp+2vVkvo/iaQIfxT0m9WaZnQtoxd/bS9Na7/qe3rQ38180gMsA9lejUoVqlKtTlTqU5OM4SWzi1yaZ6wAAAAAAAAAAAAAAAANDfs+ZFXOk7uwlL17O6bS8IzW/wBVItEzXwP1BHDaxhaV5qNvkofh233Kp3w+fL+Y0oAAAFacUOGlHUfbymK7FDKbevvyhX8peD8H8H02z7kbC7xl3UtL+3qW9xTe0qdSOzX+PM2a+ZGtXaNxWpbT0WQt+1JJ+jrQ5VaX/F/Z7oDJoJ9qzhZm8K518fF5KyW77VGP7yC9qHf8VuQKUXFuMk1JPZp96A/AAAAAAAAAAAAAHlTnOnUjOnJxnFpxkns011NUcM9X0tXadp1pyishbJUrumv4uk15S7/fuuhlU7mkNTX+lMzSyWPkn2fVq0ZP1a0OsX/fowNdg4+ldSY7VOKp5DF1e1F8qlKX56MusZLx+p2AAAA9dSjCpzfJ+KI7ntFYXO7vJY63rza/1UuxUX8y5kmAFQ5DgjiKknKyvb+237oyUasV8k/mcefAysn6meT99k//AGXsAKNo8CajkvS51uPVRs9vm5nYsuBWGi07zJ31XxUOxDf5MtvvKb4wcSoUKdbTmn6+9aScLy6g+UF1pxfj4vp3d/cFY6+jgLbNSsNMUWrO03hK4nUc5V59Xv8AwrbZbLxfUjIAAAAAAAAAHY0zqTKaYyKvsRcOlU7pwfOFReEl1RoTRXFHB6ljTt7mccdknydCtLaE37EuvuezMxgDa4Mp6f4iao0/GFOyydSpbx/2LlKrDbwW/NL3NE7xvHm4ilHJ4OlUfWdvWcd/g0/qBeIKmhx3wrj+8w+QT8FKDX1PRdceMfGL/B4O6nLp6WtGK+SYFwHx5bK4/DWkrvK3lG1oR751Zbb+S8X5IoPNcbdR3sZQxtC0x0X+qMPSzXxly+RX2Vy+QzFy7nKXte7rdJVpuW3u8F5ICzOIPF+vladXG6Y9Ja2ck41LuXq1aq9lfpXz9xUx+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="}/>
  
  </div>
     
     <hr/>  
    
     <div className="img1">
      <img classname="Rabita"src={"https://www.rabitabank.com/images/rabitebank.svg"}/>
      </div>
     
      <div className="ferdi">
     <img className="img2" src={"https://cdn-icons-png.flaticon.com/128/880/880590.png"}/>
      <Link className="class"to='/'>Fərdi</Link>
      <img className="bag"src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdlB6-CugrprhPxumbho1LKu0fzmjepZYP6GEZlo7wKd5uNBY8q__zf7RNiZ8T6ZdTjc&usqp=CAU"}/>
      <Link className="Class"to='/Biznes'>Biznes</Link>
     
      <Routes>
       <Route path='/'element={<Fərdi/>}/>
       <Route path='/Biznes'element={<Biznes/>}/>
       {/* <Route path='*'element={<Page404/>}/> */}
      </Routes>
    
    </div> 
    <div className="umumi">
   <div className="button1">
    <img className="phone"src={"https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/1x/external-phone-networking-tanah-basah-glyph-tanah-basah.png"}/>
    <p>133</p>
   </div>
  <div className="internet">
  <span> İnternet Bankçılıq </span>
  </div>
  </div>
  <hr/>
  <div className="main">
  <img className="KART"src={"https://www.rabitabank.com/resized/fit24x15/center/pages/229/menu-card-1.png"}/>
  <Link className="HISSE1"to='/'>Kreditlər</Link>
  <Link className="HISSE2"to='/Kartlar'>Kartlar</Link>
  <Link className="HISSE3"to='/Əmanətlər'>Əmanətlər</Link>
  <Link className="HISSE4"to='/Boşluq'>...</Link>
  
  <Routes>
       <Route path='/'element={<Kreditlər/>}/>
       <Route path='/Kartlar'element={<Kartlar/>}/>
       <Route path='/Əmanətlər'element={<Əmanətlər/>}/>
       <Route path='/Boşluq'element={<Boşluq/>}/>
      </Routes> 
      </div>
<div className="onlayn">
  <div className="LUPA">
  <img className="lupa"src={"https://cdn-icons-png.flaticon.com/512/2319/2319177.png"}/>
  </div>
  <div className="onlaynnovbe"> 
  <h4>Onlayn növbə </h4>
  </div>
  </div> 
  
<div className='slayd'>
<Splide className='splide'>
  <SplideSlide> 
<div className="image1">
  <div className="kredt">
 <div className="only"> 
 <h1>Kartmane Kredit Kartı</h1> 
 </div>
 <div className="second">
  <div className="naglasdirilma">
 <p>Nağdlaşdırma</p>
 <h3>100%</h3>
 </div>
 <div className="Guzest">
 <p>Güzəşt müddəti</p>
 <h3>100 gün</h3>
 </div>
 <div className="limit"> 
 <p>Kart limiti</p>
 <h3>200-15 000 AZN</h3>
 </div>
 <img className="photo"src={"https://www.rabitabank.com/resized/resize440/center/pages/5/kredit-sayt-banner.png"}/>
 </div>
 <button className="button5">Sifariş et</button> 
   </div>
   </div>
   
   </SplideSlide>
   <SplideSlide>
    
 <div className="image2"> 
   <div className="pul"> 
    <h1>Nağd pul krediti</h1>
    <p className="color">Bütün ehtiyaclar üçün nağd pul krediti</p>
  <div className="pulkrediti">
  <div className="mebleg">
    <p>Məbləğ</p>
    <h3>30 000 AZN</h3>
  </div>
  <div className="Faiz">
    <p>Faiz dərəcəsi</p>
    <h3>14%-lə</h3>
  </div>
 <div className="Muddet">
 <p>Müddət</p>
 <h3>48 aya qədər</h3>
 </div>
 <img className="photo1" src="https://www.rabitabank.com/resized/resize440/center/pages/4/287211137-390228146405222-2435774707310499160-n.png"/>
 </div>
 <button className="button2">Sifariş et</button>
 </div>
</div> 

</SplideSlide>
</Splide>
</div>

<div>
<p className='suretlikecidler'>Sürətli keçidlər</p>
</div>

<div className='partt'>
      <Link className='his1' to='/'>Nağd pul krediti</Link>
     <div className='kr'>
      <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/286282195-1230945007715991-4385574820732660927-n.png'/>
     </div>
      <Link className='his2'to='/Emanetler'> Əmanətlər    </Link>
      <div className='kr1'>
      <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/286710278-732471204703581-1850678723141511623-n.png'/>
      </div>
      <Link className='his3' to='/Pulköçürmələri'> Pul köçürmələri</Link>
      <div className='kr2'>
     <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/286604558-1391650481313324-3195504302439119032-n.png'/>
      </div>
      <Link className='his4' to='/Keşbek'> Keşbek  </Link>
      <div className='kr3'>
      <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/285519191-411334104212629-5350735794494530799-n.png'/>
      </div>
      <Link className='his5' to='/Kampaniyalar'>Kampaniyalar</Link>
     <div className='kr4'>
      <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/285724494-321696796681110-2875749146954822456-n.png'/>
     </div>
      <Link className='his6' to='/KartmanePremium'>Kartmane Premium</Link>
      <div className='kr5'>
        <img src='https://www.rabitabank.com/resized/resize140/center/pages/1/294260910-5064615340328296-6826333305475359908-n.png'/>
      </div>
     </div>
      <Routes>
       <Route path='/'element={<Nagdpulkrediti/>}/>
       <Route path='/Emanetler'element={<Emanetler/>}/>
       <Route path='/Pulköçürmələri'element={<Pulköçürmələri/>}/>
       <Route path='/Keşbek'element={<Keşbek/>}/>
       <Route path='/Kampaniyalar'element={<Kampaniyalar/>}/>
       <Route path='*'element={<KartmanePremium/>}/>
      </Routes>
      
     <div className='rabitamobile'>
      <h1 className='mob'>Rabita Mobile</h1>
      <p className='xidmet'>Hər yerdə maliyyə xidmətlərimizdən 
       <br/> <br/>faydalanmaq üçün Rabita Mobile istifadə<br/><br/>edin!
       <br/></p>
     </div>
    <div className='maliyye'>
     <img className='mobilsekil' src='https://www.rabitabank.com/images/qr_mobile.jpg?v=2'/>
      <p className='kamerasi'>Telefonunuzun kamerası ilə <br/><br/>QR codu scan edin</p>
    </div>
 <div className='storage'>
  <img src='https://www.rabitabank.com/storage/online.png?v=2'/>
 </div>
     <div className='butt'> 
     <div className='valyutabutton'>
      <h1 className='valyuta'>Valyuta Kursu</h1>
      <p className='nagdss'>Nagdsız</p>
      <button className='if'>
      <p className='noqte'>.</p>
      </button>
    
      <p className='nagdd'>Nağd</p>
     </div>
     <div className='mubadile'>
     <ul>
      <li className='val'>Valyuta</li>
      <li className='val1'>GBP</li>
      <li className='val1'>RUB</li>
      <li className='val1'>EUR</li>
      <li className='val1'>USD</li>
     </ul>
     <ul className='coll'>
      <li className='vall'>Alış</li>
      <li className='val2'>2.023</li>
      <li className='val2'>0.0215</li>
      <li className='val2'>1.792</li>
      <li className='val2'>1.695</li>
     </ul>
     <ul>
      <li className='valll'>Satış</li>
      <li className='val3'>2.096</li>
      <li className='val3'>0.023</li>
      <li className='val3'>1.828</li>
      <li className='val3'>1.7025</li>
     </ul>
     <ul>
      <li className='vallll'>Mərkəzi Bank</li>
      <li className='val4'>2.0652</li>
      <li className='val4'>0.0223</li>
      <li className='val4'>1.8104</li>
      <li className='val4'>1.7</li>
     </ul>
     </div>
     <div className='K'>
      <p className='Kurstarixi'>Kurs 17.03.23 tarixinə qədər aktivdir.</p>
       <span className='Conve'>Konvertasiya et</span>
     </div>
     </div>
     <div className='cedvel'>
      <div className='kreditka'>
        <div className='KR1'>
        <h1 className='KR'>Kredit kalkulyatoru</h1>
        </div>
        <p className='kreditmebleg'>Kredit məbləği</p>
        <div className='DD'>
        <button className='kalkulyator'>30000 AZN</button>
        <p className='d'> . </p>
        </div>
         <div className='sozbirlesmeleri'>
         <p>Kredit müddəti</p>
          <p>Faiz dərəcəsi</p>   
          </div>
          <div className='buttonlar'>
          <button className='ay' >48 Ay</button>
          <p className='dots'>.</p>
          <button className='ondord'>14 %</button>
          <p className='dott'>.</p>
          </div>
          <div className='emekk'>
          <p className='ayliq'>Aylıq ödəniş:</p> 
          <p className='od'>819.79 AZN</p>
          </div>
          <div className='SIFARIS'>
          <button className='sifaris'>Sifariş et</button>
        
          </div>
         </div>
         </div>
         <div className='total'>
       <img className='rabitasekil' src='https://www.rabitabank.com/resized/resize200/center/pages/1/bot-new.png'/>
      <div>
        <h1 className='rabbot'>Rabita Bot</h1>
        <p className='BBOT'>RabitəBot ilə bank xidmətlərindən 24/7 rahat
        <br/>və sürətli faydalana bilərsiniz!
        </p>
        </div>
        <div>
       <button className='ucnoqte'>...</button>
       <div className='xidmet1'>
       <p className='hesabb'>Hesaba <br/>nəzarət <br/> <p className='butun'>Bütün hesab<br/>əməliyyatlarına<br/>nəzarət et</p> </p>
       </div>
       <div className='sebeke'>
       <p className='atmler'>Xidmət <br/>şəbəkəsi<br/><br/><p className='bir'>Filiallar və <br/>ATM-lər</p></p>
       </div>
       <div className='kommunal'>
        <button className='iki'>Kommunal ödənişlər</button>
       <div className='klas'>
       <button className='odeme'>Köçürmələr</button> 
       </div>
       </div>
       </div>
      </div> 
      <div className='NOV'>
        <ul className='novler'>
          <li className='musteri'>Fərdi müştərilər</li>
          <li className='bizn'>Biznes müştərilər</li>
          <li className='bankhaqqinda'>Bank haqqında</li>
          <li className='diger'>Digər</li>
          <li className='resurslar'>Insan resursları</li>
          </ul>
          <div className='AA'>
          <ul className='AZZZ'>
          <li className='ofis'>Baş ofis</li>
             <li className='BN'> <br/> Azərbaycan, Bakı şəh.,</li>
            <li className='br'><br/>AZ 1010, 28 May küç. 33</li>
            <br/>
            <li className='tel'>Tel.: (994 12) 598 44 88</li>
            <br/>
            <li className='Fax'>Fax.: (994 12) 598 44 88</li>
            <br/>
            <li className='Teleks'>Teleks: 142453 RSKBAI</li>
            <br/>
            <li className='com'>133@rabitabank.com</li> 
            </ul>
            </div>
        </div>
       <div className='moves'>
      <Link className="move"to='/'>Kartmane</Link>
      <Link className="move1"to='/Emanetller'>Əmanətlər</Link>
      <Link className="move2"to='/umumimelumat1'>Ümumi məlumat</Link>
      <Link className="move3"to='/YUKLEMELERDESTEK'>Yükləmələr və dəstək</Link>
      <Link className="move4"to='/UMUMIMELUMATLA'>Ümumi məlumat</Link>
      
      
      
      <Routes>
       <Route path='/' element={<Kartmane/>}/>
       <Route path='/Emanetller'element={<Emanetller/>}/>
       <Route path='umumimelumat1'element={<umumimelumat1/>}/>
       <Route path='YUKLEMELERDESTEK'element={<YUKLEMELERDESTEK/>}/>
       <Route path='UMUMIMELUMATLA'element={<UMUMIMELUMATLA/>}/>

       
      </Routes>
      
      </div>
     
      <div className='vakansiya'>
      <Link className="move5"to='/'>Kreditlər</Link>
      <Link className="move6"to='/Kreditller'>Kreditlər</Link>
      <Link className="move7"to='/stratejimissiya'>Strateji baxış və missiya</Link>
      <Link className="move8"to='/tenderelanlari'>Tender elanları</Link>
      <Link className="move9"to='/vakansiyalar'>Vakansiyalar</Link>
      
      
      
      <Routes>
       <Route path='/' element={<Kreditller/>}/>
       <Route path='/Kreditller'element={<Kreditller/>}/>
       <Route path='stratejimissiya'element={<stratejimissiya/>}/>
       <Route path='tenderelanlari'element={<tenderelanlari/>}/>
       <Route path='vakansiyalar'element={<vakansiyalar/>}/>
       
      </Routes>
    

      </div>
       
       <div className='emanat'>
      <Link className="move10"to='/'> Əmanətlər</Link>
      <Link className="move11"to='/Plastikkartlar'>Plastik kartlar</Link>
      <Link className="move12"to='/Rehberlik'>Rəhbərlik</Link>
      <Link className="move13"to='/hesabatlarr'>Hesabatlar</Link>
      
      <Routes>
       <Route path='/' element={<AMANAT/>}/>
       <Route path='/Plastikkartlar'element={<Plastikkartlar/>}/>
       <Route path='Rehberlik'element={<Rehberlik/>}/>
       <Route path='hesabatlarr'element={<hesabatlarr/>}/>
      </Routes>
  
       </div>
       
       <div className='banklararasi'>
       <Link className="move14"to='/'> Onlayn xidmətlər</Link>
      <Link className="move15"to='/BANKXIDMETLERI'>Bank xidmətləri</Link>
      <Link className="move16"to='/Bnklararasibiznes'>Banklararası biznes</Link>
      <Link className="move17"to='/Sikayetveteklifler'>Şikayət və təkliflər</Link>
      
      <Routes>
       <Route path='/' element={<Onlaynxidmetler/>}/>
       <Route path='/BANKXIDMETLERI'element={<BANKXIDMETLERI/>}/>
       <Route path='Bnklararasibiznes'element={<Bnklararasibiznes/>}/>
       <Route path='Sikayetveteklifler'element={<Sikayetveteklifler/>}/>
       
       
      </Routes>

       </div>
      
      <div className='kamp'>

      <Link className="move18"to='/'> Kampaniyalar</Link>
      <Link className="move19"to='/kompaniya'>Kampaniyalar</Link>
      <Link className="move20"to='/Risklerinidareedilmesi'>Risklərin idarə edilməsi</Link>
      <Link className="move21"to='/FAQ'>F.A.Q</Link>
      
      <Routes>
       <Route path='/' element={<Kamp/>}/>
       <Route path='/kompaniya'element={<kompaniya/>}/>
       <Route path='Risklerinidareedilmesi'element={<Risklerinidareedilmesi/>}/>
       <Route path='FAQ'element={<FAQ/>}/>
      
      </Routes>
     </div>
       
       <div className='sekiller'>
        
       <img className='appstore' src='https://www.rabitabank.com/images/svg-icons/apple_1.svg'/>
       <img className='googlepay' src='https://www.rabitabank.com/images/svg-icons/google.svg'/>
        <img className='appgallery' src='https://www.rabitabank.com/images/svg-icons/appgallery.svg'/>
       <div className='sonpart'>
        <div className='Z'>
       <p className='izleyin'>Bizi izləyin</p>
       </div>
       <div className='FACE'>
       <img className='facebook' src='data:image/png;base64,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'/>
        </div>
        <div className='Twit'>
       <img className='Twitter'src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAZlBMVEUAAAD////Y2NhAQED4+Pjz8/O6urqAgICYmJg1NTULCwvq6urDw8P7+/vJyclYWFhgYGBvb28gICDg4OCIiIhmZmYnJyeoqKgsLCxNTU2enp55eXlISEhSUlLPz8+urq4WFhaQkJBi1D2AAAADNklEQVRoge2b2baCIBRAQVEznHIsrbT//8mbem1EgYPJC/uhF5G9QobDURAecVzP3qOfs7c91/lXouGX7H5vfbIjT7Xlb2lGyLcmdbCtuCcY1db2ZoSsXk02bu0Rn9zVm/awJzuMHD1mdBe7utQu8nSpPWTrUttog9mTjTaxwWAwGAwGLfhJXrtuncfltt6ysaZtHKbB5f1i+kvz7uEdiV72FXYACD1vgjFjQfEnYTFdu2J8ljaXhBxFylVf4p7mfuVSObDtZH7f8Qu4A6YZ41007qMJIN6OsIjbnTE/uMmb0dB1nMtyoZxnhuysyvC9wzA58szXoSrJNj9Pd+cLheYe9ER0LxO3JJFTXx73z3dRn2Nu4+oayicuTs8a6FyDtbz2Hghl+7gdvtxdM4vsLSH1QdKMEHm9PWM9Lp/M2dTM6GN6dL/zPSe26w2yOEJm+HyQpOo+SiR882w3WeTwXZH7XlHBNQOzRKnDqCu7vbR7zFVHMPXc9JzVRTcWsLlqaILqMlujk7VNci7TjKdugWrOqkRoxh1cFVR9ZD1tKeBpUEYnlwOWEbT7FctTVMcgdYed9lAWSm0eCgV33/RSQkNu/QtA885iy9IiGVDNDnKlgI4t5e4NWi8H9sqjmsjvO/5RbnEKNSNbKAhZQOHtRq2ohj7qHrXxRYETyoD/vX2VABonjDAjFVFU2rsnApupciLDgzY6e9sgxT7nxkFMlDNJ8dn3Tzngn6u/FrewA5tZwJPoA+gissa3ALAHjVWmkwn+FoMFOAB/Q2z//o76mB65yqtVJ7KJUnoVWae5ByTdtFtPLbdyh+pD+pW0FQ/IJbNkfLomEJtOIUlRLmnq8SfVFRYsFrkusy8wwH9i3ouE5UupXCgnbsr9jnNa31sL9e2VvlxLx/k/PRd54AgNaWetQdXVWQ8VDoajFb9mSmQm7mytpeqfQlROm3XFPYnIBiBa+R9PpNVy585++m1i4s5EhjTI1wj+Funs3LXoc/52aGZVB3uzF9XHc5w0XtM0SWwfu62sBoPBYDAYtKLxg3yNxxA0Hr7QeORE40EbjceLdB6q0niUTOcBOp3HBnUelsRajoj+AYX1I31NP2uDAAAAAElFTkSuQmCC'/>
       </div>
       <div className='Inst'>
      <img className='instagram' src='data:image/png;base64,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'/>
       </div>
       <div className='you'>
       <img className='youtube' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOsD_Jm_KUHpV7Ne5gL8peYktnh-QI9m7yQ&usqp=CAU'/>
       </div>
       <div className='link'>
       <img className='linkedin' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD////CwsJOTk6ysrL4+PhFRUXY2Nj09PS6urqYmJiBgYFBQUELCws0NDTFxcXS0tJVVVVra2sUFBQ6OjqKiopwcHCjo6MgICDu7u7n5+dcXFx4eHguLi7MzMzf399bVa6cAAACRUlEQVRoge3b2XaCMBAG4AQMewXZVKT6/m9ZFZVloiYeM9OL+S96UTh+GgIkgRFySBSn2Y9wnp8sjaMbKa5/VeJeHZOokQ7XmLIQ6/BO57jwJflAh/iyEOGFVsitPWStzjRqDxuTSBHRyOIMx1R0LFIqOhUZFZ0JhKunPmQw5x+lbpttWtb4cFsM91RVbHDhXSHHoN5SAyWn2ePd2nZzWcquwqILuQxWm7dAlvKAQ8MfjfWz6+WRHgauGNG1t5QoZ3ejpVEGFFst3WDQqZbuMehSS/sYNGEP157XHg69oWpvMcwC51khyULsFzLiVHTdzeVfPFpU0zbHa+0hhzvuYfWwaTZp01O4HA6H80hQ9mlfbj687Nf+MtNZdgW2+o8pmb/qbnPjfZF8sjR1BPfr6bKeDwcSwbClDOf/PtpPl7yXQwVIqytdh2CDLGwXJT6iEwhfsnVPw0HVLXYjHGs6045ibznZdHZruo6fy3a2LR3pp2mPHM1XQ23ptzHva1+nzddDvk93dLTx9NwBvaejZemULpq27FeRfqPhLPkjOr/fKRrt0oByR0/6UXXS7RC4oudrW51mD7M+bk8vnhDWml3MrmjWdLQcEazefrtv0aD7Bgb7fIduwUfAo+2Ihmu3cOjghlbwxIEHm2mmmWaaaaaZZppppplmmmmmKejXr0k8f+zykjZ7bSzJvXny6fJPffSWgQ9XGvARRC/AcziEIXwhn7AMgbD4grDkhLDQhrC8iLKoirCUjLKAjrJskLJYUpKUiP4B8nIf+HRw/g4AAAAASUVORK5CYII='/>
       </div>
       </div>
       </div>

   <div className='merkezibank'>
    <p className='ASC'>Rabitəbank ASC Azərbaycan Mərkəzi Bankın 136 saylı lisenziyası<br/>
əsasında fəaliyyət göstərir. © Rabitəbank 2023</p>
   <div className='sekl'>
   <img className ='infobank' src='https://www.rabitabank.com/images/infobank.png'/>
   <img className='maliyya' src='https://www.rabitabank.com/images/maliyye-portali.png'/>
   </div>
   </div>

       
      
      
      
      
       </div>
       
       
       
       
       
       
       
       
     
        
        
        
        
        
        
        
        
        
        
       
        
        
      
     
     
     
     
     

    
      
      
      

 


   );
 
  }



export default App;
