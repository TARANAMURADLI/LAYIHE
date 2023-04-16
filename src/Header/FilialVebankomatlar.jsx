import React from 'react'
import {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
const FilialVebankomatlar = () => {
  
  
  return (
   
   
    
   
   <div>
            {/* button1 */}
      <h1 className='filbank'>Filial və bankomatlar</h1>
      <div className='filial1'>
   
      <div className='filial11'>
        <button className='butyeni'>Filiallar</button>
    
    <div className='axtaris2'>
     <img className='lupaaaa1' src='https://img.icons8.com/external-kiranshastry-solid-kiranshastry/1x/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png'/>
      <p className='find1'>Axtarış et</p>
      
      </div>
       
      </div>
     
   <div className='bankomat1'>
          {/*  button2 */}
    
     <button className='butbank'>Bankomatlar</button>
      </div>
      </div>
    
     <img  className='xerite'src='https://cdn-assets.alltrails.com/static-map/production/location/countries/azerbaijan-117-20220408081953000000-763x240-1.png'/>
    
    <div className='axtaris1'>
    
      <img className='lupaaaa' src='https://img.icons8.com/external-kiranshastry-solid-kiranshastry/1x/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png'/>
      <p className='find'>Axtarış et</p>
      
      </div> 
      <div className='basofis1'>
     <p className='basofis'>  ATM Baş Ofis</p>
      <div className='cash'>
     <p className='cashin'>Cash-in</p></div>
     <p className='piramida'>Piramida-Plaza</p>
     </div>
     <div className='piramida2'> 
       <p>28 May küç.33</p>
       <p className='may'>24/7</p>
       </div>
     <div className='cassh'>
       <p className='atm1'>ATM Mərkəz filialı</p>
       <p className='cassh1'>Cash-in</p>
       <div className='piramida3'>
        <p className='kuc1'>Bünyad Sərdarov küç 1.</p>
        <p className='may1'>24/7</p>
       </div>
       </div>

     </div>
  )
}

export default FilialVebankomatlar