import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import './Students.css'
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRadio 
  

} from 'mdb-react-ui-kit';
const Childe = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === 'ar';
    return (
        <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
          <MDBRow className= "d-flex justify-content-center align-items-center">
            <MDBCol md='6'>
              <h2 className="text-center my-5 custmh1">{t('New Account3')}</h2>
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
    <input className='mb-4 custom-input' placeholder={t('national number')} type='text' />
    <input className='mb-4 custom-input' placeholder={t('Birth')} type='text' />
  </MDBCol>
  <MDBCol>
    <div className="d-flex align-items-center mb-5 custom-input1">
      <span className="ms-2">{t('Type')}:</span>
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label={t('Female')} inline />
      <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label={t('Male')} inline />
    </div>

    <div className="d-flex align-items-center mb-5 custom-input1">
      <span className="ms-2">{t('Education')} :</span>
      <MDBRadio name='inlineRadio' id='inlineRadio4' value='option4' label={t('Azhar')} inline />
      <MDBRadio name='inlineRadio' id='inlineRadio5' value='option5' label={t('Normal')} inline />
    </div>
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
                      <input className='mb-4 custom-input' placeholder={t('Gruppe')} type='text' />
                    </MDBCol>
                    <MDBCol>
                      <input className='mb-4 custom-input' placeholder={t('section')} type='text' />
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

export default Childe