import React from 'react';
import { Camera, Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-coral" />
              <div>
                <h3 className="font-playfair text-2xl font-bold">MumbaiLore</h3>
                <p className="font-lora text-sm text-gray-300">Stories of the City</p>
              </div>
            </div>
            <p className="font-lora text-gray-300 mb-6 max-w-md leading-relaxed">
              Celebrating Mumbai's rich tapestry of stories, cultures, and hidden gems. 
              Join our community of storytellers and discover the soul of the city.
            </p>
            <div className="flex items-center gap-2 text-coral">
              <Heart className="h-4 w-4" />
              <span className="font-lora text-sm">Made with love in Mumbai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#stories" className="font-lora text-gray-300 hover:text-coral transition-colors">Photo Stories</a></li>
              <li><a href="#videos" className="font-lora text-gray-300 hover:text-coral transition-colors">Video Narratives</a></li>
              <li><a href="#poetry" className="font-lora text-gray-300 hover:text-coral transition-colors">Poetry Corner</a></li>
              <li><a href="#street-art" className="font-lora text-gray-300 hover:text-coral transition-colors">Street Art</a></li>
              <li><a href="#insights" className="font-lora text-gray-300 hover:text-coral transition-colors">Cultural Insights</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors">Share Your Story</a></li>
              <li><a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors">Guidelines</a></li>
              <li><a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors">Featured Contributors</a></li>
              <li><a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors">Events</a></li>
              <li><a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-lora text-gray-300 text-sm">
              © 2024 MumbaiLore.com. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors text-sm">Terms of Service</a>
              <a href="#" className="font-lora text-gray-300 hover:text-coral transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;