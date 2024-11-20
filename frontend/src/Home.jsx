
import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import {Col,Row} from 'react-bootstrap';
import './Home.css'
const Home = () => {



  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';
  return (
    <>



<section className='home'dir={isArabic ? 'rtl' : 'ltr'}>
      <Row>
       
        <Col md={6} sm={12}>
          <h2>{t('Noor')}</h2>
          <br />
          <p className="custom-paragraph">
            <span className="bold-span">{t('Academy')}</span>
            {t('Learn')}
          </p>
        </Col>
        <Col md={6} sm={12}>
        <img src='./Foto/Logo1.jpeg' alt='#' className='home-logo' />
        </Col>
      </Row>
      <div className='about' dir={isArabic ? 'rtl' : 'ltr'}>
      <h1 className="about-header">{t('whynor')}</h1>
      <div className="about-cards">
        <div className='card'>
          <h4>{t('lehrerin')}</h4>
        </div>
        <div className='card'>
          <h4>{t('bestimmtezeit')}</h4>
        </div>
        <div className='card'>
          <h4>{t('zeit')}</h4>
        </div>
        <div className='card'>
          <h4>{t('Altajoid')}</h4>
        </div>
      </div>
    </div> 
    </section>
  


  </>
  );
}

export default Home;

