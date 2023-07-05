import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Copyright from './Copyright';

export default function StickyFooter() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: 'rgba(20, 25, 31, .65)',
                    color: 'white',
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </>
    );
}