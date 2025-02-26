import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { User } from '../user/user.entity';
import { Flight } from '../flight/flight.entity';
import * as nodemailer from 'nodemailer';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { flightId, userId } = createBookingDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const flight = await this.flightRepository.findOne({
      where: { id: flightId },
    });
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${flightId} not found`);
    }

    const booking = this.bookingRepository.create({
      user,
      flight,
      bookingDate: new Date(),
      status: 'CONFIRMED',
    });

    await this.bookingRepository.save(booking);
    await this.sendBookingConfirmation(user.email, booking);

    return booking;
  }

  async getBookingsByUserId(userId: number): Promise<Booking[]> {
    return this.bookingRepository.find({
      where: { user: { id: userId } },
      relations: ['flight'],
    });
  }

  async sendBookingConfirmation(email: string, booking: Booking) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
      },
    });

    const mailOptions = {
      from: 'your_email@example.com',
      to: email,
      subject: 'Booking Confirmation',
      text: `Your booking is confirmed. Booking details: ${JSON.stringify(booking)}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
