import React from 'react'

const ValyutaKursu = () => {
    console.log("Component is loaded");
    return (
    <div>
         <div className="butt">
        <div className="valyutabutton">
          <h1 className="valyuta111">Valyuta Kursu</h1>
          <p className="nagdss">Nagdsız</p>
          <button className="if">
            <p className="noqte">.</p>
          </button>

          <p className="nagdd">Nağd</p>
        </div>
        <div className="mubadile">
          <ul>
            <li className="val">Valyuta</li>
            <li className="val1">GBP</li>
            <li className="val1">RUB</li>
            <li className="val1">EUR</li>
            <li className="val1">USD</li>
          </ul>
          <ul className="coll">
            <li className="vall">Alış</li>
            <li className="val2">2.023</li>
            <li className="val2">0.0215</li>
            <li className="val2">1.792</li>
            <li className="val2">1.695</li>
          </ul>
          <ul>
            <li className="valll">Satış</li>
            <li className="val3">2.096</li>
            <li className="val3">0.023</li>
            <li className="val3">1.828</li>
            <li className="val3">1.7025</li>
          </ul>
          <ul>
            <li className="vallll">Mərkəzi Bank</li>
            <li className="val4">2.0652</li>
            <li className="val4">0.0223</li>
            <li className="val4">1.8104</li>
            <li className="val4">1.7</li>
          </ul>
        </div>
        <div className="K">
          <p className="Kurstarixi">Kurs 17.03.23 tarixinə qədər aktivdir.</p>
          <span className="Conve">Konvertasiya et</span>
        </div>
      </div> 
      
      <div className="cedvel">
        <div className="kreditka">
          <div className="KR1">
            <h1 className="KR">Kredit kalkulyatoru</h1>
          </div>
          <p className="kreditmebleg">Kredit məbləği</p>
          <div className="DD">
            <button className="kalkulyator">30000 AZN</button>
            <p className="d"> . </p>
          </div>
          <div className="sozbirlesmeleri">
            <p>Kredit müddəti</p>
            <p>Faiz dərəcəsi</p>
          </div>
          <div className="buttonlar">
            <button className="ay">48 Ay</button>
            <p className="dots">.</p>
            <button className="ondord">14 %</button>
            <p className="dott">.</p>
          </div>
          <div className="emekk">
            <p className="ayliq">Aylıq ödəniş:</p>
            <p className="od">819.79 AZN</p>
          </div>
          <div className="SIFARIS">
            <button className="sifaris">Sifariş et</button>
          </div>
        </div>
      </div>
 

    </div>
  )
}

export default ValyutaKursu