import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import * as React from 'react';
import { Box, Input, Label } from 'theme-ui';

import {CyButton} from '../../ui/Button';
import { login } from '../../util/auth';

const url = `/api/auth/login`;

// Refactor with hook & split form in separate folder
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
            Router.push('/app');
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
              autocomplete="nope"
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
            <CyButton mt={30} type="submit">
              Se connecter
            </CyButton>
          </Box>
        );
      }}
    </Formik>
  );
};

export default Signin;
