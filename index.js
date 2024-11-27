import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Auth routes
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });
    const token = jwt.sign({ userId: user.id }, 'your-secret-key');
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.id }, 'your-secret-key');
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
});

// Booking routes
app.post('/api/bookings', async (req, res) => {
  try {
    const { userId, carId, startDate, endDate, totalPrice } = req.body;
    const booking = await prisma.booking.create({
      data: { userId, carId, startDate, endDate, totalPrice }
    });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: 'Booking failed' });
  }
});

app.get('/api/bookings/:userId', async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: parseInt(req.params.userId) },
      include: { car: true }
    });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch bookings' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});