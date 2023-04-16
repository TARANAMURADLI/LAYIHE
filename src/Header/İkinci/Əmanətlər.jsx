import React from 'react'
import saxlancSeyf from '../EmanetSaxlancseyf/saxlancSeyf'
import { Link, Route, Routes} from "react-router-dom";
import { useEffect,useState} from 'react';
import button from '../buttonemanet/button';

const Əmanətlər = () => {

   
 
const [inputValue,setInputValue]=useState({
   name:" ",
  surname:" ",

 

});


 const handleChange = (e) => {
  
   setInputValue({...inputValue.e.target.value})

   

 if (inputValue.target.value.length > 0){
 
    
  
}else{

}


}
  


  return (
    <div className='container3'>
      <div className='emanettotal1'>
     <div className='onlaynnovbe'>
    <div className='emanettotal'>
      <h1 className='emanet1'>Əmanətlər</h1>
    <div className='emanetsifaris'>
      <h3 className='uni'>Universal Əmanət</h3>
      <p className='universalemanet1'>"Universal əmanət ilə əmanət şərtlərini sərbəst şəkildə seçin və əlavə gəlir
      qazanın!</p>
      <div className='mud'>
      <p className='mud1'>Müddəti</p>
      <h3 className='otuzaltiay'>36 ayadək</h3>
      <p className='mud2'>Faiz dərəcəsi</p>
      <h3 className='onelli'>10.50%</h3>
      </div>
    <div className='valyutaa'>
      <p className='valy'>Valyuta</p>
      <h3 className='aznusd'>AZN/EUR/USD</h3>  </div>
      <div className='icsss1'>
      <img className='icsss' src='https://img.icons8.com/ios-filled/256/circled-chevron-right.png'/>
      <div className='seyf1' ><img className='seyfsekil' src='https://www.rabitabank.com/resized/resize0x196/center/pages/138/285297343-588353235899703-7333212288748103418-n.png'/>
      </div>
      </div>
     </div>
     </div>
     </div>
     
      
    <div className='emanetsifaris1'>
      <h3 className='uni1'>Uşaq yığım əmanəti </h3>
      <p className='universalemanet2'>"Uşaq yığım ilə faizlərinizə faiz qazandırın və sürətlə artan məbləğlə <br/> övladınızın gələcəyini qurun!
      </p>
      <div className='mudd'>
      <p className='mud12'>Müddəti</p>
      <h3 className='ikiyuzonalati'>216 ayadək</h3>
      <p className='mud23'>Faiz dərəcəsi</p>
      <h3 className='besfaiz'>5%</h3>
      </div>
    <div className='valyutaa1'>
      <p className='valy1'>Valyuta</p>
      <h3 className='aznusd1'>AZN / USD</h3>  </div>
      <div className='icsss2'>
      <img className='icsss122' src='https://img.icons8.com/ios-filled/256/circled-chevron-right.png'/>
      <div className='seyf2' >
      <img className='seyfsekil1' src='https://www.rabitabank.com/resized/resize0x196/center/pages/139/285127988-1648574895519015-426986597126037558-n.png'/>
       
      </div>
      </div>
     </div>
     </div>
     <div className='saxlanc12'>
      <h3 className='saxlanc1'>Saxlanc Seyfləri</h3>
      <p className='saxlanc2'>Rabitəbank qiymətlilərin saxlanması üçün <br/> saxlanc seyflərini sizə sərfəli şərtlərlə təqdim <br/>edir!</p>
      <div className='saxlancSekil1'>
      <img className='saxlancseyf' src='https://www.rabitabank.com/resized/resize0x178/center/pages/140/saxlanc-seyf-1.png'></img>
      <Link className="linksaxlanc" to="/saxlancSeyf">
         Daha ətraflı
        </Link>

     <Routes>
     <Route path="/saxlancSeyf" element={<saxlancSeyf />} />

     </Routes>
     </div>
     </div>
     
     
     <div className='sorgular'>
      <h1 className='sorgu1'>Əmanət üçün sorğu göndər</h1>
       <p className='novu12'>Əmanətin növü</p>
      <div className='inputs'>
        <div className='radio1'>
       <input type="radio"name="nov" id=""></input>
      <label className='radio12'  for="">Universal əmanət </label>
      </div>
      <div className='radio2'>
      <input type="radio" name="nov" id=""></input>
      <label className='radio13'for="">Uşaq yığım əmanəti </label>
      </div>
      <div className='radio3'>
      <input type="radio" name="nov" id=""></input>
     
      <label className='radio14' for="">Saxlanc seyfləri </label>
      </div>
      </div>
      <div className='nomre4'>
      <p className='adiniz'>Adınız </p>
        <p className='u1'>*</p>
        <p className='soyad'>Soyadınız </p>
        <p className='u3'>*</p>
        </div>
        <div className='nomre5'>
        <p className='nomre'>Mobil nömrəniz</p></div>
      <div className='inputss1'>

        <form onSubmit={handleChange} >
       <input  type="text" placeholder='Name' name='name' className='input1'></input>
       <input  type="text" placeholder='Surname' surname='surname'className='input2'></input>
       <button className='submit' type="submit" disabled={inputValue.name||inputValue.surname} >Sifariş et</button>
       </form>
       </div>


       
       <div className='data12'>
   
   <div className='data '> 
 
    <select data className="form-control">
    <option data value="">077</option>
    <option data value="070">070</option>
    <option data value="050">050</option>
    <option data value="051">051</option>
    <option data value="055">055</option>
   
</select> 

<input  data-v-af38e980 type='text'inputmode="tel" name="phone"
placeholder='| 123 45 67' className='form-control phone-input is invalid'></input>
     </div>
     
    </div>
    </div>
  
  <p className='azr'>* Məlumatları Azərbaycan dilində daxil edin.</p>




    <div className='whiteuni1'>
    
'  <div className='whiteuni2'><h2 className='whiteuni'>Universal əmanət</h2>
   <p className='artir1'>Pulunuz artmaqla yanaşı həm də<br/>qazanılan faizlərin götürülməsində geniş <br/>seçim imkanınız olacaq!</p>
   </div>
   <div className='Baner'>
   <img className='banner' src='https://www.rabitabank.com/resized/fit388x502/center/pages/19/deposits-banner2.jpg'></img>
   </div>
    </div>
 
       
     </div>
   
  )
 }

export default Əmanətlər