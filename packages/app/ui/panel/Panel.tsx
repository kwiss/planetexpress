import React, { useContext } from 'react';
import { Box } from 'theme-ui';

import { PanelContext } from './context';

const Panel: React.FunctionComponent = () => {
  const {
    panel: { isOpen, Component },
  } = useContext(PanelContext);
  return (
    <>
      {isOpen && Component && (
        <Box
          sx={{
            bg: 'background',
            bottom: 0,
            boxShadow: '0px 4px 10px rgba(15, 41, 208, 0.25)',
            p: 6,
            position: 'fixed',
            right: 0,
            top: 0,
            width: '400px',
          }}
        >
          <Component test="teset" />
        </Box>
      )}
    </>
  );
};

export { Panel };
