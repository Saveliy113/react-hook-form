//REACT
import React, { useState } from 'react';
import { useData } from '../DataContext';

//COMPONENTS
import { Link } from 'react-router-dom';
import MainContainer from './MainContainer';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

//ICONS
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

//CSS
import styles from './Result.module.scss';
import PrimaryButton from './PrimaryButton';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

const Result = () => {
  const { data } = useData();
  const [success, setSuccess] = useState(false);

  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');

  const { files } = data;

  const onSubmit = () => {
    console.log(111);
    // const formData = new FormData();

    // if (data.files) {
    //   data.files.forEach((file) => {
    //     formData.append('files', file, file.name);
    //   });
    // }

    // entries.forEach((entry) => {
    //   formData.append(entry[0], entry[1]);
    // });

    if (true) {
      Swal.fire('Great job!', "You've passed a challenge", 'success');
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <MainContainer>
      <Typography className={styles.resultHeader} component="h2" variant="h5">
        📋 Form values
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">
                  {entry[1].toString() === 'true'
                    ? '✔'
                    : entry[1].toString() === 'false'
                    ? '❌'
                    : entry[1].toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            📦 Files
          </Typography>
          <List>
            {files.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Button fullWidth variant="contained" onClick={onSubmit}>
        Submit
      </Button>
      <Link to="/">Start over</Link>
    </MainContainer>
  );
};

export default Result;
