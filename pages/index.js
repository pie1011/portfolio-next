import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Navigation from '../src/Navigation';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import StickyFooter from '../src/StickyFooter';
import Main from '../src/Main';


export default function Index() {
  return (
    <Container 
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        minHeight: '100vh',
        height: '100vh',
      }}
    >
      <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: '100vh',
        height: '100vh',
        backgroundImage: 'radial-gradient(circle, #28313e, #1e252f, #14191f)',
      }}
    >

      {/* Navigation */}
      <Navigation />

      {/* Main section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flexGrow: 1,
          p: 2,
        }}
      >
        <Main />

      </Box>

      {/* Footer */}
      <StickyFooter />

      </Container>
    </Container>
  );
}
