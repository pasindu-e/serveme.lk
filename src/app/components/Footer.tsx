import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      'Features',
      'Pricing',
      'For Restaurants',
      'For Customers',
      'Integrations',
      'API Documentation',
    ],
    company: [
      'About Us',
      'Careers',
      'Press Kit',
      'Blog',
      'Partners',
      'Contact',
    ],
    support: [
      'Help Center',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'FAQ',
      'Status',
    ],
    locations: [
      'Colombo',
      'Galle',
      'Kandy',
      'Ambalangoda',
      'Negombo',
      'Matara',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2d3748] to-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff4444] bg-clip-text text-transparent">
                Serveme.lk
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The complete digital solution for restaurants. Empowering businesses with AI-powered
              technology to deliver exceptional dining experiences across Sri Lanka.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@serveme.lk"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>hello@serveme.lk</span>
              </a>
              <a
                href="tel:+94112345678"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+94 11 234 5678</span>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b35] text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff4444] rounded-r-xl hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Careers
                </Link>
              </li>
              {footerLinks.company.slice(2).map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((location) => (
                <li key={location}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Serveme.lk. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff4444] flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
