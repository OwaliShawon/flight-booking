import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { DashboardService } from './dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from '../booking/booking.entity';
import { User } from '../user/user.entity';
import { Flight } from '../flight/flight.entity';
import { Payment } from '../payment/payment.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { FlightModule } from '../flight/flight.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, User, Flight, Payment]),
    AuthModule,
    JwtModule.register({}),
    FlightModule,
    UserModule,
  ],
  providers: [DashboardService],
  controllers: [AdminController],
  exports: [DashboardService],
})
export class AdminModule {}
