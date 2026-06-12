'use strict';

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});