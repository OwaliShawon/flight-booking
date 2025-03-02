import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { SearchFlightDto } from './dto/search-flight.dto';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  findOne(id: number): Promise<Flight> {
    return this.flightRepository.findOne({ where: { id } });
  }

  create(flight: CreateFlightDto): Promise<Flight> {
    return this.flightRepository.save(flight);
  }

  update(id: number, flight: UpdateFlightDto): Promise<any> {
    return this.flightRepository.update(id, flight);
  }

  delete(id: number): Promise<any> {
    return this.flightRepository.delete(id);
  }

  async searchFlights(searchFlightDto: SearchFlightDto): Promise<Flight[]> {
    console.log(searchFlightDto);
    const { from, to, departureTime, arrivalTime } = searchFlightDto;
    const query = this.flightRepository
      .createQueryBuilder('flight')
      .where('flight.from = :from', { from })
      .andWhere('flight.to = :to', { to })
      .andWhere('DATE(flight.departureTime) = :departureTime', {
        departureTime,
      });

    if (arrivalTime) {
      query.andWhere('DATE(flight.arrivalTime) = :arrivalTime', {
        arrivalTime,
      });
    }

    return query.getMany();
  }

  async getFlightById(id: number): Promise<Flight> {
    return this.flightRepository.findOne({ where: { id } });
  }
}
