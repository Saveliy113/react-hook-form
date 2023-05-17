//REACT
import React from 'react';

//COMPONENTS
import { Button } from '@mui/material';

//CSS
import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ children, props }) => {
  return (
    <Button
      className={styles.button}
      type="submit"
      fullWidth
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
