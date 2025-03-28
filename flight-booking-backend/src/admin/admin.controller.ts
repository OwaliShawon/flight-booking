import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { FlightService } from '../flight/flight.service';
import { UserService } from '../user/user.service';
import { CreateFlightDto } from '../flight/dto/create-flight.dto';
import { UpdateFlightDto } from '../flight/dto/update-flight.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('admin')
@UseGuards(RolesGuard)
@Roles('admin')
export class AdminController {
  constructor(
    private dashboardService: DashboardService,
    private flightService: FlightService,
    private userService: UserService,
  ) {}

  @Get('dashboard')
  async getDashboard() {
    return this.dashboardService.getOverview();
  }

  @Get('flights')
  async getFlights() {
    return this.flightService.findAll();
  }

  @Post('flights')
  async createFlight(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Put('flights/:id')
  async updateFlight(
    @Param('id') id: number,
    @Body() updateFlightDto: UpdateFlightDto,
  ) {
    return this.flightService.update(id, updateFlightDto);
  }

  @Delete('flights/:id')
  async deleteFlight(@Param('id') id: number) {
    return this.flightService.delete(id);
  }

  @Get('users')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
