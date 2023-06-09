//REACT
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

//COMPONENTS
import MainContainer from './MainContainer';
import Form from './Form';
import { Typography } from '@mui/material';
import FileInput from './FileInput';
import PrimaryButton from './PrimaryButton';

const Step3 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: { files: data.files },
  });

  const onSubmit = (data) => {
    navigate('/result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
