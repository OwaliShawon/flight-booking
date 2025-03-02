import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFlightDto } from './dto/search-flight.dto';
import { Flight } from './flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('flights')
export class FlightController {
  constructor(private flightService: FlightService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Flight> {
    return this.flightService.findOne(id);
  }

  @Post()
  create(@Body() flight: CreateFlightDto): Promise<Flight> {
    return this.flightService.create(flight);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() flight: Flight): Promise<any> {
    return this.flightService.update(id, flight);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.flightService.delete(id);
  }

  @Get()
  searchFlights(@Query() searchFlightDto: SearchFlightDto) {
    return this.flightService.searchFlights(searchFlightDto);
  }

  @Get(':id')
  getFlightById(@Param('id') id: number) {
    return this.flightService.getFlightById(id);
  }
}
