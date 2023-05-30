import * as React from 'react';
// import { Typography } from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import resume from '../public/resume.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgray',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Main() {
return (
    <Box sx={{
        width: '100%',
        padding: '50px',
    }}>
        <img className='' elevation={3} style={{ maxWidth: '50vw' }} src='resume.png' alt="resume"/>
    </Box>
);
}
