import React from 'react';
import {Box, Heading} from 'theme-ui';

const AuthBox = (props) => {
  const {children, sx, title} = props;
  return (
    <Box sx={{ border: '1px solid', borderColor: 'greyBorder', p: '5', ...sx}}>
      <Heading sx={{mb: '4', textAlign: 'center'}}>{title}</Heading>
      {children}
    </Box>
  );
};

export { AuthBox };
