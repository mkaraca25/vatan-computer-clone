import React from 'react';
import card from '../assets/img/card.png';
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer-container-top'>
        <div className='footer-corporate'>
          <span>KURUMSAL</span>
          <ul>
            <li>Hakkımızda</li>
            <li>Müşteri Hizmetleri</li>
            <li>Sipariş Aşamaları</li>
            <li>Sıkca Sorulan Sorular</li>
            <li>İnsan Kaynakları</li>
            <li>Gizlilik Politikamız</li>
          </ul>
        </div>
        <ul className='footer-corporate-2'>
          <li>İletişim</li>
          <li>Vatan Card</li>
          <li>Servis Takip Formu</li>
          <li>Mağazalar</li>
          <li>İşlem Rehberi</li>
        </ul>
        <div className='footer-categories'>
          <span>KATEGORİLER</span>
          <div className='footerUl'>
          <ul >
            <li>Bilgisayar</li>
            <li>Cep Telefonu</li>
            <li>Tablet PC</li>
            <li>Akıllı Saat</li>
            <li>Vestel TV</li>
            <li>Oyun Bilgisayarı</li>
          </ul>
          <ul>
            <li >Küçük Ev Aletleri</li>
            <li>Kişisel Bakım Ürünleri</li>
            <li>Elektrikli Süpürge</li>
            <li>Ütü</li>
            <li>Masaüstü Bilgisayar</li>
            <li>Sabit Diskler</li>
          </ul>
          </div>
        </div>
        <div className='footer-specialProduct'>
          <span>ÖZEL ÜRÜNLER</span>
          <ul>
            <li>iPhone 7</li>
            <li>iPhone 6</li>
            <li>iPhone 5</li>
            <li>iPhone SE</li>
            <li>General Mobile 5 Plus</li>
            <li>Galaxy S7 </li>
            <li>Note 5</li>
            <li>Galaxy S6 </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='footer-container-bottom'>
        <div className='footer-container-copyright'>
          <span className='footerh2'>Türkiye'nin Teknoloji Hiperstoru</span>
          <br />
          <span>Copyright 2016 Vatan Bilgisayar San. ve Tic. A.Ş.</span>
        </div>
        <div className='footer-container-card'>
          <img src={card} alt='card'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
