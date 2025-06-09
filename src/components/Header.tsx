import React, { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-coral" />
            <div>
              <h1 className="font-playfair text-2xl font-bold text-charcoal">MumbaiLore</h1>
              <p className="font-lora text-xs text-gray-600">Stories of the City</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#stories" className="font-lora text-charcoal hover:text-coral transition-colors">Stories</a>
            <a href="#gallery" className="font-lora text-charcoal hover:text-coral transition-colors">Gallery</a>
            <a href="#poetry" className="font-lora text-charcoal hover:text-coral transition-colors">Poetry</a>
            <a href="#street-art" className="font-lora text-charcoal hover:text-coral transition-colors">Street Art</a>
            <button className="bg-coral text-white px-6 py-2 rounded-full font-lora hover:bg-coral/90 transition-colors">
              Share Your Story
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <a href="#stories" className="font-lora text-charcoal hover:text-coral transition-colors">Stories</a>
              <a href="#gallery" className="font-lora text-charcoal hover:text-coral transition-colors">Gallery</a>
              <a href="#poetry" className="font-lora text-charcoal hover:text-coral transition-colors">Poetry</a>
              <a href="#street-art" className="font-lora text-charcoal hover:text-coral transition-colors">Street Art</a>
              <button className="bg-coral text-white px-6 py-2 rounded-full font-lora hover:bg-coral/90 transition-colors w-fit">
                Share Your Story
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;