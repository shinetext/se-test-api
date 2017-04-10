'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const content = require('./content');

app.use(bodyParser.json());

/**
 * POST /
 */
app.post('/', (req, res) => {
  if (! req || ! req.body || typeof req.body.goal !== 'string') {
    res.status(400).json({error: 'Missing `goal`'});
  }

  const url = content.selectUrl(req.body.goal);

  res.json({
    content: url,
  });
});

/**
 * Start listening for connections
 */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});