import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import StatsCounter from '../components/StatsCounter'
import FeatureCards from '../components/FeatureCards'
import TestimonialCarousel from '../components/TestimonialCarousel'
import NoticePreview from '../components/NoticePreview'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Excellence International School | Home</title>
        <meta
          name="description"
          content="Excellence International School — Nurturing minds and building futures through world-class academics, dedicated faculty, and a safe, inclusive campus."
        />
      </Helmet>

      <HeroSection />
      <StatsCounter />
      <FeatureCards />
      <TestimonialCarousel />
      <NoticePreview />
    </>
  )
}

export default Home