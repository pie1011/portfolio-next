import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import { styled } from '@mui/material/styles';
import resume from '../public/resume.png';

  
export default function Main() {
return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px',
        border: '1px solid red',
    }}>
        {/* <img className='' elevation={3} style={{ maxWidth: '50vw' }} src='resume.png' alt="resume"/> */}
        <Box sx={{
            border: '1px solid red',
        }} >
            <Typography>Hi</Typography>
        </Box>
        <Box >
            <Typography>Hi</Typography>
        </Box>
    </Container>
);
}
