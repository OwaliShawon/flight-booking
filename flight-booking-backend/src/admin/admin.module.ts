import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { DashboardService } from './dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/booking/booking.entity';
import { User } from 'src/user/user.entity';
import { Flight } from 'src/flight/flight.entity';
import { Payment } from 'src/payment/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, User, Flight, Payment])],
  providers: [DashboardService],
  controllers: [AdminController],
  exports: [DashboardService],
})
export class AdminModule {}
