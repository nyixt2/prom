import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'venue', label: 'Venue' },
    { id: 'events', label: 'Past Events' },
    { id: 'dancing', label: 'Dancing' },
    { id: 'dining', label: 'Dining' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7815022/pexels-photo-7815022.jpeg',
      alt: 'Elegant ballroom setup',
      category: 'venue',
      title: 'Royal Ballroom'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857',
      alt: 'Prom night celebration',
      category: 'events',
      title: 'Magical Night'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1586368931893-d71f3f6fd0cb',
      alt: 'Dancing couples',
      category: 'dancing',
      title: 'Dance Floor Magic'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/7598668/pexels-photo-7598668.jpeg',
      alt: 'Luxury event space',
      category: 'venue',
      title: 'Luxury Interior'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9',
      alt: 'Elegant couple',
      category: 'events',
      title: 'Royal Elegance'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/6809857/pexels-photo-6809857.jpeg',
      alt: 'Formal dancer',
      category: 'dancing',
      title: 'Graceful Movement'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1541554685626-8016b713c293',
      alt: 'Crown ceremony',
      category: 'events',
      title: 'Crown Ceremony'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1552571933-a7cf95629dc7',
      alt: 'Elegant formal attire',
      category: 'events',
      title: 'Royal Attire'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1439539698758-ba2680ecadb9')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Glimpse into the magic of Royal Prom - where memories are made
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-black'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg hover-glow cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setLightboxImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-300">{lightboxImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 royal-gradient">What Students Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 text-center hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The most magical night of my life! Everything was perfect from the venue to the photography. Royal Prom exceeded all my expectations."
              </p>
              <div className="text-gold font-semibold">- Sarah M.</div>
              <div className="text-gray-400 text-sm">Class of 2023</div>
            </div>
            
            <div className="glass-effect p-8 text-center hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The VIP package was worth every penny. The private dining and photo session made us feel like royalty. Absolutely amazing!"
              </p>
              <div className="text-gold font-semibold">- Michael T.</div>
              <div className="text-gray-400 text-sm">Class of 2023</div>
            </div>
            
            <div className="glass-effect p-8 text-center hover-glow">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Professional photography, amazing food, and a night I'll never forget. The Royal Prom team thought of every detail."
              </p>
              <div className="text-gold font-semibold">- Emma L.</div>
              <div className="text-gray-400 text-sm">Class of 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Booking CTA */}
      <section className="section-padding bg-gradient-to-r from-gold to-yellow-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Capture Your Moment
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
            Professional photography packages available to preserve your magical prom memories forever
          </p>
          <a href="/contact" className="bg-black text-gold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-lg font-semibold mr-4">
            Book Photography
          </a>
          <a href="/tickets" className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-gold transition-all duration-300 text-lg font-semibold">
            Get Tickets
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;