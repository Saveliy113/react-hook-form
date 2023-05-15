//REACT
import React from 'react';

//COMPONENTS
import { Typography } from '@mui/material';

//CSS
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Typography className={styles.header} component="h1" variant="h5">
      The Ultimate Form Challenge
    </Typography>
  );
};

export default Header;
