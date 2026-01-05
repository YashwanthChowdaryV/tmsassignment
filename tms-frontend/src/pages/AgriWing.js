import React from 'react';
import { Link } from 'react-router-dom';

const AgriWing = () => {
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
                <div class="text-amber-100 text-opacity-10">
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
            <span className="text-blue-600 font-medium">Agri Wing</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Agri Wing</h1>
            <p className="text-xl text-gray-600 mb-4">Sustainable Agriculture & Farmer Empowerment</p>
            <div className="h-1 w-24 bg-amber-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Mission Section */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-8 border border-amber-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Agriculture wing assists farmers in rural areas and provides solutions for their problems 
                by discussing with responsible institutions, officials, researchers, and keeps updating 
                rural areas with the new ways of farming, introducing new technologies in farming.
              </p>
              <p className="text-gray-700 mt-4 font-semibold">
                The idea behind this wing's formation is to bring farmers and technology together to 
                achieve profitable yields.
              </p>
            </div>

            {/* Agriculture in India */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Agriculture in India</h2>
              
              <p className="text-gray-700 mb-6">
                Agriculture in India has a long history dating back to ten thousand years. Today, India 
                ranks second worldwide in farm output. Agriculture and allied sectors like forestry and 
                logging accounted for 17.5% of the GDP in 2009, employed 52% of the total workforce and 
                despite a steady decline of its share in the GDP, is still the largest economic sector 
                and plays a significant role in the overall socio-economic development of India.
              </p>

              {/* India's Agricultural Achievements */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">India's Agricultural Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🥇</span> World's Largest Producer
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Milk, cashew nuts, coconuts, tea, ginger, turmeric, black pepper. 
                      World's largest cattle population (281 million).
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🥈</span> Second Largest Producer
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Wheat, rice, sugar, groundnut, and inland fish.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🥉</span> Third Largest Producer
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tobacco. Accounts for 10% of world fruit production, first rank in banana and sapota.
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">📈</span> Current Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">
                      India's population is growing faster than its ability to produce rice and wheat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                A young farmer producing huge profits with diverse crops and latest agricultural methods
              </h2>
              <p className="text-gray-700">
                People who are engaged with politics cannot focus on other fields. They have to concentrate 
                on politics only. But there is a young gun from Kurnool district of Andhra Pradesh state, 
                basically an Agriculture graduate, associated with politics, attracting everybody with his 
                diverse agriculture crops. He is none other than Ruddireddy Radhakrishna, Loksatta party 
                in-charge of Allagadda constitution.
              </p>
            </div>

            {/* Image Section - FIXED: Full image visibility */}
            <div className="mb-10">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 flex justify-center items-center bg-gray-50">
                <img 
                  src="/images/agriwing.jpg" 
                  alt="Agricultural Success Story - Ruddireddy Radhakrishna"
                  className="max-w-full max-h-[500px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="bg-gradient-to-br from-green-50 to-amber-50 w-full h-64 md:h-80 flex items-center justify-center">
                        <div class="text-center p-6">
                          <div class="text-5xl mb-4">🌾</div>
                          <h3 class="text-xl font-semibold text-gray-800 mb-2">Modern Farming Success</h3>
                          <p class="text-gray-600">Innovative agriculture methods in rural India</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="text-center text-gray-500 text-sm mb-6">
                Source: Eenadu Telugu newspaper dated Wednesday, 8th December 2010.
              </div>
            </div>

            {/* Radhakrishna Story */}
            <div className="mb-10">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Radhakrishna born in Kandukooru. Although he comes from an agricultural family and graduated 
                  in Agriculture, he was not convinced with the system and never tried for any jobs. He has 
                  chosen his 30-acre agricultural land as his employment and farming different crops in that land.
                </p>
                
                <p className="text-gray-700">
                  When all other farmers from this region are farming regular crops like Paddy, Cotton, 
                  Radhakrishna chose Kalingara (Melon), Rose, Yellow lentil (Toor dal) [1] of type PRG 158. 
                  As he is graduated in Agriculture, he has become an inspiration to fellow farmers by showing 
                  successful experiments in crops.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Profit Analysis</h4>
                  <p className="text-gray-700">
                    Mainly in Kalingara (Melon) crop, he invested only Rs.6,000. Melons weighing round about 
                    20Kgs, the crop is worth Rs. 12,000 and it takes only 65 days for each crop term. 
                    <span className="font-semibold"> "There will be a profit of almost one lakh rupees for one-acre land,"</span> says 
                    Radhakrishna, <span className="font-semibold">"I am farming Rose for the first time. Yellow lentil of type PRG 158 
                    can sustain in the lands where there is a scarcity of water"</span> [2].
                  </p>
                </div>
                
                <p className="text-gray-700">
                  When many politicians are enjoying royal life, he is getting huge profits by having a 
                  strong belief in his agricultural land and his education in Agriculture.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-10">
              <div className="border-l-4 border-amber-500 pl-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">"I believe in land"</h3>
                <p className="text-gray-700 italic mb-4">
                  "Although I am an Agriculture graduate, I never had faith in this field to do a job. 
                  That is why I chose my favorite field of work, Agriculture farming. I want to change 
                  the agriculture methods in this area by experimenting with different crops. I was 
                  attracted towards Loksatta head Jayaprakash Narayana's wishes and taking part actively 
                  in Loksatta."
                </p>
                <p className="text-gray-800 font-semibold">— Ruddireddy Radhakrishna</p>
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
                      <p className="text-blue-600 font-medium">agriwing@tmsfoundation.org</p>
                      <p className="text-gray-500 text-sm mt-1">For farmer support and agricultural queries</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Focus Areas</p>
                      <p className="text-gray-700 text-sm">Technology adoption, sustainable farming, farmer training</p>
                    </div>
                  </div>
                </div>

                {/* Explore Other Programs */}
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
                    <Link to="/evinetco" className="block p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 transition-colors">
                      <div className="flex items-center">
                        <span className="mr-3 text-green-600">🌿</span>
                        <div>
                          <div className="font-medium">EViNetCo-wing</div>
                          <div className="text-sm text-gray-500">Digital connectivity for rural areas</div>
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

export default AgriWing;