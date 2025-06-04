import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['(555) 123-PROM', '(555) 123-7766'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@royalprom.com', 'bookings@royalprom.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: ['123 Elegance Avenue', 'Downtown District', 'City, State 12345'],
      description: 'Visit us in person'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Office Hours',
      details: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 4 PM', 'Sunday: By Appointment'],
      description: 'We\'re here to help'
    }
  ];

  const faqs = [
    {
      question: 'When is the deadline to purchase tickets?',
      answer: 'Tickets can be purchased up to 48 hours before the event. However, we recommend booking early as popular packages sell out quickly.'
    },
    {
      question: 'What is included in the photography package?',
      answer: 'All tickets include professional group photos. VIP and Royal packages include individual portrait sessions and digital galleries.'
    },
    {
      question: 'Can I change my ticket package after booking?',
      answer: 'Yes, you can upgrade your package up to 2 weeks before the event, subject to availability. Downgrades are handled case by case.'
    },
    {
      question: 'Is there a dress code?',
      answer: 'Yes, formal attire is required. Evening gowns, cocktail dresses, tuxedos, or formal suits are appropriate. No casual wear is permitted.'
    },
    {
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow all local health guidelines and maintain enhanced cleaning protocols. Current requirements will be communicated closer to the event date.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1541554685626-8016b713c293')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="royal-gradient">Contact Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our royal team for any questions or special requests
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-effect p-8 text-center hover-glow">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-effect p-8">
              <h2 className="text-4xl font-bold mb-8 royal-gradient">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Ticket Booking</option>
                    <option value="photography">Photography Services</option>
                    <option value="venue">Venue Tour</option>
                    <option value="catering">Catering Options</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors h-32"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-royal w-full text-lg py-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gold">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-effect p-6 hover-glow">
                    <h3 className="text-xl font-bold mb-3 text-gold">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-12 royal-gradient">Follow Our Journey</h2>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black hover:bg-yellow-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black hover:bg-yellow-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a href="#" className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black hover:bg-yellow-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black hover:bg-yellow-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-300 mb-8">
            Stay updated with the latest Royal Prom news, photos, and announcements
          </p>

          <div className="glass-effect p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gold">Newsletter Signup</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 p-3 bg-black/50 border border-gold/30 rounded-l-lg text-white focus:border-gold focus:outline-none"
              />
              <button className="bg-gold text-black px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-to-r from-gold to-yellow-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Need Immediate Help?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
            For urgent inquiries or last-minute bookings, call our emergency hotline
          </p>
          <a href="tel:555-123-7766" className="bg-black text-gold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-lg font-semibold">
            Call Emergency Line
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;