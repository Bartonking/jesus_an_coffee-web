import { Heart, Users, BookOpen, MapPin, Calendar, ChevronDown, Coffee } from 'lucide-react';
import jesusLogo from '../assets/jesus_coffee.png';
import heroBg from '../assets/jc-mens.png';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={jesusLogo} alt="Jesus & Coffee Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-amber-900">Jesus & Coffee</h1>
                <p className="text-sm text-stone-600 italic">Where Faith Meets Fellowship</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-amber-700 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('values')} className="text-stone-700 hover:text-amber-700 transition-colors font-medium">
                Values
              </button>
              <button onClick={() => scrollToSection('events')} className="text-stone-700 hover:text-amber-700 transition-colors font-medium">
                Events
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-amber-700 transition-colors font-medium">
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/70 to-amber-900/60"></div>
        <div className="relative text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Jesus & Coffee
          </h1>
          <p className="text-2xl md:text-5xl font-semibold text-amber-100 leading-tight drop-shadow-md">
            Where Faith Meets Fellowship
          </p>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Join a community where meaningful conversations happen over great coffee,
            and lasting friendships are built on shared faith. <span className="font-semibold text-amber-200">Strength in Numbers.</span>
          </p>
          <div className="pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="h-12 w-12 text-white drop-shadow-lg" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 md:flex items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Jesus & Coffee is more than just a gathering—it's a community united by faith and fellowship.
                We believe that the best conversations happen when we slow down, share a cup of coffee,
                and open our hearts to meaningful connection.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Whether you're seeking spiritual growth, deep friendships, or simply a warm cup of coffee
                with like-minded believers, you'll find a home here. We're building a community where
                faith is strengthened, hope is renewed, and love is shared—one cup at a time.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:mb-0 mb-4">
              <div className="bg-amber-100 p-6 rounded-lg border-t border-amber-200">
                <Coffee className="h-20 w-20 text-amber-700 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Faith-Centered</h3>
              <p className="text-stone-700 leading-relaxed">
                Everything we do is rooted in our love for Jesus Christ and our commitment to growing in faith together.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Community First</h3>
              <p className="text-stone-700 leading-relaxed">
                We believe in the power of community and the strength that comes from supporting one another.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Biblical Truth</h3>
              <p className="text-stone-700 leading-relaxed">
                Our foundation is the Word of God, and we seek to understand and apply it in our daily lives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Authentic Connection</h3>
              <p className="text-stone-700 leading-relaxed">
                We create safe spaces for honest conversations and genuine relationships over a warm cup of coffee.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Inclusive Welcome</h3>
              <p className="text-stone-700 leading-relaxed">
                Everyone is welcome here, regardless of where they are in their faith journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Strength in Numbers</h3>
              <p className="text-stone-700 leading-relaxed">
                Together we are stronger. We lift each other up and walk through life's challenges side by side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-amber-600 text-white rounded-lg p-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm">OCT</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Sunday Morning Gathering</h3>
                  <div className="flex items-center gap-2 text-stone-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Sundays, 9:00 AM - 11:00 AM</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    Join us for worship, fellowship, and of course, amazing coffee. A perfect way to start your Sunday.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-amber-600 text-white rounded-lg p-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm">OCT</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Wednesday Bible Study</h3>
                  <div className="flex items-center gap-2 text-stone-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Wednesdays, 7:00 PM - 8:30 PM</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    Dive deep into God's Word with our community. Bring your favorite mug and an open heart.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-amber-600 text-white rounded-lg p-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">22</div>
                  <div className="text-sm">OCT</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Coffee & Conversation</h3>
                  <div className="flex items-center gap-2 text-stone-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Saturday, 10:00 AM - 12:00 PM</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    Casual gathering for meaningful conversations. No agenda, just good coffee and better company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Visit Us</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-700 mt-1" />
                    <div className="text-stone-700">
                      <p className="font-medium">Community Coffee House</p>
                      <p>123 Faith Street</p>
                      <p>Your City, ST 12345</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Connect</h3>
                  <div className="space-y-2 text-stone-700">
                    <p><span className="font-medium">Email:</span> hello@jesusandcoffee.com</p>
                    <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src={jesusLogo} alt="Jesus & Coffee" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="font-bold text-lg">Jesus & Coffee</h3>
                <p className="text-sm text-amber-200">Where Faith Meets Fellowship</p>
              </div>
            </div>
            <div className="text-center md:text-right text-amber-100">
              <p className="text-sm">&copy; 2025 Jesus & Coffee. All rights reserved.</p>
              <p className="text-sm italic mt-1">Strength in Numbers</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
