import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { User } from '../user/user.entity';
import { Flight } from '../flight/flight.entity';
import { Rating } from './rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rating, User, Flight])],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
