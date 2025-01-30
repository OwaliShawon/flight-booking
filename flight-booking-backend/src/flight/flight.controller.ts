import { Controller, Get, Query, Param } from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFlightDto } from './dto/search-flight.dto';

@Controller('flights')
export class FlightController {
  constructor(private flightService: FlightService) {}

  @Get()
  searchFlights(@Query() searchFlightDto: SearchFlightDto) {
    return this.flightService.searchFlights(searchFlightDto);
  }

  @Get(':id')
  getFlightById(@Param('id') id: number) {
    return this.flightService.getFlightById(id);
  }
}
