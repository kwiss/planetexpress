import Head from 'next/head';
import * as React from 'react';
import { Box } from 'theme-ui';

import { LayoutApp } from '../components/layouts';
import { TodoList } from '../components/todoList';
import { ToolBar } from '../components/toolBar';
import { withAuthSync } from '../hocs/with-auth-sync';
import { Panel } from '../ui/panel';
import { PanelContextProvider } from '../ui/panel/context';

const App: React.FunctionComponent = () => {
  return (
    <LayoutApp>
      <Head>
        <title>Create Next App - dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ maxWidth: '1024px', mx: 'auto' }}>
        <PanelContextProvider>
          <ToolBar />
          <Panel />
        </PanelContextProvider>
        <TodoList />
      </Box>
    </LayoutApp>
  );
};

export default withAuthSync(App);
