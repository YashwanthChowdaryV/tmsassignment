import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LifeSciences from './pages/LifeSciences';
import EViNetCo from './pages/EViNetCo';
import AgriWing from './pages/AgriWing';
import AboutPage from './pages/AboutPage';
import CAiSMD from './pages/CAiSMD';

function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">


      <div className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Column - Text Content (Centered within column) */}
              <div className="lg:w-1/2">
                <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Tarunavadaanenasaha Muktbharatonnayana Samstha (TMS)
                  </h1>
                  
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <span className="text-2xl mr-3">🕉️</span>
                    <p className="text-xl md:text-2xl font-serif text-gray-800">
                      तरुणावदानेनसह मुक्तभारतोन्नयनसंस्था
                    </p>
                  </div>
                  
                  <div className="max-w-md">
                    <p className="text-lg text-gray-700 italic border-l-4 border-blue-600 pl-4 py-2">
                      "Open Bharat development with Youth Contribution foundation."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/hero.jpg" 
                    alt="Youth for Developed India"
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 h-64 md:h-80 flex items-center justify-center rounded-xl">
                          <div class="text-center p-6">
                            <div class="text-5xl mb-4">🇮🇳</div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-2">Youth for Developed India</h3>
                            <p class="text-gray-600">Empowering young minds since 2006</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section id="about-home" className="py-16 bg-gray-50/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">About Us</h2>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We at <span className="font-semibold text-blue-600">TMS</span> are a group of 
                  task-driven knowledge inquisitive people spread across different places but 
                  united through a mission, that is, to ensure the development of India with 
                  the contribution of youth while empowering themselves, and for this mission of ours, 
                  we are also known as <span className="font-semibold">IndiaYouth(IY)</span> as the website name suggests.
                </p>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-blue-100 rounded-lg flex-shrink-0">✨</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Since 2006</h4>
                      <p className="text-gray-600">
                        IY's cogitation has led towards creating a pathway for the young minds 
                        and inspiring them to work in an open development environment.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Here <span className="font-medium text-blue-600">open collaboration</span> denotes 
                  a system of innovation or production that relies on goal-oriented yet loosely 
                  coordinated participants, who interact over a task which is beneficial for 
                  Bharat development, subsequently, the results of the task are made available 
                  to contributors and non-contributors alike.
                </p>
              </div>

              {/* Ocean Quote */}
              <div className="flex justify-center">
                <div className="inline-flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 max-w-2xl">
                  <span className="text-3xl mr-4">🌊</span>
                  <p className="text-gray-700 italic">
                    "We have miles to go and an ocean of knowledge to explore in order to 
                    enhance our contributions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PM QUOTE IMAGE SECTION */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="/images/song.png" 
                alt="PM Quote"
                className="w-full h-64 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="h-64 bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center p-6 rounded-xl">
                      <div class="text-center">
                        <div class="text-4xl mb-4">💡</div>
                        <p class="text-gray-700 font-medium italic">
                          "Don't dream of becoming something<br/>
                          Dream of doing something"
                        </p>
                        <p class="text-gray-500 text-sm mt-2">- Prime Minister of Bharat</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </section>

        {/* SONG OF YOUTH SECTION */}
        <section id="song" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Song Of Youth</h2>
              <p className="text-gray-600">By Dr. A.P.J. Abdul Kalam</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="space-y-6">
                <p className="text-gray-700 italic">
                  As a young citizen of India, armed with technology, knowledge, and love for my nation, 
                  I realize, small aim is a crime.
                </p>
                
                <p className="text-gray-700 italic">
                  I will work and sweat for a great vision, the vision of transforming India into a 
                  developed nation, powered by economic strength with value system.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 my-6 border-l-4 border-blue-500">
                  <p className="text-gray-800 font-medium">
                    "The ignited soul compared to any resource is the most powerful resource on the earth, 
                    above the earth and under the earth."
                  </p>
                </div>
                
                <p className="text-gray-700 italic">
                  I will keep the lamp of knowledge burning to achieve the vision - Developed India.
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-300 text-right">
                  <p className="text-gray-700 font-semibold">— Dr. A.P.J. Abdul Kalam</p>
                  <p className="text-gray-500 text-sm">Former President of India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life-sciences" element={<LifeSciences />} />
          <Route path="/evinetco" element={<EViNetCo />} />
          <Route path="/agri-wing" element={<AgriWing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/caismd" element={<CAiSMD />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;