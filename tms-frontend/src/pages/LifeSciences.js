import React from 'react';
import { Link } from 'react-router-dom';

const LifeSciences = () => {
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
                <div class="text-blue-100 text-opacity-10">
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
            <Link to="/life-sciences" className="text-blue-600 font-medium">Life Sciences Wing</Link>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Life Sciences Wing</h1>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Wing Overview */}
            <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wing Overview</h3>
              <p className="text-gray-700 mb-4">
                In this category we take the tasks related to subjects of life sciences, in general, 
                the topics can expand to various sectors as listed in the Life sciences Wikipedia page. 
                However, whoever is coming up with a new topic is expected to lead the topic so that 
                it can be pursued consistently.
              </p>
              <p className="text-gray-700">
                The motivation for the wing started with an open-source web-based platform which is for 
                accessible, reproducible, and transparent computational research called Galaxy 
                (<a href="#" className="text-blue-600 hover:underline">Link to the Galaxy article in IY website</a>). 
                Further, the wing is emboldened by COVID-19 pandemic to take up tasks which can help 
                people during this pandemic.
              </p>
            </div>

            {/* Galaxy Platform */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌌</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">UseGalaxy@TMS</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  Galaxy is an open, web-based platform for accessible, reproducible, and transparent 
                  computational research. More specifically, UseGalaxy servers implement a common core 
                  set of tools and reference genomes and are open to anyone to use. They also contain 
                  tools and genomes that are local to each server.
                </p>
                
                <p className="text-gray-700">
                  The UseGalaxy server requires significant computational resources backed by the public 
                  entity of their jurisdiction and they are excellent places to get started with Galaxy 
                  and to share and publish results.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Global Impact</h4>
                  <p className="text-gray-700">
                    These UseGalaxy servers have already shown potential in the regions of the United States, 
                    the European Union, Australia and several other countries. The concept of UseGalaxy 
                    where everyone contributes to the research and development in the field of data science 
                    is an exemplary opportunity for research development in Bharat where still the amount 
                    allocated to research is little (around 0.7% of GDP).
                  </p>
                </div>
                
                <p className="text-gray-700">
                  This serves for the researchers in India to collaborate utilizing resources efficiently. 
                  The philosophy UseGalaxy exactly coincides with the way TMS works about its tasks i.e 
                  with open collaboration and contribution from all the stakeholders.
                </p>
                
                <p className="text-gray-700">
                  To realize the UseGalaxy server in India a public entity should come forward and support 
                  it so that life science researchers can take advantage of UseGalaxy.
                </p>
                
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Building Community</h4>
                  <p className="text-gray-700">
                    However, until the UseGalaxy server is available in the other direction the community 
                    of users along with researchers, developers' presence has to be strong. For this purpose, 
                    TMS has taken up this task of promoting Galaxy and also trying to gather the community.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    If you are interested to know more about the activities visit:
                  </p>
                  <a 
                    href="https://www.galaxyproject.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline text-lg"
                  >
                    www.galaxyproject.in
                  </a>
                  <p className="text-gray-500 text-sm mt-2">
                    On 15th August we had two sessions about Galaxy and how it is applied in life science research.
                  </p>
                </div>
              </div>
            </div>

            {/* COVID-19 Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🦠</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">COVID-19 Initiative</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <p className="text-gray-700 mb-4">
                  In this category we take the tasks related to subjects of life sciences. 
                  The COVID-19 pandemic has demonstrated the intertwined nature of our world 
                  that no one is safe until everyone is safe.
                </p>
                <p className="text-gray-700 mb-4">
                  This pandemic has had many adverse effects on the economic stability of many 
                  countries across the world. Though the fatality of the virus is low, there 
                  have been numerous deaths, and one of the main reasons for it is the lack 
                  of unerring information.
                </p>
                <p className="text-gray-700 font-semibold">
                  We want to extend our support in achieving this cause and as a step towards it.
                </p>
              </div>
            </div>

            {/* Contact and Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 mb-1">Email</p>
                      <p className="text-blue-600 font-medium">galaxy@tmsfoundation.org</p>
                      <p className="text-gray-500 text-sm mt-1">For research collaboration and queries</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Galaxy Platform</p>
                      <a 
                        href="https://www.galaxyproject.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        www.galaxyproject.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Explore Other Programs */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Explore Other Programs</h3>
                  <div className="space-y-4">
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
                        <span className="mr-3 text-amber-600">🌱</span>
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

export default LifeSciences;