export class SearchFlightDto {
  from: string;
  to: string;
  departureTime: Date;
  arrivalTime?: Date;
}
