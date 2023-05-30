import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Copyright from './Copyright';

export default function StickyFooter() {
    return (
        <>
            {/* <Container component="main" sx={{ mt: 6, mb: 4 }} maxWidth="xl">
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container> */}
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </>
    );
}