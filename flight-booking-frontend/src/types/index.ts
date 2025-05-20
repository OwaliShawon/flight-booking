export interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
}

export interface Flight {
  id: number;
  airline: string;
  departureTime: Date;
  arrivalTime: Date;
  from: string;
  to: string;
  price: number;
  seatsAvailable: number;
}

export interface Booking {
  id: number;
  user: User;
  flight: Flight;
  bookingDate: Date;
  status: string;
}

export interface AuthResponse {
  access_token: string;
}