// Property interface for listings
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: 'apartment' | 'house' | 'villa' | 'condo';
  features: string[];
}

// Filter interface for property filtering
export interface PropertyFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  type?: Property['type'];
}

// Props interfaces for components
export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeaderProps {}

export interface FooterProps {}

export interface HeroProps {}

export interface FiltersProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
}

export interface ListingsProps {
  properties: Property[];
  loading?: boolean;
}

export interface PropertyCardProps {
  property: Property;
}