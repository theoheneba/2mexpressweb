export interface Trip {
  id: string;
  from: string;
  to: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  available_seats: number;
}

export interface BookingForm {
  from: string;
  to: string;
  departure_date: string;
  return_date?: string;
  adults: number;
  children: number;
  trip_type: 'one-way' | 'round-trip';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

export interface Route {
  id: string;
  from: string;
  to: string;
  duration: string;
  price: number;
  image: string;
  popular?: boolean;
}

export interface TripSearchResponse {
  trips: Trip[];
  message?: string;
}

export interface TripAvailability {
  available: boolean;
  seats_remaining: number;
  is_full: boolean;
  next_available_date?: string;
}