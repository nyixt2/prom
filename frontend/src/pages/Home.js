import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1552571933-a7cf95629dc7')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center z-10 fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="royal-gradient">Royal Prom</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif mb-4 text-gold">
            Night of Elegance 2024
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            Experience the most magnificent prom night of your life. Where dreams meet reality in royal splendor.
          </p>
          <div className="space-x-4">
            <Link to="/tickets" className="btn-royal mr-4">
              Reserve Your Spot
            </Link>
            <Link to="/about" className="border-2 border-gold text-gold px-8 py-4 rounded-lg hover:bg-gold hover:text-black transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Features */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Unforgettable Night</h3>
              <p className="text-gray-300">A magical evening filled with dancing, dining, and memories that will last a lifetime.</p>
            </div>
            
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Luxury Venue</h3>
              <p className="text-gray-300">Experience elegance at its finest in our stunning ballroom venue with royal decorations.</p>
            </div>
            
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Live Entertainment</h3>
              <p className="text-gray-300">Professional DJ, live band, and special performances to keep the energy high all night long.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold to-yellow-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Don't Miss Out
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
            Limited tickets available. Secure your place at the most exclusive prom event of the year.
          </p>
          <Link to="/tickets" className="bg-black text-gold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-lg font-semibold">
            Get Your Tickets Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;