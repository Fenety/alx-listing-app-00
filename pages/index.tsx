import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Filters from '../components/common/Filters';
import Listings from '../components/common/Listings';
import { PropertyFilters } from '../interfaces';
import { SAMPLE_PROPERTIES, APP_NAME, APP_DESCRIPTION } from '../constants';

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<PropertyFilters>({});
  const [loading, setLoading] = useState(false);

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    let result = [...SAMPLE_PROPERTIES];

    if (filters.location) {
      result = result.filter(property => 
        property.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }

    if (filters.bedrooms) {
      result = result.filter(property => property.bedrooms >= filters.bedrooms!);
    }

    if (filters.bathrooms) {
      result = result.filter(property => property.bathrooms >= filters.bathrooms!);
    }

    if (filters.minPrice) {
      result = result.filter(property => property.price >= filters.minPrice!);
    }

    if (filters.maxPrice) {
      result = result.filter(property => property.price <= filters.maxPrice!);
    }

    return result;
  }, [filters]);

  const handleFiltersChange = (newFilters: PropertyFilters) => {
    setLoading(true);
    setFilters(newFilters);
    
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>{APP_NAME} - Find Your Perfect Property</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${APP_NAME} - Find Your Perfect Property`} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${APP_NAME} - Find Your Perfect Property`} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Filters */}
            <Filters 
              filters={filters} 
              onFiltersChange={handleFiltersChange}
            />

            {/* Listings */}
            <Listings 
              properties={filteredProperties} 
              loading={loading}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;