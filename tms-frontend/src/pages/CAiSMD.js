import React from 'react';
import { Link } from 'react-router-dom';

const CAiSMD = () => {
  const caismdItems = [
    'CAiSMD main',
    'Flyer',
    'Workshop',
    'Speakers',
    'Registration Form-2024',
    'Schedule',
    'Downloads',
    'Contact Organizers',
    'Organizers',
    'CAiSMD 2022',
    'CAiSMD 2021'
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Logo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/images/logo.png" 
            alt="TMS Logo Background"
            className="opacity-5 w-96 h-96 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.innerHTML = `
                <div class="text-purple-100 text-opacity-10">
                  <div class="text-9xl font-bold">TMS</div>
                  <div class="text-lg mt-2 text-center">TMS Foundation</div>
                </div>
              `;
            }}
          />
        </div>
      </div>

      <div className="relative z-10 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-blue-600 font-medium">CAiSMD</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CAiSMD</h1>
            <p className="text-xl text-gray-600 mb-4">Conference on Artificial Intelligence in Science, Medicine & Development</p>
            <div className="h-1 w-24 bg-purple-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border border-purple-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to CAiSMD</h3>
              <p className="text-gray-700 mb-4">
                The Conference on Artificial Intelligence in Science, Medicine & Development (CAiSMD) 
                is our flagship annual event that brings together researchers, practitioners, and 
                students to explore the transformative potential of AI across various domains.
              </p>
              <p className="text-gray-700">
                This platform serves as a convergence point for cutting-edge research, innovative applications, 
                and collaborative opportunities in the field of artificial intelligence.
              </p>
            </div>

            {/* Content Coming Soon */}
            <div className="mb-10">
              <div className="text-center p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-300">
                <div className="inline-block p-6 bg-purple-100 rounded-full mb-6">
                  <span className="text-4xl">📢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Content Coming Soon</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We are currently preparing comprehensive content for the CAiSMD conference section. 
                  Detailed information about speakers, workshops, schedules, and registration will be 
                  available here shortly.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg">
                  <span className="mr-2">⏳</span>
                  <span>Under Development</span>
                </div>
              </div>
            </div>

            {/* CAiSMD Pages Navigation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">CAiSMD Sections</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {caismdItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`p-6 border-gray-200 hover:bg-gray-50 transition-colors ${
                        index < caismdItems.length - 1 ? 'border-b' : ''
                      } ${index % 3 !== 2 && 'md:border-r'} ${index < caismdItems.length - 3 && 'lg:border-b'}`}
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-3 bg-purple-50 rounded-lg">
                          <span className="text-purple-600">📄</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{item}</h4>
                          <p className="text-gray-500 text-sm mt-1">Content will be updated soon</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conference Highlights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Conference Highlights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Keynote Presentations</h4>
                  <p className="text-gray-600 text-sm">
                    Insights from leading AI researchers and industry experts on latest advancements.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Workshops</h4>
                  <p className="text-gray-600 text-sm">
                    Hands-on sessions on machine learning, deep learning, and AI applications.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Research Papers</h4>
                  <p className="text-gray-600 text-sm">
                    Presentation of cutting-edge research in AI for science and medicine.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Networking</h4>
                  <p className="text-gray-600 text-sm">
                    Opportunities to connect with AI professionals and researchers.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact and Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Contact for Updates</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 mb-1">For Conference Information</p>
                      <p className="text-blue-600 font-medium">caismd@tmsfoundation.org</p>
                      <p className="text-gray-500 text-sm mt-1">Check back soon for detailed updates</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Expected Launch</p>
                      <p className="text-gray-700">Early 2024</p>
                    </div>
                  </div>
                </div>

                {/* Explore Other Programs */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Explore Our Active Programs</h3>
                  <div className="space-y-4">
                    <Link to="/life-sciences" className="block p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 transition-colors">
                      <div className="flex items-center">
                        <span className="mr-3 text-blue-600">🧬</span>
                        <div>
                          <div className="font-medium">Life Sciences Wing</div>
                          <div className="text-sm text-gray-500">Open source research and computational biology</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/evinetco" className="block p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 transition-colors">
                      <div className="flex items-center">
                        <span className="mr-3 text-green-600">🌿</span>
                        <div>
                          <div className="font-medium">EViNetCo-wing</div>
                          <div className="text-sm text-gray-500">Digital connectivity for rural areas</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/agri-wing" className="block p-4 bg-gray-50 hover:bg-amber-50 rounded-lg border border-gray-200 transition-colors">
                      <div className="flex items-center">
                        <span className="mr-3 text-amber-600">🌾</span>
                        <div>
                          <div className="font-medium">Agri Wing</div>
                          <div className="text-sm text-gray-500">Sustainable agriculture and food security</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAiSMD;