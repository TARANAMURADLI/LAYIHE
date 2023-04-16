import React from "react";
import kreditSifariss from "../../kreditsifarisii/kreditSifariss";
import onlineKredit from "../../kreditsifarisii/onlineKredit";
import { Link, Route, Routes } from "react-router-dom";
import Page404 from "../../Header/Page404";
const Kreditlər = () => {
  return (
    <div className="container1">
      <div className="onlaynnovbe">
        <div className="kredittotal">
          <h1 className="kreditler1">Kreditlər</h1>
          <p className="kreditsifarisi">
            Kredit sifarisi üzrə Rabitəbankdan üstünlüklərlə dolu nağd pul
            krediti təklif olunur.Sərfəli kredit müasir bankçılığın əsaslarından
            biridir. Rahat şəkildə <br /> Rabitəbank vasitəsilə online kredit
            sifarisi edə bilərsiniz. Eyni zamanda, kampaniya çərçivəsində
            endirim, komissiyasız kredit fürsətlərimizdən faydalanmağa <br />
            tələsin! Kredit kalkulyatoru vasitəsilə kredit ödənişinizi öncədən
            hesablaya bilər və online kredit sifarisi verə bilərsiniz.
          </p>
        </div>
      </div>
      <div className="npdtotal">
        <div className="npd">
          <h2 className="nagdp">Nağd pul krediti</h2>
          <p className="otuzmin">
            30,000 AZN-dək nağd pul kreditini 12%-dən başlayaraq əldə etmək
            <br /> mümkündür! Kredit sifarisi vasitəsilə tecili kredit əldə
            bilərsiniz. Kredit <br />
            kalkulyatoru vasitəsilə öncədən kredit məlumatlarını əldə etməyiniz
            <br />
            mümkündür.
          </p>
          <div className="mudfaiz">
            <p className="muddet1">Müddət</p>
            <p className="derecesi">Faiz dərəcəsi</p>
            <p className="valyuta1">Valyuta</p>
          </div>
          <div className="AZNN">
            <p className="ayyyy">48 ay</p>
            <p className="onikifaiz">12%</p>
            <p className="valyutaazn">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset2">Sifariş et</button>
            <p className="dahaetrafli">Daha ətraflı</p>
            <img
              className="oxsvg"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>
            <div className="iconss">
              <img
                className="ics"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>

              <img
                className="sekilqepik"
                src="https://www.rabitabank.com/resized/resize382/center/pages/248/sayt-icon-2.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdpp">Bahar Kampaniyası</h2>
          <p className="baharr">
            Baharın gətirdiyi yeniliklərə bizim də bir əlavəmiz var!
          </p>

          <div className="mudfaiz">
            <p className="muddet1">Müddət</p>
            <p className="derecesi11 ">Faiz dərəcəsi</p>
            <p className="valyuta12">Valyuta</p>
          </div>
          <div className="AZNN">
            <p className="ayyyy">48 ayadək</p>
            <p className="onikifaizzz">12%-dən</p>
            <p className="valyutaaznn">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset21">Sifariş et</button>
            <p className="dahaetrafli1">Daha ətraflı</p>
            <img
              className="oxsvg1"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>
            <div className="iconss1">
              <img
                className="ics1"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>

              <img
                className="sekilqepikk"
                src="https://www.rabitabank.com/resized/resize382/center/pages/134/12.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp">Lombard krediti üzrə Kampaniya</h2>

          <div className="mudfaiz">
            <p className="muddet1">Müddət</p>
            <p className="derecesiiiiii">Komissiya</p>
            <p className="valyuta1">Valyuta</p>
          </div>
          <div className="AZNN">
            <p className="ayyyy1">3-36 ay</p>
            <p className="onikifaizzz2">1%</p>
            <p className="valyutaaznn1">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset22">Sifariş et</button>
            <p className="dahaetrafli2">Daha ətraflı</p>
            <img
              className="oxsvg2"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss2">
              <img
                className="ics2"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk"
                src="https://www.rabitabank.com/resized/resize382/center/pages/241/lombard-kredit.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp1">İpoteka krediti </h2>
          <p className="ipoteka">
            Rabitəbank, ev arzusunda olan hər bir kəs üçün İpoteka və Kredit{" "}
            <br />
            Zəmanət fondunun xətti ilə ayrılan ipoteka kreditlərini daha münasib{" "}
            <br />
            şərtlərlə təklif edir!
          </p>
          <div className="mudfaiz1">
            <p className="muddet2">Müddət</p>
            <p className="derecesiiiiii1">Faiz dərəcəsi</p>
            <p className="valyuta12">Valyuta</p>
          </div>
          <div className="AZNNN">
            <p className="ayyyy1">300 ay</p>
            <p className="onikifaizzz3">8%</p>
            <p className="valyutaaznn2">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset23">Sifariş et</button>
            <p className="dahaetrafli3">Daha ətraflı</p>
            <img
              className="oxsvg3"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss3">
              <img
                className="ics3"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk4"
                src="https://www.rabitabank.com/resized/resize382/center/pages/136/ipoteks.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp12">Lombard krediti </h2>
          <p className="ipoteka1">
            Zinət əşyalarını girov qoymaqla 36 ayadək nağd pul krediti əldə edə
            <br /> bilərsiniz. Şərtlərlə tanış olaraq elə indi krediti sifariş
            edin!
          </p>
          <div className="mudfaiz2">
            <p className="muddet3">Müddət</p>
            <p className="derecesi1">Komissiya</p>
          </div>
          <div className="AZNNN1">
            <p className="ayyyy2">36 ay</p>
            <p className="onikifaizzz4">1%</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset24">Sifariş et</button>
            <p className="dahaetrafli4">Daha ətraflı</p>
            <img
              className="oxsvg4"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss4">
              <img
                className="ics4"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk5"
                src="https://www.rabitabank.com/resized/resize382/center/pages/247/lombard-kampaniya.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp13">"MIDA" xətti ilə güzəştli ipoteka </h2>
          <p className="ipoteka2">
            Azərbaycan Respublikasının İpoteka və Kredit Zəmanət fondunun <br />
            (ARİKZF) vəsaiti hesabına MİDA tərəfindən inşa edilən mənzillərin{" "}
            <br /> alınması üçün verilən güzəştli ipoteka krediti təklifi.
          </p>
          <div className="mudfaiz3">
            <p className="muddet4">Müddət</p>
            <p className="valyuta13">Valyuta</p>
            <p className="derecesii2">Komissiya</p>
          </div>
          <div className="AZNNN2">
            <p className="ayyyy3">360 ay</p>
            <p className="valyutaaznn3">AZN</p>
            <p className="onikifaizzz5">0,1%</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset25">Sifariş et</button>
            <p className="dahaetrafli5">Daha ətraflı</p>
            <img
              className="oxsvg5"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss5">
              <img
                className="ics5"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk6"
                src="https://www.rabitabank.com/resized/resize382/center/pages/242/mida-ipoteka.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp14">Avtomobil krediti</h2>
          <p className="ipoteka3">
            Əgər almaq istədiyiniz avtomobilin istehsal tarixindən 1 (bir) il
            <br /> keçmişdirsə, o zaman aşağıdakı şərtlərlə tanış olaraq
            avtomobil <br /> krediti sifariş edə bilərsiniz.
          </p>
          <div className="mudfaiz4">
            <p className="muddet5">Müddət</p>
            <p className="derecesii3">Komissiya</p>
            <p className="valyuta14">Valyuta</p>
          </div>
          <div className="AZNNN3">
            <p className="ayyyy4">36 ay</p>
            <p className="onikifaizzz6">1%</p>
            <p className="valyutaaznn4">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset26">Sifariş et</button>
            <p className="dahaetrafli6">Daha ətraflı</p>
            <img
              className="oxsvg6"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss6">
              <img
                className="ics6"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk7"
                src="https://www.rabitabank.com/resized/resize382/center/pages/137/avto.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="npd">
          <h2 className="nagdppp15">Təminatlı nağd pul krediti</h2>
          <p className="ipoteka4">
            Daşınmaz əmlak girovu ilə nağd pul kreditini əldə etmək artıq çox{" "}
            <br />
            rahatdır!
          </p>
          <div className="mudfaiz5">
            <p className="muddet6">Müddət</p>
            <p className="derecesii4">Komissiya</p>
            <p className="valyuta15">Valyuta</p>
          </div>
          <div className="AZNNN4">
            <p className="ayyyy5">48 ay</p>
            <p className="onikifaizzz7">18 %</p>
            <p className="valyutaaznn5">AZN</p>
          </div>
          <div className="sifariset1">
            <button className="sifariset27">Sifariş et</button>
            <p className="dahaetrafli7">Daha ətraflı</p>
            <img
              className="oxsvg7"
              src="https://img.freepik.com/free-icon/thin-right-straight-arrow_318-76382.jpg?size=626&ext=jpg&ga=GA1.2.636148340.1678133606&semt=sph"
            ></img>

            <div className="iconss7">
              <img
                className="ics7"
                src="https://img.icons8.com/ios-filled/256/circled-chevron-right.png"
              ></img>
              <img
                className="sekilqepikkk8"
                src="https://www.rabitabank.com/resized/resize382/center/pages/158/teminatli-nagd-kredit.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="onkredit">
          <h3 className="onlinekredits">Online Kredit Sifarişi</h3>
          <p className="kreditfirst">
            Kredit sifarisi üçün növbə gözləyib, vaxt itirməyə nə gərək var,
            Rabitəbankın online kredit xidməti olan yerdə, 30 000 AZN-dək kredit
            sifarişi etmək üçün artıq <br />
            bankda növbə gözləmək dövrünü keçdik. Çünki Rabita Mobile-ın onlayn
            kredit xidməti ilə krediti asanlıqla əldə edə, 48 ay müddətində
            ödəyə bilərsiniz.
            <br />
            Bankdan tecili kredit almaq, serfeli kredit şərtləri əldə etmək,
            arzularınızı həyata keçirmək - bir klik qədər asandır! Artıq sadəcə
            şəxsiyyət vəsiqəsinin FİN
            <br /> kodunu daxil etməklə nagd pul krediti almaq mümkündür. Onlayn
            müraciət edərək ehtiyaclarınıza uyğun krediti, serfeli kredit
            şərtləri ilə vaxt itirmədən əldə
            <br />
            edin. Bütün şəxsi ehtiyaclarınız üçün Rabitəbank yanınızda!
            Kreditlər, sürətli pul ehtiyacınızı qarşılamaq üçün ən optimal
            seçimdir hər zaman bizdə!
          </p>
          <h3 className="onlinekredits1">Kredit Kalkulyatoru </h3>
          <p className="kreditsecond">
            Üstəlik, kredit sifarisi edərkən öncədən nə qədər ödəniş edəcəyini
            kredit kalkulyatoru vasitəsilə öyrənə bilərsiniz. Rabitəbankın
            təklif etdiyi müxtəlif kreditlər –
            <br />
            avtomobil krediti, lombard krediti, nagd pul krediti sizə uyğun
            seçimi etməyə imkan verir.
          </p>
        </div>
      </div>

      <div className="Llinks">
        <Link className="linnk" to="kreditSifariss/">
          Kredit Sifarişi{" "}
        </Link>

        <Link className="Linnnk" to="onlineKredit/">
          Online Kredit
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<kreditSifariss />} />
        <Route path="/onlineKredit" element={<onlineKredit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default Kreditlər;
