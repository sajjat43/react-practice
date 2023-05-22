import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dropzone: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    border: `2px dashed ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    outline: 'none',
    transition: 'border .3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      borderStyle: 'solid',
    },
  },
  filePreview: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  progressBar: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  errorText: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

function UploadCSV() {
  const classes = useStyles();
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string>('');

  const handleDrop = (acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile.type !== 'text/csv') {
      setError('Invalid file format. Only CSV files are supported.');
      return;
    }

    setFile(selectedFile);
    setUploadProgress(0);
    setError('');
    uploadFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
    setError('');
  };

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      }
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (uploadProgress === 100) {
          setUploadProgress(0);
        }
      }
    };

    xhr.send(formData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <Paper className={`${classes.dropzone} ${isDragActive ? 'active' : ''}`} {...getRootProps()}>
      <input {...getInputProps()} />
      {file ? (
        <>
          <div className={classes.filePreview}>
            <Typography variant="body1" component="p">
              Selected file: {file.name}
            </Typography>
            <IconButton color="primary" onClick={handleRemoveFile}>
              <CloseIcon />
            </IconButton>
          </div>
          {uploadProgress > 0 && uploadProgress < 100 && (
            <LinearProgress variant="determinate" value={uploadProgress} className={classes.progressBar} />
          )}
        </>
      ) : (
        <>
          <CloudUploadOutlinedIcon fontSize="large" color="primary" />
          <Typography variant="body1" component="p">
            Drag and drop a CSV file here, or click to select a file.
          </Typography>
        </>
      )}
      {error && <Typography className={classes.errorText}>{error}</Typography>}
    </Paper>
  );
}

export default UploadCSV;
