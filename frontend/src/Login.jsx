import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,


} from 'mdb-react-ui-kit';
import './Login.css';

const Login = () => {

  
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';
  return (
    <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow >
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center '>
          <img src='./Foto/logfoto.jpeg' className="my-5 display-3 fw-bold ls-tight px-3 customimg" alt=''/>
        </MDBCol>

        <MDBCol md='6'>
          <h1 className="text-center my-5 custmh1">{t('login1')}</h1> 
          <MDBCard className='my-5 mx-auto' style={{ maxWidth: '30rem', borderRadius: '30px' }}>

            <MDBCardBody className='p-5'>
              
            <input
                className='form-control mb-4 input1'
                placeholder={t('Email')}
                type='email'
                id='form3'
              />
              <input
                className='form-control mb-4 input1'
                placeholder={t('password')}
                type='password'
                id='form4'
              />

              <button className='w-100 mb-4 signbtn' size='md'>{t('login1')}</button>

              <div className="text-center">
                <p className='custmh1'>{t('New Account')}</p>
                <p className='custmh1'>{t('forgetpassword')}</p>
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login; 