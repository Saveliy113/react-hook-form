//REACT
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//COMPONENTS
import MainContainer from './MainContainer';
import { Typography } from '@mui/material';
import Form from './Form';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = object({
  firstName: string()
    .matches(/^([^0-9]*)$/, 'First Name should not contain numbers')
    .required('First name is a required field'),
  lastName: string()
    .matches(/^([^0-9]*)$/, 'Last Name should not contain numbers')
    .required('Last name is a required field'),
});

const Step1 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => navigate('/step2');

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          helperText={errors?.firstName?.message}
          error={!!errors.firstName}
          {...register('firstName')}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          helperText={errors?.lastName?.message}
          error={!!errors.lastName}
          {...register('lastName')}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
