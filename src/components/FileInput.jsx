//REACT
import React from 'react';

//COMPONENTS
import { Controller } from 'react-hook-form';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import Dropzone from 'react-dropzone';

//ICONS
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileIcon from '@mui/icons-material/InsertDriveFile';

//CSS
import styles from './FileInput.module.scss';

const FileInput = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.dropzone}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUploadIcon className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files/</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FileIcon />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;
