import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

interface CallToActionProps {
  heading1: string;
  heading2: string;
  quote: string;
  name: string;
}

const CallToAction = ({
  heading1,
  heading2,
  quote,
  name,
}: CallToActionProps) => {
  return (
    <Box sx={{ background: 'white', py: 2, my: 8 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ flexBasis: 0, flexGrow: 1, my: 'auto' }}>
            <Typography
              component="h2"
              sx={{
                fontSize: '3rem',
                fontWeight: 900,
                lineHeight: 1.33,
                color: '#2d3748',
              }}
            >
              {heading1}
            </Typography>
            <Typography
              component="h3"
              sx={{
                fontSize: '3rem',
                fontWeight: 900,
                lineHeight: 1.33,
                color: '#718096',
              }}
            >
              {heading2}
            </Typography>
          </Box>
          <Box
            sx={{
              flexBasis: 0,
              flexGrow: 1,
              my: 8,
              pl: 8,
              py: 1,
              borderLeft: '5px',
              borderLeftStyle: 'solid',
              borderLeftColor: '#edf2f7',
            }}
          >
            <Typography
              paragraph
              sx={{
                fontSize: '1.25rem',
                fontWeight: 400,
                lineHeight: 1.33,
                color: '#718096',
                mb: 2,
              }}
            >
              {quote}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                lineHeight: 1.33,
                color: '#718096',
                mb: 2,
              }}
            >
              {name}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
