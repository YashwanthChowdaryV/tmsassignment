import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiSearch, FiX as FiXIcon } from 'react-icons/fi';

const SearchBar = ({ onClose, isMobile }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Define all searchable pages with keywords
  const searchablePages = [
    {
      title: 'Home',
      path: '/',
      description: 'Main homepage',
      keywords: ['home', 'main', 'welcome', 'start', 'landing', 'dashboard']
    },
    {
      title: 'Life Sciences Wing',
      path: '/life-sciences',
      description: 'Biological sciences research and programs',
      keywords: ['life', 'sciences', 'biology', 'medical', 'research', 'health', 'biotech', 'science', 'laboratory']
    },
    {
      title: 'EViNetCo-wing',
      path: '/evinetco',
      description: 'Electric Vehicles and Networking',
      keywords: ['ev', 'electric', 'vehicles', 'networking', 'transport', 'automotive', 'green', 'environment', 'sustainable']
    },
    {
      title: 'Agri Wing',
      path: '/agri-wing',
      description: 'Agriculture and farming initiatives',
      keywords: ['agriculture', 'agri', 'farming', 'crops', 'farm', 'rural', 'food', 'organic', 'cultivation']
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'About TMS Foundation and our mission',
      keywords: ['about', 'mission', 'vision', 'who we are', 'organization', 'foundation', 'team', 'history', 'values']
    },
    {
      title: 'CAiSMD Main',
      path: '/caismd',
      description: 'Conference on Artificial Intelligence and Smart Materials',
      keywords: ['caismd', 'conference', 'ai', 'artificial intelligence', 'smart materials', 'workshop', 'event', 'meeting']
    },
    {
      title: 'CAiSMD Flyer',
      path: '/caismd#flyer',
      description: 'Conference flyer and brochure',
      keywords: ['flyer', 'brochure', 'poster', 'event details', 'information', 'promotion']
    },
    {
      title: 'CAiSMD Workshop',
      path: '/caismd#workshop',
      description: 'Workshop sessions and details',
      keywords: ['workshop', 'session', 'training', 'hands-on', 'tutorial', 'learning', 'practical']
    },
    {
      title: 'CAiSMD Speakers',
      path: '/caismd#speakers',
      description: 'Conference speakers and panelists',
      keywords: ['speakers', 'panelists', 'experts', 'presenters', 'faculty', 'lecturers', 'professors']
    },
    {
      title: 'Registration Form',
      path: '/caismd#registration',
      description: 'Conference registration form for 2024',
      keywords: ['registration', 'register', 'form', 'sign up', '2024', 'apply', 'enroll', 'participate']
    },
    {
      title: 'CAiSMD Schedule',
      path: '/caismd#schedule',
      description: 'Conference schedule and timeline',
      keywords: ['schedule', 'timeline', 'agenda', 'program', 'calendar', 'time', 'plan']
    },
    {
      title: 'CAiSMD Downloads',
      path: '/caismd#downloads',
      description: 'Conference materials and downloads',
      keywords: ['downloads', 'materials', 'resources', 'documents', 'files', 'papers', 'presentations']
    },
    {
      title: 'Contact Organizers',
      path: '/caismd#contact',
      description: 'Contact conference organizers',
      keywords: ['contact', 'organizers', 'email', 'reach', 'help', 'support', 'inquire', 'question']
    },
    {
      title: 'Organizers',
      path: '/caismd#organizers',
      description: 'Conference organizing committee',
      keywords: ['organizers', 'committee', 'team', 'coordinators', 'staff', 'administration']
    },
    {
      title: 'CAiSMD 2022',
      path: '/caismd#2022',
      description: 'Previous conference 2022 details',
      keywords: ['2022', 'previous', 'past', 'archive', 'history', 'earlier']
    },
    {
      title: 'CAiSMD 2021',
      path: '/caismd#2021',
      description: 'Previous conference 2021 details',
      keywords: ['2021', 'previous', 'past', 'archive', 'history', 'earlier']
    }
  ];

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setIsDropdownOpen(false);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = searchablePages.filter(page => {
      // Check in title
      if (page.title.toLowerCase().includes(term)) return true;
      
      // Check in description
      if (page.description.toLowerCase().includes(term)) return true;
      
      // Check in keywords
      if (page.keywords.some(keyword => keyword.toLowerCase().includes(term))) return true;
      
      return false;
    });

    setSuggestions(filtered);
    setIsDropdownOpen(filtered.length > 0);
  }, [searchTerm]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchTerm('');
    setIsDropdownOpen(false);
    if (onClose) onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0].path);
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      if (isMobile && onClose) onClose();
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${isMobile ? 'w-full' : 'w-full max-w-md'}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(suggestions.length > 0)}
          placeholder="Search pages, programs, CAiSMD..."
          className={`block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            isMobile ? 'text-base' : 'text-sm'
          }`}
          autoFocus={isMobile}
        />
        
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <FiXIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {isDropdownOpen && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="py-2">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Found {suggestions.length} result{suggestions.length !== 1 ? 's' : ''}
            </div>
            
            {suggestions.map((page, index) => (
              <button
                key={`${page.path}-${index}`}
                onClick={() => handleSuggestionClick(page.path)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{page.title}</div>
                    <div className="text-sm text-gray-600 mt-1 line-clamp-2">{page.description}</div>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      page.path.startsWith('/caismd#') 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {page.path.startsWith('/caismd#') ? 'Section' : 'Page'}
                    </span>
                  </div>
                </div>
                
                {page.keywords && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {page.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {keyword}
                      </span>
                    ))}
                    {page.keywords.length > 3 && (
                      <span className="text-xs text-gray-500">+{page.keywords.length - 3} more</span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="border-t border-gray-200 px-4 py-2 bg-gray-50 rounded-b-lg">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Press <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs mx-1">Enter</kbd> to select first result</span>
              <span>Press <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs mx-1">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
      
      {/* No results message */}
      {searchTerm && !isDropdownOpen && suggestions.length === 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <div className="text-center">
            <FiSearch className="h-10 w-10 mx-auto mb-3 text-gray-300" />
            <p className="text-gray-700 font-medium">No results found for "{searchTerm}"</p>
            <p className="text-sm text-gray-500 mt-2">Try searching for pages, programs, or CAiSMD sections</p>
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['workshop', 'registration', 'speakers', 'agriculture', 'ev', 'life sciences'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Our Programs', 
      path: '#',
      dropdown: true,
      items: [
        { name: 'Life Sciences Wing', path: '/life-sciences' },
        { name: 'EViNetCo-wing', path: '/evinetco' },
        { name: 'Agri Wing', path: '/agri-wing' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'CAiSMD', path: '/caismd' },
  ];

  // Mobile menu items
  const mobileMenuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Our Programs',
      dropdown: true,
      items: [
        { name: 'Life Sciences Wing', path: '/life-sciences' },
        { name: 'EViNetCo-wing', path: '/evinetco' },
        { name: 'Agri Wing', path: '/agri-wing' },
      ]
    },
    { name: 'About', path: '/about' },
    { 
      name: 'CAiSMD',
      dropdown: true,
      items: [
        { name: 'CAiSMD Main', path: '/caismd' },
        { name: 'Flyer', path: '/caismd#flyer' },
        { name: 'Workshop', path: '/caismd#workshop' },
        { name: 'Speakers', path: '/caismd#speakers' },
        { name: 'Registration Form-2024', path: '/caismd#registration' },
        { name: 'Schedule', path: '/caismd#schedule' },
        { name: 'Downloads', path: '/caismd#downloads' },
        { name: 'Contact Organizers', path: '/caismd#contact' },
        { name: 'Organizers', path: '/caismd#organizers' },
        { name: 'CAiSMD 2022', path: '/caismd#2022' },
        { name: 'CAiSMD 2021', path: '/caismd#2021' },
      ]
    }
  ];

  // Close mobile menu when search opens
  useEffect(() => {
    if (showSearch) {
      setIsMenuOpen(false);
    }
  }, [showSearch]);

  // Close search when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      setShowSearch(false);
    }
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="TMS Foundation Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%231e40af'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3ETMS%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-gray-900">TMS Foundation</div>
                <div className="text-xs text-gray-500">IndiaYouth Initiative</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                      <FiChevronDown className={`ml-1 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Search and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Search - Show search bar or search button */}
            <div className="hidden md:block">
              {showSearch ? (
                <div className="w-64 transition-all duration-300 ease-in-out">
                  <SearchBar onClose={() => setShowSearch(false)} isMobile={false} />
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  title="Search"
                  aria-label="Search"
                >
                  <FiSearch size={20} />
                </button>
              )}
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={() => {
                setShowSearch(!showSearch);
                setIsMenuOpen(false);
              }}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              {showSearch ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setShowSearch(false);
              }}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden py-3 border-t border-gray-100 animate-fadeIn">
            <SearchBar onClose={() => setShowSearch(false)} isMobile={true} />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <div className="space-y-1">
              {mobileMenuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div className="px-4">
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600"
                      >
                        <span className="font-medium">{item.name}</span>
                        <FiChevronDown className={`transition-transform duration-200 ${openDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openDropdown === `mobile-${item.name}` && (
                        <div className="pl-4 space-y-2 mt-2 animate-fadeIn">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setShowSearch(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setShowSearch(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;