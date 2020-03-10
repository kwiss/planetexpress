const rasha = require("rasha");
const jwtConfig = require("../../../config/jwt");

export default (req, res) => {
  if (req.method === 'GET') {
    const jwk = {
      ...rasha.importSync({ pem: jwtConfig.publicKey }),
      alg: "RS256",
      kid: jwtConfig.publicKey,
      use: "sig"
    };
    const jwks = {
      keys: [jwk]
    };
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(jwks)
  }
};