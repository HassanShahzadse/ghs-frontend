import React, { useState } from 'react';
import { Form, Button, Col, Row, Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import '../StudentForm.css';

// Validation schema using Yup
const schema = yup.object().shape({
  admissionCourse: yup.string().required('Admission Course is required'),
  name: yup.string().required('Name is required').matches(/^[A-Z][a-zA-Z ]*$/, 'Name must start with a capital letter'),
  cnic: yup.string().length(13, 'CNIC must be exactly 13 digits').matches(/^\d{13}$/, 'CNIC must be numeric').required('CNIC is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  mobile: yup.string().length(11, 'Mobile number must be 11 digits').matches(/^\d{11}$/, 'Mobile number must be numeric').required('Mobile number is required'),
  gender: yup.string().required('Gender is required'),
  dob: yup.date().required('Date of birth is required'),
  howDidYouLearn: yup.string().required('How did you learn about us? is required'),
  fatherName: yup.string().required('Father\'s name is required').matches(/^[A-Z][a-zA-Z ]*$/, 'Father\'s name must start with a capital letter'),
  fatherCnic: yup.string().length(13, 'Father\'s CNIC must be exactly 13 digits').matches(/^\d{13}$/, 'Father\'s CNIC must be numeric').required('Father\'s CNIC is required'),
  fatherMobile: yup.string().length(11, 'Father\'s mobile number must be 11 digits').matches(/^\d{11}$/, 'Father\'s mobile number must be numeric').required('Father\'s mobile number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').matches(/[A-Z]/, 'Password must contain at least one uppercase letter').matches(/[a-z]/, 'Password must contain at least one lowercase letter').matches(/\d/, 'Password must contain at least one number').matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').required('Password is required')
});

const AdmissionForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });
  
//   const [showPassword, setShowPassword] = useState(false);
  // const [mobileValue, setMobileValue] = useState('');
  // const [fatherMobileValue, setFatherMobileValue] = useState('');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (<>
        <div className='heading'>Registration Form</div>
    <div className="form-container" style={{color: 'black'}}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3>Student Details Section</h3>
        <hr />
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label className='formLable'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name")}
                onChange={(e) => setValue("name", e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              />
              <div>{errors.name && <small className="text-danger">{errors.name.message}</small>}</div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="cnic">
              <Form.Label className='formLable'>CNIC</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CNIC"
                {...register("cnic")}
              />
              <div>{errors.cnic && <small className="text-danger">{errors.cnic.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row className='row'>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label className='formLable'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
              <div>{errors.email && <small className="text-danger">{errors.email.message}</small>}</div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="mobile">
              <Form.Label className='formLable'>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                {...register("mobile")}
              />
              {/* <PhoneInput
                international
                defaultCountry="PK"
                value={mobileValue}
                onChange={(value) => {
                    setMobileValue('mobile',value);
                  }}     
                 {...register("mobile")}
              /> */}
              <div>{errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
         <Col md={6}>
            <Form.Group controlId="admissionCourse">
              <Form.Label className='formLable'>Admission Course</Form.Label>
              <Form.Control as="select" {...register("admissionCourse")}>
                <option value="">Select Course</option>
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </Form.Control>
              <div>{errors.admissionCourse && <small className="text-danger">{errors.admissionCourse.message}</small>}</div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Label className='formLable'>Gender</Form.Label>
              <Form.Control as="select" {...register("gender")}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
              <div>{errors.gender && <small className="text-danger">{errors.gender.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="howDidYouLearn">
              <Form.Label className='formLable'>How did you learn about us?</Form.Label>
              <Form.Control as="select" {...register("howDidYouLearn")}>
                <option value="">Select</option>
                <option value="socialMedia">Social Media</option>
                <option value="internet">Internet</option>
                <option value="newspaper">Newspaper</option>
                <option value="friend">Friend</option>
                <option value="colleague">Colleague</option>
                <option value="other">Other</option>
              </Form.Control>
              <div>{errors.howDidYouLearn && <small className="text-danger">{errors.howDidYouLearn.message}</small>}</div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dob">
              <Form.Label className='formLable'>Date of Birth</Form.Label>
              <Form.Control type="date" {...register("dob")} />
              <div> {errors.dob && <small className="text-danger">{errors.dob.message}</small>} </div>
            </Form.Group>
          </Col>

        </Row>

        <h3>Father/Guardian Detail Section</h3>
        <hr />
        <Row>
          <Col md={6}>
            <Form.Group controlId="fatherName">
              <Form.Label className='formLable'>Father Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Father's name"
                {...register("fatherName")}
                onChange={(e) => setValue("fatherName", e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              />
            <div>  {errors.fatherName && <small className="text-danger">{errors.fatherName.message}</small>}</div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="fatherCnic">
              <Form.Label className='formLable'>Father CNIC</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Father's CNIC"
                {...register("fatherCnic")}
              />
              <div>{errors.fatherCnic && <small className="text-danger">{errors.fatherCnic.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="fatherMobile">
              <Form.Label className='formLable'>Father Phone</Form.Label>
              {/* <Form.Label className='formLable'>Phone</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter Number"
                {...register("fatherMobile")}
              />
              {/* <PhoneInput
                international
                defaultCountry="PK"
                value={fatherMobileValue}
                onChange={setFatherMobileValue}
                {...register("fatherMobile")}
              /> */}
              <div>{errors.fatherMobile && <small className="text-danger">{errors.fatherMobile.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>

        <h3>Address Details Section</h3>
        <hr />
        <Row>
          <Col md={6}>
            <Form.Group controlId="address">
              <Form.Label className='formLabelAdress'>Address</Form.Label>
              <Form.Control as="textarea" cols={42} rows={3} {...register("address")} className='formTextareaAdress' />
              <div> {errors.address && <small className="text-danger">{errors.address.message}</small>}</div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label className='formLable'>City</Form.Label>
              <Form.Control as="select" {...register("city")}>
                <option value="">Select City</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </Form.Control>
              <div> {errors.city && <small className="text-danger">{errors.city.message}</small>}</div>
            </Form.Group>
          </Col>
        </Row>
                <div className="buttondiv">
        <Button variant="primary" type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </Button>
        </div>
      </Form>
    </div>
    </>
  );
};

export default AdmissionForm;
