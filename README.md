# FutureWheels - Modern Car Rental Application

A full-stack car rental application with React, Express, and Prisma.

## 🚀 Features

- User authentication (login/register)
- Car browsing with filters
- Real-time car availability
- Booking management
- Interactive UI with animations
- Responsive design
- Backend API with Express
- Database with Prisma
- JWT authentication

## 🛠 Tech Stack

### Frontend
- React 18 with TypeScript
- React Router DOM for routing
- Tailwind CSS for styling
- Framer Motion for animations
- React Hot Toast for notifications
- React DatePicker for booking dates
- Lucide React for icons

### Backend
- Express.js
- Prisma ORM
- SQLite database
- JWT for authentication
- bcrypt for password hashing

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/future-wheels.git
   cd future-wheels
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   # Terminal 1: Start the backend
   npm run server

   # Terminal 2: Start the frontend
   npm run dev
   ```

5. Open your browser and visit: `http://localhost:5173`

## 🔧 Environment Setup

Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
```

## 📱 Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run build` - Build the frontend for production
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio to manage the database

## 🎨 Features in Detail

### User Authentication
- Secure registration and login
- JWT-based authentication
- Protected routes

### Car Management
- Browse available cars
- Filter by category
- Search by name or brand
- View detailed car information

### Booking System
- Check car availability
- Select rental dates
- Calculate total price
- Manage bookings

### UI/UX
- Responsive design for all devices
- Smooth animations and transitions
- Toast notifications
- Loading states
- Error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.