import React from 'react';

const Venue = () => {
  const amenities = [
    {
      title: 'Grand Ballroom',
      description: 'Elegant 5,000 sq ft ballroom with crystal chandeliers',
      icon: '🏛️'
    },
    {
      title: 'VIP Lounge',
      description: 'Exclusive area for VIP package holders',
      icon: '👑'
    },
    {
      title: 'Professional Kitchen',
      description: 'Full-service kitchen for gourmet dining experience',
      icon: '👨‍🍳'
    },
    {
      title: 'Photo Studios',
      description: 'Multiple professional photography setups',
      icon: '📸'
    },
    {
      title: 'Sound System',
      description: 'State-of-the-art audio and lighting equipment',
      icon: '🎵'
    },
    {
      title: 'Parking',
      description: 'Complimentary valet parking service',
      icon: '🚗'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/7815022/pexels-photo-7815022.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">Royal Grand Ballroom</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury and elegance in our magnificent venue
          </p>
        </div>
      </section>

      {/* Venue Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-gold">A Venue Like No Other</h2>
              <p className="text-lg text-gray-300 mb-6">
                The Royal Grand Ballroom is the epitome of elegance and sophistication. Located in the heart of the city, our venue has been the backdrop for countless magical moments and unforgettable celebrations.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With its soaring ceilings, crystal chandeliers, and opulent décor, every corner of our ballroom radiates luxury. The space has been meticulously designed to create the perfect atmosphere for your special night.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center glass-effect p-4">
                  <div className="text-3xl font-bold text-gold mb-2">500</div>
                  <div className="text-gray-300">Guest Capacity</div>
                </div>
                <div className="text-center glass-effect p-4">
                  <div className="text-3xl font-bold text-gold mb-2">5,000</div>
                  <div className="text-gray-300">Square Feet</div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img 
                src="https://images.pexels.com/photos/7598668/pexels-photo-7598668.jpeg" 
                alt="Royal Grand Ballroom Interior" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 royal-gradient">Venue Amenities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="glass-effect p-8 text-center hover-glow">
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gold">{amenity.title}</h3>
                <p className="text-gray-300">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-gold">Location & Directions</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Address</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Royal Grand Ballroom</p>
                    <p>123 Elegance Avenue</p>
                    <p>Downtown District</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-PROM</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@royalprom.com</span>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Getting There</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">By Car</h4>
                  <p>Free valet parking available. Enter through the main entrance on Elegance Avenue.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Public Transportation</h4>
                  <p>Metro Station: Downtown Central (2 blocks away)</p>
                  <p>Bus Lines: 15, 23, 42 stop directly in front</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Rideshare</h4>
                  <p>Uber and Lyft pickup/dropoff zone located at the side entrance</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Special Services</h4>
                  <p>Luxury transportation available for Royal package holders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 royal-gradient">Venue Gallery</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg hover-glow">
              <img 
                src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9" 
                alt="Ballroom Interior" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Main Ballroom</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg hover-glow">
              <img 
                src="https://images.unsplash.com/photo-1541554685626-8016b713c293" 
                alt="VIP Lounge" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">VIP Lounge</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg hover-glow">
              <img 
                src="https://images.pexels.com/photos/6809857/pexels-photo-6809857.jpeg" 
                alt="Dance Floor" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Dance Floor</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/gallery" className="btn-royal">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-gold to-yellow-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Visit Our Venue
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
            Schedule a private tour to see the Royal Grand Ballroom in person
          </p>
          <a href="/contact" className="bg-black text-gold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-lg font-semibold mr-4">
            Schedule Tour
          </a>
          <a href="/tickets" className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-gold transition-all duration-300 text-lg font-semibold">
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Venue;