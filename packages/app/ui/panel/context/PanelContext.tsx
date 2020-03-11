import React, { createContext, FunctionComponent, useState } from 'react';

export const Context = createContext<any>({
  Component: null,
  isOpen: false,
});

export const Provider: FunctionComponent = (props) => {
  const { children } = props;

  // Use State to keep the values
  const [panel, togglePanel] = useState({ Component: null, isOpen: false });

  // Make the context object:
  const PanelContext = {
    panel,
    togglePanel,
  };

  // pass the value in provider and return
  return <Context.Provider value={PanelContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
