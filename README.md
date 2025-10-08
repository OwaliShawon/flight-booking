# ✈️ Flight Booking System

A full-stack flight booking application built with modern web technologies, providing a comprehensive platform for users to search, book, and manage flight reservations.

## 🌟 Overview

This flight booking system is a complete end-to-end solution that allows users to:
- Search and browse available flights
- Book flights with secure payment processing
- Manage user accounts and bookings
- Rate and review flights
- Receive notifications about booking updates
- Administrative dashboard for flight and user management

## 🏗️ Architecture

The application follows a microservices architecture with separated frontend and backend:

```
flight-booking/
├── flight-booking-backend/    # NestJS REST API
└── flight-booking-frontend/   # Next.js React Application
```

## 🚀 Tech Stack

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT with Passport.js
- **Payment Processing**: Stripe
- **File Upload**: Multer
- **Email Service**: Nodemailer
- **SMS Service**: Twilio
- **API Documentation**: Swagger/OpenAPI
- **Security**: bcryptjs for password hashing
- **Testing**: Jest

### Frontend (Next.js)
- **Framework**: Next.js 15.3.1 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **UI Utilities**: clsx, tailwind-merge

## ✨ Features

### User Features
- 🔐 **Authentication & Authorization**
  - User registration and login
  - JWT-based authentication
  - Role-based access control
  - Profile management with photo uploads

- ✈️ **Flight Management**
  - Search flights by destination, date, and preferences
  - View detailed flight information
  - Filter and sort flight results

- 🎫 **Booking System**
  - Secure flight booking process
  - Booking history and management
  - Booking modifications and cancellations

- 💳 **Payment Integration**
  - Secure payment processing with Stripe
  - Multiple payment methods support
  - Payment history and receipts

- 📱 **Notifications**
  - Email notifications for booking confirmations
  - SMS alerts for flight updates
  - In-app notification system

- ⭐ **Reviews & Ratings**
  - Rate and review flights
  - View other users' reviews
  - Rating aggregation system

### Admin Features
- 📊 **Dashboard**
  - Comprehensive admin dashboard
  - User and booking analytics
  - System monitoring

- 🛫 **Flight Management**
  - Add, edit, and remove flights
  - Manage flight schedules and pricing
  - Inventory management

- 👥 **User Management**
  - View and manage user accounts
  - Handle user support requests
  - Moderate reviews and ratings

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- pnpm (recommended) or npm
- Stripe account (for payments)
- Twilio account (for SMS notifications)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flight-booking/flight-booking-backend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   # Database
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_db_username
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=flight_booking_db

   # JWT
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # Email (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password

   # Twilio
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number

   # Application
   PORT=3001
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Create PostgreSQL database
   createdb flight_booking_db

   # Run migrations (if any)
   pnpm run migration:run
   ```

5. **Start the backend server**
   ```bash
   # Development mode
   pnpm run start:dev

   # Production mode
   pnpm run build
   pnpm run start:prod
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../flight-booking-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the frontend server**
   ```bash
   # Development mode
   pnpm run dev

   # Production mode
   pnpm run build
   pnpm run start
   ```

## 📚 API Documentation

Once the backend is running, you can access the Swagger API documentation at:
```
http://localhost:3001/api
```

This provides interactive documentation for all available endpoints, including:
- Authentication endpoints
- User management
- Flight search and booking
- Payment processing
- Admin operations

## 🧪 Testing

### Backend Testing
```bash
cd flight-booking-backend

# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:cov

# Run e2e tests
pnpm run test:e2e
```

### Frontend Testing
```bash
cd flight-booking-frontend

# Run linting
pnpm run lint
```

## 🚢 Deployment

### Backend Deployment
1. **Build the application**
   ```bash
   pnpm run build
   ```

2. **Set production environment variables**

3. **Deploy to your preferred platform** (Heroku, AWS, DigitalOcean, etc.)

### Frontend Deployment
1. **Build the application**
   ```bash
   pnpm run build
   ```

2. **Deploy to Vercel, Netlify, or your preferred hosting platform**

## 📁 Project Structure

### Backend Structure
```
flight-booking-backend/
├── src/
│   ├── admin/           # Admin dashboard functionality
│   ├── auth/            # Authentication & authorization
│   ├── booking/         # Flight booking management
│   ├── database/        # Database configuration
│   ├── flight/          # Flight management
│   ├── notification/    # Email & SMS notifications
│   ├── payment/         # Payment processing
│   ├── rating/          # Flight rating system
│   ├── review/          # Flight review system
│   ├── user/            # User management
│   ├── app.module.ts    # Main application module
│   └── main.ts          # Application entry point
├── test/                # E2E tests
├── uploads/             # File uploads directory
└── package.json
```

### Frontend Structure
```
flight-booking-frontend/
├── src/
│   ├── app/             # Next.js app router pages
│   ├── lib/             # Utilities and configurations
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── package.json
```

## 🔧 Development Scripts

### Backend Scripts
- `pnpm run start:dev` - Start development server with hot reload
- `pnpm run build` - Build the application
- `pnpm run test` - Run unit tests
- `pnpm run test:e2e` - Run end-to-end tests
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

### Frontend Scripts
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the UNLICENSED License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🎯 Future Enhancements

- [ ] Mobile application (React Native)
- [ ] Real-time flight tracking
- [ ] Multi-currency support
- [ ] Advanced search filters
- [ ] Loyalty program integration
- [ ] Social media integration
- [ ] Push notifications
- [ ] Offline support
- [ ] Multi-language support
- [ ] Flight comparison features

## 📊 Performance & Monitoring

- API response caching
- Database query optimization
- Frontend code splitting
- Image optimization
- Error tracking and monitoring

---

**Built with ❤️ by [OwaliShawon](https://github.com/OwaliShawon)**

*Happy Flying! ✈️*