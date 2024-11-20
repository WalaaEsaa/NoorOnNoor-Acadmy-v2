import React from 'react';
import './register.css';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import './Leiters.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  
} from 'mdb-react-ui-kit';

const Register = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  return (
    <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow className= "d-flex justify-content-center align-items-center">
        <MDBCol md='6'>
          <h2 className="text-center my-5 custmh1">{t('New Account1')}</h2>
          <MDBCard className='my-5 mx-auto' style={{ maxWidth: '50rem' }}>
            <MDBCardBody className='p-5'>
           
              <MDBRow className='mb-4'>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('Name')} type='text' />
                </MDBCol>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('Email')} type='text' />
                </MDBCol>
              </MDBRow>
              <MDBRow className='mb-4'>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('Phone1')} type='text' />
                </MDBCol>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('Phone')} type='text' />
                </MDBCol>
              </MDBRow>
              <MDBRow className='mb-4'>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('password')} type='text' />
                </MDBCol>
                <MDBCol>
                  <input className='mb-4 custom-input' placeholder={t('password2')} type='text' />
                </MDBCol>
              </MDBRow>

              <MDBRow className='mb-4 justify-content-center'>
                <MDBCol md='3'>
                  <select className='form-select custom-select custom-input' aria-label={t('select1')}>
                    <option value="1">{t('sections')}</option>
                    <option value="2">{t('Option 2')}</option>
                    <option value="3">{t('Option 3')}</option>
                  </select>
                </MDBCol>
                <MDBCol md='3'>
                  <select className='form-select custom-select  custom-input' aria-label={t('select2')}>
                    <option value="1">{t('Day')}</option>
                    <option value="2">{t('Option 2')}</option>
                    <option value="3">{t('Option 3')}</option>
                  </select>
                </MDBCol>
                <MDBCol md='3'>
                  <select className='form-select custom-select custom-input' aria-label={t('select3')}>
                    <option value="1">{t('Time')}</option>
                    <option value="2">{t('Option 2')}</option>
                    <option value="3">{t('Option 3')}</option>
                  </select>
                </MDBCol>
              </MDBRow>

               <MDBRow className='justify-content-center'>
                <MDBCol md='6'>
                  <button className='w-100 mb-4 signbtn' size='md'>{t('New Account')}</button>
                </MDBCol>
              </MDBRow>

              <div className="text-center">
                <p className='custmh1'>{t('Have Account')}</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
