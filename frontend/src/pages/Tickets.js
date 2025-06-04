import React, { useState } from 'react';

const Tickets = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const ticketPackages = [
    {
      id: 'general',
      name: 'General Admission',
      price: '$150',
      description: 'Perfect for an amazing prom experience',
      features: [
        'Dinner and Dancing',
        'Professional Photography',
        'Welcome Drink',
        'Party Favors',
        'Access to Main Ballroom'
      ],
      popular: false
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      price: '$250',
      description: 'Enhanced experience with premium perks',
      features: [
        'Everything in General',
        'Premium Seating',
        'VIP Lounge Access',
        'Professional Portrait Session',
        'Champagne Toast',
        'Gift Bag',
        'Priority Entry'
      ],
      popular: true
    },
    {
      id: 'royal',
      name: 'Royal Package',
      price: '$350',
      description: 'The ultimate luxury prom experience',
      features: [
        'Everything in VIP',
        'Private Dining Area',
        'Personal Photographer',
        'Luxury Transportation',
        'Red Carpet Arrival',
        'Custom Photo Album',
        'Crown Ceremony',
        'After-Party Access'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/7598668/pexels-photo-7598668.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">Ticket Packages</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Choose your perfect prom experience from our royal ticket packages
          </p>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {ticketPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`glass-effect p-8 hover-glow relative ${pkg.popular ? 'border-2 border-gold' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gold">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2 royal-gradient">{pkg.price}</div>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'btn-royal' 
                      : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedPackage && (
        <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
          <div className="container max-w-2xl">
            <div className="glass-effect p-8">
              <h2 className="text-3xl font-bold mb-6 text-gold text-center">
                Book Your {selectedPackage.name}
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">School</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="Enter your school name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Number of Tickets</label>
                    <select className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none">
                      <option value="1">1 Ticket</option>
                      <option value="2">2 Tickets</option>
                      <option value="3">3 Tickets</option>
                      <option value="4">4 Tickets</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Dietary Restrictions</label>
                    <select className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none">
                      <option value="">None</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten Free</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Special Requests</label>
                  <textarea 
                    className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none h-24"
                    placeholder="Any special requests or notes..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-royal text-lg px-12 py-4">
                    Complete Booking - {selectedPackage.price}
                  </button>
                  <button 
                    type="button" 
                    className="ml-4 text-gray-400 hover:text-white"
                    onClick={() => setSelectedPackage(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Additional Info */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-effect p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gold">Important Information</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">Payment Policy</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Secure online payment</li>
                  <li>• Full refund before 30 days</li>
                  <li>• 50% refund before 14 days</li>
                  <li>• No refund after 14 days</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">Dress Code</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Formal attire required</li>
                  <li>• Evening gowns preferred</li>
                  <li>• Tuxedos or formal suits</li>
                  <li>• No casual wear allowed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">What's Included</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Professional photography</li>
                  <li>• Gourmet dinner</li>
                  <li>• Entertainment all night</li>
                  <li>• Commemorative gifts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;