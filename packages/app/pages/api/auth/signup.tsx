const { User } = require('.../../../db/schema');
const { errorHandler } = require('../../../db/errors');

function handleResponse(res, code, statusMsg) {
  res.status(code).json(statusMsg);
}

const paramValidator = (handler) => {
  return (req, res) => {
    // Do middleware stuff...
    req.assert('email', 'Email is not valid').notEmpty();
    req
      .assert('password', 'Password must be at least 4 characters long')
      .len(4);

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).json({ errors });
    }
    return handler(req, res);
  };
};

const signup = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      const { email, password, username } = req.body;
      try {
        await User.query()
          .allowInsert('[email, password, username]')
          .insert({
            email,
            password,
            username,
          });
      } catch (err) {
        errorHandler(err, res);
        return err;
      }
      handleResponse(res, 200, { success: true });
      break;
    }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default paramValidator(signup);
