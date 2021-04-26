import React from 'react';
import Heading from '../../Atoms/Heading/Heading';
import { Formik, Field } from 'formik';
import {
  Container,
  Text,
  InputsContainer,
  InputsMiddle,
  ValidationText,
} from './FormStyled';
import * as yup from 'yup';
import { Input, Textarea } from '../../Atoms/FormInput';
import Button from '../../Atoms/Button/Button';

const Form = () => {
  const phoneRegExp = /^\+48\d{9}$/;
  const validationSchema = yup.object({
    nameAndSurname: yup.string().required('Required'),
    email: yup
      .string()
      .required()
      .email('Invalid email adress')
      .required('Required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid (+48321456789)'),
  });
  return (
    <Container data-aos="fade-up">
      <Heading>Contact Us</Heading>
      <Text>
        <div>Did not find everything you were looking for on the website?</div>
        <div>
          {' '}
          Have a question about another issue? Write us a message or call us.
        </div>
      </Text>

      <Formik
        initialValues={{ nameAndSurname: '', email: '', phone: '+48' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 600);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, handleSubmit, touched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <InputsContainer>
              <Field
                placeholder="name and surname"
                name="nameAndSurname"
                as={Input}
                width="100%"
              />
              <ValidationText>
                {errors.nameAndSurname &&
                  touched.nameAndSurname &&
                  errors.nameAndSurname}
              </ValidationText>

              <InputsMiddle>
                <Field
                  placeholder="email"
                  name="email"
                  as={Input}
                  width="55%"
                />

                <Field
                  width="40%"
                  placeholder="Phone number"
                  type="tel"
                  name="phone"
                  as={Input}
                />
              </InputsMiddle>
              <ValidationText>
                <div>{errors.email && touched.email && errors.email}</div>
              </ValidationText>
              <ValidationText>
                {errors.phone && touched.phone && errors.phone}
              </ValidationText>
              <Field
                tag="textarea"
                type="textarea"
                placeholder="Message"
                width="100%"
                name="area"
                as={Textarea}
              />
              <Button type="submit">
                {isSubmitting ? 'Loading...' : 'Send'}
              </Button>
            </InputsContainer>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Form;
