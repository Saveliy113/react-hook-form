import React from 'react';
import styles from './Form.module.scss';

const Form = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props} noValidate>
      {children}
    </form>
  );
};

export default Form;
