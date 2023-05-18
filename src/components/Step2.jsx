//REACT
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useData } from '../DataContext';

//COMPONENTS
import MainContainer from './MainContainer';
import { Checkbox, Typography } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import Form from './Form';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import parsePhoneNumberFromString from 'libphonenumber-js';

const schema = object({
  email: string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);

  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

const Step2 = () => {
  const navigate = useNavigate();

  const { data, setValues } = useData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
    navigate('/step3');
  };

  const hasPhone = watch('hasPhone');

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          type="email"
          label="Email"
          name="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register('email')}
        />

        <FormControlLabel
          label="Do you have a phone?"
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              name="hasPhone"
              {...register('hasPhone')}
              color="primary"
            />
          }
        />

        {hasPhone && (
          <Input
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            {...register('phoneNumber', {
              onChange: (event) => {
                event.target.value = normalizePhoneNumber(event.target.value);
              },
            })}
          />
        )}

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
