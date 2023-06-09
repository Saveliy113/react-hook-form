import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

export default Input;
