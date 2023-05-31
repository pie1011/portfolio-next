import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Main() {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        minHeight: '100%',
        height: '100%',
     }} >
        <Box sx={{
            backgroundColor: 'transparent',
            border: '1px solid white',
            alignItems: 'center',
            flexGrow: 1,
            p: 2,
        }}>

            <Typography variant="h3" component="h3" gutterBottom sx={{ mt: '20vh', textAlign: 'right', }}>
                Hi, I'm Katie
            </Typography>
        </Box>
        <Box elevation={3} sx={{
            backgroundColor: 'rgba(20, 25, 31, .5)',
            borderRadius: '20px',
            flexGrow: 2,
            p: 2,
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Hi
            </Typography>
        </Box>
    </Container>
  );
}