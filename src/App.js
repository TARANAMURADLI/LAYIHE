 import logo from './logo.svg';
 import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       
  import react,{useState} from "react";
  import logo from "./logo.svg";
  import "./App.css";
  import Head from "./Header/Head";
  import { Routes,Route,Link,NavLink } from 'react-router-dom';
  import UmumiMelumat from "./Header/UmumiMelumat";
  import FilialVebankomatlar from "./Header/FilialVebankomatlar";
  import Page404 from "./Header/Page404";
  import Fərdi from "./Rabita/Fərdi";
  import Biznes from "./Rabita/Biznes";
  import Kreditlər from "./Header/İkinci/Kreditlər";
  import Kartlar from "./Header/İkinci/Kartlar";
  import Əmanətlər from "./Header/İkinci/Əmanətlər";
  import Boşluq from "./Header/İkinci/Boşluq";
  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/react-splide/css';
  import '@splidejs/splide/dist/css/splide.min.css';
import React from "react";
 
  function App() {
 
  
    return (
  
    <div>
 
      <Head/>
     
    
      <div className='nav-bar'>
      <Link className="link"to='/'>UmumiMelumat</Link>
      <Link className="Link"to='/FilialVebankomatlar'>FilialBankomat</Link>
 
     </div>
    
      <Routes>
       <Route path='/' element={<UmumiMelumat/>}/>
       <Route path='/FilialVebankomatlar'element={<FilialVebankomatlar/>}/>
      {/* <Route path='*'element={<Page404/>}/> */}
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
  <span>  İnternet Bankçılıq  </span>
  </div>
  </div>
  <hr/>
  <div className="main">
  <img className="KART"src={"https://www.rabitabank.com/resized/fit24x15/center/pages/229/menu-card-1.png"}/>
  <Link className="HISSE1"to='/'>Kreditlər</Link>
  <Link className="HISSE2"to='/Kartlar'>Kartlar</Link>
  <Link className="HISSE3"to='/Əmanətlər'>Əmanətlər</Link>
  <Link className="HISSE4"to='/Boşluq'>...</Link>
  </div>
  <Routes>
       <Route path='/'element={<Kreditlər/>}/>
       <Route path='/Kartlar'element={<Kartlar/>}/>

       <Route path='/Əmanətlər'element={<Əmanətlər/>}/>
       <Route path='/Boşluq'element={<Boşluq/>}/>
      </Routes>


<div className="onlayn">
  <div className="LUPA">
  <img className="lupa"src={"https://cdn-icons-png.flaticon.com/512/2319/2319177.png"}/>
  </div>
  <div className="onlaynnovbe"> 
  <h4>Onlayn növbə </h4>
    </div>
  </div> 
   <Splide onClick={"splide"}>
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

 <button className="button">Sifariş et</button> 
   </div>
 <div className="image2 "> 
   <div className="pul"> 
    <h1>Nağd pul krediti</h1>
    <p className="color">Bütün ehtiyaclar üçün nağd pul krediti</p>
  </div>
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
  


   );
 }

export default App;
