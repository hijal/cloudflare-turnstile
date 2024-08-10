# express login authentication with cloudflare turnstile

This is a basic Node.js application demonstrating a login system protected by Cloudflare's Turnstile bot protection.

## features

- Simple Express.js server
- Basic login functionality
- Integration with Cloudflare Turnstile for bot protection
- Environment variable configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- A Cloudflare account with Turnstile set up

## Getting Started

### 1. Clone the repository

```bash
  git clone https://github.com/hijal/cloudflare-turnstile.git

  cd cloudflare-turnstile

```

### 2. Install dependencies

```bash
  npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```bash
  PORT=3000
  USER_EMAIL_ADDRESS=example@example.com
  USER_PASSWORD=your_secure_password
  TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

Replace the values with your actual configuration.

### 4. Run the application

```bash
  node app.js
```
