import React from 'react';
import MainContainer from './MainContainer';
import { Typography } from '@mui/material';
import Form from './Form';
import Input from './Input';

const Step1 = () => {
  const { register, handleSubmit, errors} = useFor
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form>
        <Input />
      </Form>
    </MainContainer>
  );
};

export default Step1;
