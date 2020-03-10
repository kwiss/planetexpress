import { Formik } from 'formik';
import * as React from 'react';
import { Box, Button, Input, Label } from 'theme-ui';

import { login } from '../util/auth';

// TODO
const url = `http://localhost:3000/api/auth/signup`;

const Signup: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', username: '' }}
      onSubmit={async (values) => {
        try {
          await fetch(url, {
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
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
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
            <Label htmlFor="email">Username</Label>
            <Input
              id="username"
              type="text"
              value={values.username}
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
              Créer un compte
            </Button>
          </Box>
        );
      }}
    </Formik>
  );
};

export default Signup;
