//REACT
import React from 'react';

//COMPONENTS
import { Container } from '@mui/material';

//CSS
import styles from './MainContainer.module.scss';

const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      container="main"
      maxWidth="xs"
      className={styles.mainContainer}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
