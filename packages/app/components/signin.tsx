import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import * as React from 'react';
import { Box, Button, Input, Label } from 'theme-ui';

import { login } from '../util/auth';

const url = `http://localhost:3000/api/auth/login`;

const Signin: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        const response = await fetch(url, {
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });

        if (response.ok) {
          const { token } = await response.json();
          if (token) {
            login(token);
          }
        }
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => {
        return (
          <Box as="form" onSubmit={handleSubmit} py={3}>
            <Label htmlFor="email">email</Label>
            <Input
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label mt={20} htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button mt={30} type="submit">
              Se connecter
            </Button>
          </Box>
        );
      }}
    </Formik>
  );
};

export default Signin;
