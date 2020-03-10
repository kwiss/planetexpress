require("dotenv").config();
const next = require("next");
const express = require("express");

const chalk = require("chalk");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const expressValidator = require("express-validator");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .use(cors())
    .use(bodyParser.json({ type: "application/*+json" }))
    .use(expressValidator())
    .use(passport.initialize())
    .use(passport.session())
    // Regular next.js request handler
    .use(handler)
    .listen(port, err => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-console
      console.log(
        "%s App is running at http://localhost:%s in %s mode",
        chalk.green("✓"),
        port,
        express().get("env")
      );
    });
});
