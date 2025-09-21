import { Property } from '../interfaces';

// Sample property data
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Beautiful modern apartment in the heart of downtown with stunning city views.',
    price: 350000,
    location: 'Downtown',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'apartment',
    features: ['City View', 'Modern Kitchen', 'Gym', 'Parking']
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    description: 'Spacious luxury villa with private pool and garden in a quiet neighborhood.',
    price: 750000,
    location: 'Suburbs',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'villa',
    features: ['Private Pool', 'Garden', 'Garage', 'Fireplace']
  },
  {
    id: '3',
    title: 'Cozy Family House',
    description: 'Perfect family home with a beautiful backyard and close to schools.',
    price: 450000,
    location: 'Residential',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'house',
    features: ['Backyard', 'Near Schools', 'Updated Kitchen', 'Hardwood Floors']
  },
  {
    id: '4',
    title: 'Executive Condo',
    description: 'Premium executive condo with luxury amenities and concierge service.',
    price: 525000,
    location: 'Business District',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2085&q=80',
    type: 'condo',
    features: ['Concierge', 'Rooftop Terrace', 'Fitness Center', 'Business Center']
  },
  {
    id: '5',
    title: 'Charming Studio Apartment',
    description: 'Compact and efficient studio apartment perfect for young professionals.',
    price: 275000,
    location: 'Arts District',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    type: 'apartment',
    features: ['Open Layout', 'High Ceilings', 'Natural Light', 'Walk-in Closet']
  },
  {
    id: '6',
    title: 'Waterfront Property',
    description: 'Stunning waterfront house with private dock and panoramic water views.',
    price: 950000,
    location: 'Waterfront',
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'house',
    features: ['Waterfront', 'Private Dock', 'Deck', 'Boat Storage']
  }
];

// Filter options
export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'villa', label: 'Villa' },
  { value: 'condo', label: 'Condo' }
];

export const LOCATIONS = [
  'Downtown',
  'Suburbs', 
  'Residential',
  'Business District',
  'Arts District',
  'Waterfront'
];

export const BEDROOM_OPTIONS = [1, 2, 3, 4, 5];
export const BATHROOM_OPTIONS = [1, 2, 3, 4];

// App constants
export const APP_NAME = 'ALX Listing App';
export const APP_DESCRIPTION = 'Find your perfect property with our comprehensive listing platform';