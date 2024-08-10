// NPM dependencies
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

// application configuration
const { config } = require('./config');

const PORT = config.app.port;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const turnstileToken = req.body['cf-turnstile-response'];
  const secretKey = config.turnstile.secret;
  const siteVerifyURL = config.turnstile.siteVerifyURL;

  try {
    const response = await axios.post(siteVerifyURL, {
      secret: secretKey,
      response: turnstileToken
    });

    if (!response.data.success) {
      return res.status(500).json({
        message: 'Error verifying Turnstile token',
        error: true
      });
    }

    if (email.trim() === config.user.email && password.trim() === config.user.password) {
      res.json({
        message: 'Login successful',
        success: true
      });
    } else {
      res.status(401).json({
        message: 'Invalid email or password',
        error: true
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error verifying Turnstile token',
      success: false,
      error: error
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
