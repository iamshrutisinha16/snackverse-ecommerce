import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoBanner from '../components/home/PromoBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import MainLayout from '../layouts/MainLayout';

const Home = () => (
  <MainLayout>
    {/* 🚀 Main Welcome Screen Canvas */}
    <Hero />
    
    {/* 🍿 Dynamic Autoscrolling Category Matrix Component */}
    <Categories />
    
    {/* 🌟 Highlighted Analytics Product Inventory Grid */}
    <FeaturedProducts />
    
    {/* ⚡ Offers & Discount Node Strips */}
    <PromoBanner />
    
    {/* 🛡️ Trust Badges & Perks Block */}
    <WhyChooseUs />
    
    {/* 💬 Customer Feedback Swiper Deck */}
    <Testimonials />
    
    {/* ✉️ Marketing Subscriptions Capture */}
    <Newsletter />
  </MainLayout>
);

export default Home;