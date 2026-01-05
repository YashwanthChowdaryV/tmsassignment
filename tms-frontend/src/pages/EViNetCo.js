import React from 'react';
import { Link } from 'react-router-dom';

const EViNetCo = () => {
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
                <div class="text-green-100 text-opacity-10">
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
            <Link to="/life-sciences" className="hover:text-blue-600">Our Programs</Link>
            <span className="mx-2">›</span>
            <span className="text-blue-600 font-medium">EViNetCo-wing</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EViNetCo-wing</h1>
            <p className="text-xl text-gray-600 mb-4">Every Village with InterNet Computer</p>
            <div className="h-1 w-24 bg-green-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Inspiration */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Inspiration</h3>
              <p className="text-gray-700">
                This project is truly inspired from <span className="font-semibold">Provision of Urban Amenities in Rural Areas (PURA)</span> 
                project which was introduced by our former President Dr. A.P.J. Abdul Kalam.
              </p>
            </div>

            {/* Concept Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">EViNetCo Concept</h2>
              
              <p className="text-gray-700 mb-6">
                EViNetCo stands for <span className="font-semibold text-green-700">Every Village with InterNet Computer</span> (ref. as Node). 
                As the name says, the idea behind this project is to bring internet facilities to rural areas.
              </p>
              
              <p className="text-gray-700 mb-6">
                Nowadays internet is the biggest tool or medium to reach anybody anywhere in the world, 
                and it is the easiest, most effective way of information sharing medium of all. In addition, 
                the internet is getting faster and cheaper every day.
              </p>

              {/* Methods */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Node Formation Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">💻</span> Collecting Existing Nodes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Whoever already has computers/laptops in the villages.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🎁</span> Creating New Nodes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Giving away computers/laptops (any useful hardware) to the eligible credits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="mr-3 text-green-600 mt-1">📚</span>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Computer Literacy</h4>
                      <p className="text-gray-600 text-sm">Young graduates/interested villagers will benefit from Computer knowledge.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-green-600 mt-1">🌾</span>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Agricultural Connectivity</h4>
                      <p className="text-gray-600 text-sm">To connect the world with Villages where agriculture dominates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-green-600 mt-1">🌍</span>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Global Problem Solving</h4>
                      <p className="text-gray-600 text-sm">Indians around the world can address problems faced in remote areas.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-green-600 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Information Access</h4>
                      <p className="text-gray-600 text-sm">Thirst and opportunities for information can be created.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - FIXED: Full image visibility */}
            <div className="mb-10">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 flex justify-center items-center bg-gray-50">
                <img 
                  src="/images/evinetco.jpg" 
                  alt="EViNetCo Rural Digital Connectivity"
                  className="max-w-full max-h-[500px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="bg-gradient-to-br from-green-50 to-blue-50 w-full h-64 md:h-80 flex items-center justify-center">
                        <div class="text-center p-6">
                          <div class="text-5xl mb-4">🌐</div>
                          <h3 class="text-xl font-semibold text-gray-800 mb-2">Digital Connectivity for Villages</h3>
                          <p class="text-gray-600">Bridging the digital divide in rural India</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-700">
                  <span className="font-semibold">IndiaYouth.info</span> is proud to announce its steps towards EViNetCo 
                  in spreading its nodes. This example illustrates the reason, the people involved in as encouraging 
                  factors to one of IndiaYouth.info member Prof. JVD Murthy has been chosen to extend his blessings 
                  for the journey of IndiaYouth.info and through him Mr. B. Ram Chander Ayyappa has been chosen as 
                  part of IndiaYouth.info infrastructure as benefactor.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team & Supporters</h2>
              
              <div className="space-y-8">
                {/* Prof. JVD Murthy */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-0">
                        <span className="text-2xl">👨‍🏫</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Prof. JVD Murthy</h3>
                      <p className="text-gray-600 mb-3">
                        A vastly experienced German Language professor. As the Head of the German Department 
                        in Osmania university, and a Professor imparting knowledge on a daily basis, he has 
                        begun a journey to interact with the youth of today.
                      </p>
                      <p className="text-gray-700">
                        With his blessings, goodwill, and contributions, IndiaYouth.info is trying to advertise 
                        its purpose. Under his esteemed guidance, IndiaYouth.info is hoping to reach out to many 
                        more young minds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* B. Ram Chander Ayyappa */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-0">
                        <span className="text-2xl">🧪</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">B. Ram Chander Ayyappa</h3>
                      <p className="text-gray-600 mb-3">
                        Currently a teacher and is also pursuing his Masters in Chemistry. After facing a lot 
                        of difficulty at a young age, he believed in his skills of teaching, where he can share 
                        more with the student community.
                      </p>
                      <p className="text-gray-700 mb-3">
                        Although he is from the city (in contrast to the motto of EViNetCo where a person from 
                        the village is aided with necessary tools in contributing towards the development of the 
                        nation), he has been provided with a laptop as IndiaYouth.info wants to promote future 
                        events more fruitfully.
                      </p>
                      <p className="text-gray-700">
                        His constant interaction with students in the age group of 12 to 16 years can be a very 
                        huge benefit to increase the network of credits. IndiaYouth.info is expecting many 
                        forthcoming credits coming from his students for contributing to the development of India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact and Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Call to Action - Like AgriWing */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Join Our Network</h3>
                  <p className="text-gray-700 mb-6">
                    If you are the person or if you have information of any person who is eligible to increase this network, 
                    please furnish details here:
                  </p>
                  <div className="space-y-4">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      Register Interest
                    </button>
                    <div>
                      <p className="text-gray-600 mb-1">Contact</p>
                      <p className="text-blue-600 font-medium">evinetco@tmsfoundation.org</p>
                      <p className="text-gray-500 text-sm mt-1">For node registration and queries</p>
                    </div>
                  </div>
                </div>

                {/* Explore Other Programs - Like AgriWing */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Explore Other Programs</h3>
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
                    <Link to="/agri-wing" className="block p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 transition-colors">
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

export default EViNetCo;