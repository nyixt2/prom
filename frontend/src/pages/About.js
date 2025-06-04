import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/7815022/pexels-photo-7815022.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">About Royal Prom</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Where elegance meets celebration in the most prestigious prom experience
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-gold">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Royal Prom began with a simple vision: to create the most extraordinary prom experience that students will treasure forever. Since our inception, we've been dedicated to combining luxury, elegance, and unforgettable memories.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Every detail is meticulously planned to ensure that your special night exceeds all expectations. From the moment you arrive until the last dance, you'll be immersed in an atmosphere of royal grandeur.
              </p>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gold">What Makes Us Special</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Luxurious ballroom venues with royal decorations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Professional photography and videography
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Gourmet dining experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Live entertainment and DJ services
                  </li>
                </ul>
              </div>
            </div>
            <div className="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1586368931893-d71f3f6fd0cb" 
                alt="Elegant prom venue" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 royal-gradient">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Excellence</h3>
              <p className="text-gray-300">
                We strive for perfection in every detail, ensuring that your prom night is nothing short of extraordinary.
              </p>
            </div>
            
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Memories</h3>
              <p className="text-gray-300">
                Creating unforgettable moments that you'll cherish for a lifetime is at the heart of everything we do.
              </p>
            </div>
            
            <div className="text-center glass-effect p-8 hover-glow">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Community</h3>
              <p className="text-gray-300">
                Building connections and celebrating together as we mark this important milestone in your lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="glass-effect p-6 hover-glow">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Happy Students</div>
            </div>
            <div className="glass-effect p-6 hover-glow">
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-gray-300">Schools Served</div>
            </div>
            <div className="glass-effect p-6 hover-glow">
              <div className="text-4xl font-bold text-gold mb-2">10</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass-effect p-6 hover-glow">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;