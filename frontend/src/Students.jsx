import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './Students.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

const Students = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nationalNumber: '',
    birth: '',
    phone1: '',
    phone2: '',
    group: '',
    section: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.name || !formData.email || !formData.password) {
      alert(t('Please fill in all required fields.'));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert(t('Passwords do not match.'));
      return;
    }

    if (!/^\d+$/.test(formData.nationalNumber)) {
      alert(t('National number must contain only digits.'));
      return;
    }

    console.log('Form Submitted:', formData);
    alert(t('Student account created successfully!'));
  };

  return (
    <MDBContainer fluid className="p-4 custom1" dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol md="6">
          <h2 className="text-center my-5 custmh1">{t('New Account3')}</h2>
          <MDBCard className="my-5 mx-auto" style={{ maxWidth: '50rem' }}>
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Name')}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Email')}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('national number')}
                      type="text"
                      name="nationalNumber"
                      value={formData.nationalNumber}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Birth')}
                      type="date"
                      name="birth"
                      value={formData.birth}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Phone1')}
                      type="text"
                      name="phone1"
                      value={formData.phone1}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Phone')}
                      type="text"
                      name="phone2"
                      value={formData.phone2}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Gruppe')}
                      type="text"
                      name="group"
                      value={formData.group}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('section')}
                      type="text"
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('password')}
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('password2')}
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-center">
                  <MDBCol md="6">
                    <button className="w-100 mb-4 signbtn" type="submit">
                      {t('New Account')}
                    </button>
                  </MDBCol>
                </MDBRow>
              </form>

              <div className="text-center">
                <p className="custmh1">{t('Have Account')}</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Students;
