
export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  features: string[];
  tier: 'standard' | 'premium' | 'luxury';
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
}

export interface BookingDetails {
  servicePackage: ServicePackage | null;
  homeSize: number;
  rooms: number;
  date: string;
  time: string;
  name: string;
  phone: string;
  address: string;
  totalPrice: number;
}
