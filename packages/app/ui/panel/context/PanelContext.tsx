import React, { createContext, FunctionComponent, useState } from 'react';

export const Context = createContext({});

export const Provider: FunctionComponent = (props) => {
  const { children } = props;

  // Use State to keep the values
  const [isOpen, togglePanel] = useState(false);

  // Make the context object:
  const PanelContext = {
    isOpen,
    togglePanel,
  };

  // pass the value in provider and return
  return <Context.Provider value={PanelContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
