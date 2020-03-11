import React from 'react';
import {Button} from 'theme-ui';

const CyButton = (props) => {
  const {children, sx, title} = props;
  return (
    <Button sx={{ px:'5', py:'4', ...sx}}>
      {children}
    </Button>
  );
};

export { CyButton };
