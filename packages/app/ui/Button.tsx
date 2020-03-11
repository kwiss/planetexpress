import React from 'react';
import { Button } from 'theme-ui';

const CyButton = (props) => {
  const { children, sx, type, variant } = props;
  return (
    <Button type={type} variant={variant} sx={{...sx }}>
      {children}
    </Button>
  );
};

export { CyButton };
