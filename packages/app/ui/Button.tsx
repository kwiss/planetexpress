import React from 'react';
import { Button } from 'theme-ui';

const CyButton = (props) => {
  const { children, sx, type } = props;
  return (
    <Button type={type} sx={{ px: '5', py: '4', ...sx }}>
      {children}
    </Button>
  );
};

export { CyButton };
