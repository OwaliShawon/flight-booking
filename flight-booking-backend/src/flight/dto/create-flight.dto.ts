export class CreateFlightDto {
  airline: string;
  departureTime: Date;
  arrivalTime: Date;
  from: string;
  to: string;
  price: number;
  seatsAvailable: number;
}
