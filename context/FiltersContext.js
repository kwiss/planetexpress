import React, { createContext, useState } from 'react';

import { useDebounce } from '../../../lib/hooks';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { children, initialValues = {} } = props;

  // Use State to keep the values
  const [mesureType, changeMesureType] = useState(initialValues.mesureType);
  const [mesureStatus, changeMesureStatus] = useState(
    initialValues.mesureStatus
  );
  const [searchText, changeSearchText] = useState('');

  const debouncedSearchText = useDebounce(searchText, 1000);

  // Make the context object:
  const PanelContext = {
    changeMesureStatus,
    changeMesureType,
    changeSearchText,
    debouncedSearchText,
    mesureStatus,
    mesureType,
    searchText,
  };

  // pass the value in provider and return
  return <Context.Provider value={PanelContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
