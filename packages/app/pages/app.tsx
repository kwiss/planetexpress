import Head from 'next/head';
import * as React from 'react';
import { Box } from 'theme-ui';

import { CreateTodo } from '../components/createTodo';
import { LayoutApp } from '../components/layouts';
import { TodoList } from '../components/todoList';
import { withAuthSync } from '../hocs/with-auth-sync';

const App: React.FunctionComponent = () => {
  return (
    <LayoutApp>
      <Head>
        <title>Create Next App - dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ maxWidth: '1024px', mx: 'auto' }}>
        <CreateTodo />
        <TodoList />
      </Box>
    </LayoutApp>
  );
};

export default withAuthSync(App);
