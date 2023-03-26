import React from 'react'

const Mobile = () => {
  return (
    <div>
<div className="rabitamobile">
        <h1 className="mob">Rabita Mobile</h1>
        <p className="xidmet">
          Hər yerdə maliyyə xidmətlərimizdən
          <br /> <br />
          faydalanmaq üçün Rabita Mobile istifadə
          <br />
          <br />
          edin!
          <br />
        </p>
      </div>
      <div className="maliyye">
        <img
          className="mobilsekil"
          src="https://www.rabitabank.com/images/qr_mobile.jpg?v=2"
        />
        <p className="kamerasi">
          Telefonunuzun kamerası ilə <br />
          <br />
          QR codu scan edin
        </p>
      </div>
      <div className="storage">
        <img src="https://www.rabitabank.com/storage/online.png?v=2" />
      </div>


    </div>
  )
}

export default Mobile