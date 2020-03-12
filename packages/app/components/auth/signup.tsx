import { Formik } from 'formik';
import Router from 'next/router';
import * as React from 'react';
import { Box, Input, Label } from 'theme-ui';

import { CyButton } from '../../ui/Button';

const url = `/api/auth/signup`;

// Refactor with hook & split form in separate folder
const Signup: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', username: '' }}
      onSubmit={async values => {
        try {
          const response = await fetch(url, {
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              username: values.username,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });
          if (response.status) {
            Router.push('/login');
          }
        } catch (e) {
          alert(`for test purpose only ${e}`);
          console.log(e);
        }
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box as="form" onSubmit={handleSubmit} py={3}>
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label htmlFor="email">Your username</Label>
            <Input
              id="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label htmlFor="password">Your password</Label>
            <Input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <CyButton type="submit">Créer un compte</CyButton>
          </Box>
        );
      }}
    </Formik>
  );
};

export default Signup;
