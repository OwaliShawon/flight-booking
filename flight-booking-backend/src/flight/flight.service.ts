import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { SearchFlightDto } from './dto/search-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async searchFlights(searchFlightDto: SearchFlightDto): Promise<Flight[]> {
    const { from, to, departureDate, returnDate } = searchFlightDto;
    const query = this.flightRepository
      .createQueryBuilder('flight')
      .where('flight.from = :from', { from })
      .andWhere('flight.to = :to', { to })
      .andWhere('DATE(flight.departureTime) = :departureDate', {
        departureDate,
      });

    if (returnDate) {
      query.andWhere('DATE(flight.arrivalTime) = :returnDate', { returnDate });
    }

    return query.getMany();
  }

  async getFlightById(id: number): Promise<Flight> {
    return this.flightRepository.findOne({ where: { id } });
  }
}
