import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is तरुणावदानेनसह मुक्तभारतोन्नयनसंस्था mean?',
      answer: 'TMS meaning - Tarunavadaanenasaha Muktbharatonnayana Samstha means "Open Bharat development with Youth Contribution foundation"'
    },
    {
      question: 'What is Tarunavadaanenasaha Muktbharatonnayana Samstha (TMS) or IndiaYouth(IY) in simple words?',
      answer: 'TMS (Indiayouth info) is a virtual place to contribute our energies in the development of India. It spreads itself into all the areas and fields which are necessary for the development of India. In other words it is a virtual world to all the young minded persons of India to share their knowledge for the competitive development of India. Our vision is to form a Virtual Network spreading throughout India with all virtual world equipment to the members.'
    },
    {
      question: 'Why TMS (indiayouth.info)?',
      answer: `Let's start a small real time example. You are working for some Y company and it takes some X time to go to the office everyday. If you are given a chance to work at home, you will save that X time everyday. But you/your company is not sure with the results of your work at home as it is so hard to communicate with your teammates. But if you are independent with your tasks, for sure it is the same whether you are at home or you are at the company or you are in some other country. If you are at home, you are benefited with that X time and most importantly there is flexibility and freedom in doing things at home. Likewise, TMS provides the flexibility and freedom in doing things of your own interest from any part of the world. TMS acts as a platform to excel your skills by interacting in the group to contribute to our Nation.`
    },
    {
      question: 'Why the term Indiayouth.info why not just Indiayouth?',
      answer: 'The extension .info stands for information. Indiayouth.info\'s focus is to reach rural areas with all the useful information and educating the farmers, villagers with the important information and latest updates. The people who are associating Indiayouth should not forget the motto of the formation of Indiayouth and it is just a reminder for everybody to spread all the positive and useful information as much as. Thus Indiayouth is always termed as Indiayouth.info'
    },
    {
      question: 'What Indiayouth.info is expecting from the people?',
      answer: 'Most importantly the zeal to do something for others and then comes the gained knowledge, available resources, little bit free time and organizing things in accordance with the personal life as personal life should be the highest priority for everybody.'
    },
    {
      question: 'I have heard the word PURA, what is it all about?',
      answer: 'One of Indiayouth.info\'s esteemed projects EViNetCo is inspired from the PURA project. PURA stands for Provision of Urban amenities in Rural Areas and was introduced by famous Indian scientist and former Indian president Dr.A.P.J. Abdul Kalam. In short PURA\'s mission is Providing connectivities to village complexes in an urgent need to bridge the rural-urban divide, generate employment and enhance rural prosperity. The integrated methods which will bring prosperity to rural India is through PURA.'
    },
    {
      question: 'How can we reach rural areas from the rest of the world?',
      answer: 'The Internet is the biggest tool or medium to reach anybody anywhere in the world and it is the easiest, most effective way of information sharing medium of all. In addition, the Internet is getting faster and cheaper every day. If there is a node (person with computer and internet) in a village, that person can act as a medium between village and rest of the world through the Internet.'
    },
    {
      question: 'What are the benefits/What we can expect from this?',
      answer: `From the statistics, it can be seen that everybody is preferring to live in urban areas by leaving rural places aside. Day-by-day all the villages are getting emptied. All the people are migrating to cities with the hope of getting a job easily, with better facilities and better education for their children. Indiayouth.info is focusing on helping villagers to stop migrating to cities for their survival and helping the villagers with various business chances and work opportunities and educating them with the information what Indiayouth.info has. The members who associate most of the time are students, technocrats with at least little internet knowledge can see the rest of the world with a real view to provide some help to the people who live in rural areas.`
    },
    {
      question: 'How can I be benefited?',
      answer: 'One can explore opportunities possible with their knowledge in contributing to Bharat. When we work on many new things we gain experience and it gives us the opportunity to work on new challenges. You will also gain information from other fields and one can work as a team with others to get some better works accomplished.'
    },
    {
      question: 'Who can assist in these projects?',
      answer: 'Although TMS expects to work independently but if there are people who already worked on any subject they can surely avail their experience. And as the time goes on human brain resources in the group keeps increasing and so you can get more assistance. If you are a beginner in your career then it is the best place to get to know about the real working nature.'
    },
    {
      question: 'How do we find people in villages?',
      answer: 'As of now we are searching people through social networks and mouth to mouth. And if you know anyone who is interested and from a village background please do tell us about them here, please inform us if you find any difficulty in filling the form.'
    },
    {
      question: 'Still there is so much unemployment in most cities in India, why do you want to educate villagers and send them to un-employed crowd?',
      answer: 'Yes, there is a lot of unemployment in cities which is increasing with one of the reasons due to people coming to cities. By educating villagers it will give opportunity to villagers to develop their place and give scope to other people and themselves to lead a better life in villages instead of migrating to cities. We encourage people to stay back in villages and try to improve their living in villages.'
    },
    {
      question: 'Money is the most important thing of all, how do you fund?',
      answer: 'Money is the important thing but not the most important thing of all. Most of the people replaced the word contribution with money, but here contribution means not only money but utilising whatever the possible resources you have e.g. your skills, computer knowledge time and if possible money. But money is not the only resource we meant. This is also a great investment and funding for TMS.'
    }
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
            <span className="text-blue-600 font-medium">About</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About TMS Foundation</h1>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Main Content */}
            <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Tarunavadaanenasaha Muktbharatonnayana Samstha (TMS)
              </h3>
              
              <p className="text-gray-700 mb-6">
                <span className="font-semibold text-blue-600">Transcribed from Sanskrit:</span>{' '}
                <span className="text-xl font-serif">तरुणावदानेनसह मुक्तभारतोन्नयनसंस्था</span>
              </p>
              
              <p className="text-gray-700 mb-6">
                Which means <span className="font-semibold italic">"Open Bharat development with Youth Contribution foundation."</span>
              </p>
              
              <p className="text-gray-700">
                We at TMS are a group of task driven knowledge inquisitive people spread across different places but united through a mission, that is, to ensure the development of India with the contribution of youth while empowering themselves, and for this mission of ours we are also known as <span className="font-semibold">IndiaYouth(IY)</span> as the website name suggests.
              </p>
            </div>

            {/* Join Us Section */}
            <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Vision</h3>
              <p className="text-gray-700 mb-6">
                Be part of our mission to empower youth and contribute to India's development.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScn-9id8c_9HYxLESzROLs1nu8r-fvrTBuJ3jSv1sBu1Ghw5Q/viewform" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Fill TMS Membership Form
              </a>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                      <span className="text-blue-600 text-xl transform transition-transform duration-300">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-[1000px]' : 'max-h-0'
                      }`}
                    >
                      <div className="p-6 pt-0 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                      <p className="text-gray-600 mb-1">General Inquiries</p>
                      <p className="text-blue-600 font-medium">contact@tmsfoundation.org</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Website</p>
                      <p className="text-gray-700">indiayouth.info</p>
                    </div>
                  </div>
                </div>

                {/* Explore Programs */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Explore Our Programs</h3>
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

export default AboutPage;