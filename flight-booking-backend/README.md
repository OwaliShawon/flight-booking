## Flight Booking Backend

### Description

This is a RESTful API built with Nest.js for managing flights, bookings, user authentication, and payments. It uses TypeORM for database interactions and includes features like JWT authentication, role-based authorization, and integration with Stripe for payments and Twilio and Nodemailer for notifications.

### Features

*   User authentication and authorization using JWT
*   RESTful API endpoints for managing flights and bookings
*   Admin dashboard for managing users and flights
*   Stripe integration for processing payments
*   Twilio and Nodemailer integration for sending notifications

### Installation

```bash
$ pnpm install


Developed with [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Swagger API 

your_host/api

### Environment Variables
Make sure to create .env files for each environment (development, production, test, etc.) based on the .env.example file.  Populate these files with appropriate values for your database, JWT secret, Stripe keys, and Twilio credentials.

```
PORT=3000
NODE_ENV=development

JWT_SECRET=your_jwt_secret_key

DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=flight-booking

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password

TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```
