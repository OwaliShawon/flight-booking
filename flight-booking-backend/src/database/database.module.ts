import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../user/user.entity';
import { Flight } from '../flight/flight.entity';
import { Booking } from '../booking/booking.entity';
import { Payment } from '../payment/payment.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, Flight, Booking, Payment],
        synchronize: configService.get<string>('NODE_ENV') !== 'production',
        migrationsRun: true,
        migrations: ['dist/migrations/*.js'],
        dropSchema: configService.get<string>('NODE_ENV') === 'test',
      }),
    }),
  ],
})
export class DatabaseModule {}
