import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { FlightModule } from './flight/flight.module';
import { BookingModule } from './booking/booking.module';
import { Flight } from './flight/flight.entity';
import { Booking } from './booking/booking.entity';
import { PaymentModule } from './payment/payment.module';
import { NotificationModule } from './notification/notification.module';
import { Payment } from './payment/payment.entity';
import { ReviewModule } from './review/review.module';
import { RatingModule } from './rating/rating.module';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV || 'development'}`
        : '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    UserModule,
    FlightModule,
    BookingModule,
    PaymentModule,
    NotificationModule,
    ReviewModule,
    RatingModule,
    AdminModule,
    TypeOrmModule.forFeature([User, Flight, Booking]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
