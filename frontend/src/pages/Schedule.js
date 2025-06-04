import React from 'react';

const Schedule = () => {
  const scheduleItems = [
    {
      time: '6:00 PM',
      title: 'Red Carpet Arrival',
      description: 'Professional photography and grand entrance at the venue',
      icon: '📸'
    },
    {
      time: '6:30 PM',
      title: 'Cocktail Reception',
      description: 'Welcome drinks and mingling with friends',
      icon: '🥂'
    },
    {
      time: '7:00 PM',
      title: 'Dinner Service',
      description: 'Gourmet three-course dinner in the royal ballroom',
      icon: '🍽️'
    },
    {
      time: '8:00 PM',
      title: 'Crown Ceremony',
      description: 'Announcement of Prom King and Queen',
      icon: '👑'
    },
    {
      time: '8:30 PM',
      title: 'First Dance',
      description: 'Traditional prom dance for the royal court',
      icon: '💃'
    },
    {
      time: '9:00 PM',
      title: 'Open Dancing',
      description: 'DJ starts the party with your favorite hits',
      icon: '🎵'
    },
    {
      time: '10:00 PM',
      title: 'Live Entertainment',
      description: 'Special performance by live band',
      icon: '🎤'
    },
    {
      time: '11:00 PM',
      title: 'Dance Floor Takeover',
      description: 'Non-stop dancing until midnight',
      icon: '🕺'
    },
    {
      time: '12:00 AM',
      title: 'Grand Finale',
      description: 'Final dance and farewell celebration',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1482575832494-771f74bf6857')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">Event Schedule</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your perfect prom night timeline - every moment carefully planned
          </p>
        </div>
      </section>

      {/* Date & Time Info */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <div className="glass-effect p-8 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 royal-gradient">Save the Date</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-gold mb-2">Date</h3>
                  <p className="text-xl text-gray-300">Saturday, May 18th, 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">⏰</div>
                  <h3 className="text-2xl font-bold text-gold mb-2">Duration</h3>
                  <p className="text-xl text-gray-300">6:00 PM - 12:00 AM</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-gold mb-2">Venue</h3>
                  <p className="text-xl text-gray-300">Royal Grand Ballroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 royal-gradient">Night Timeline</h2>
          
          <div className="max-w-4xl mx-auto">
            {scheduleItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-gold rounded-full relative z-10 mx-8 md:mx-12">
                  {index < scheduleItems.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gold/30"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`glass-effect p-6 hover-glow flex-1 max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{item.icon}</span>
                    <div>
                      <div className="text-2xl font-bold text-gold">{item.time}</div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gold">Important Notes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">What to Expect</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Professional photographers will be available throughout the evening</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Gourmet dinner includes vegetarian and dietary restriction options</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>DJ will take music requests throughout the night</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Transportation assistance available for VIP and Royal packages</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Guidelines</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Arrive 15 minutes early for red carpet photos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Formal attire is required - no exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mobile phones allowed for personal photos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>No outside food or beverages permitted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold to-yellow-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Ready for the Perfect Night?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
            Don't miss out on this magical evening. Reserve your spot today!
          </p>
          <a href="/tickets" className="bg-black text-gold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-lg font-semibold">
            Get Your Tickets
          </a>
        </div>
      </section>
    </div>
  );
};

export default Schedule;