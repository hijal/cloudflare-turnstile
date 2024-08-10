exports.config = {
  app: {
    port: process.env.PORT || 5000
  },
  user: {
    email: process.env.USER_EMAIL_ADDRESS,
    password: process.env.USER_PASSWORD
  },
  turnstile: {
    siteVerifyURL: 'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    secret: process.env.TURNSTILE_SECRET_KEY
  }
};
