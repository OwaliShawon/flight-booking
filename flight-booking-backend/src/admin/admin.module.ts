import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { DashboardService } from './dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/booking/booking.entity';
import { User } from 'src/user/user.entity';
import { Flight } from 'src/flight/flight.entity';
import { Payment } from 'src/payment/payment.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { FlightModule } from 'src/flight/flight.module';
import { UserModule } from 'src/user/user.module';

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
