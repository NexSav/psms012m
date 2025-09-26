import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Academics', href: '/academics' },
    { name: 'TAG\'s Mission', href: '/about/mission' },
    { name: 'Staff List', href: '/about/staff' },
    { name: 'Virtual Tour', href: '/about/virtual-tour' },
  ];

  const resources = [
    { name: 'Parent\'s Corner', href: '/resources/parents' },
    { name: 'Counselor\'s Corner', href: '/resources/counselor' },
    { name: 'Monthly Newsletters', href: '/resources/newsletters' },
    { name: 'DOE Resources', href: '/resources/doe' },
    { name: 'TAG PTA', href: '/community/pta' },
    { name: 'NYC Schools Account', href: 'https://mystudent.nyc/' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-500 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Talented and Gifted School for Young Scholars</h3>
                <p className="text-slate-400">Where Children Come First</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              At TAG School, faculties, parents and students work together to prepare all students
              to excel in life and develop to their full potential, both intellectually and socially.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-400" />
                <span className="text-slate-300">123 Education Avenue, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <span className="text-slate-300">info@schoolname.edu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-slate-800 hover:bg-primary-500 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.href.startsWith('http') ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {resource.name}
                    </a>
                  ) : (
                    <Link
                      to={resource.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white placeholder-slate-400"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>&copy; 2024 Talented and Gifted School for Young Scholars. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm mt-4 pt-4 border-t border-slate-800">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;