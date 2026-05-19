import { motion } from 'motion/react';
import {
  Store,
  ShoppingCart,
  Calendar,
  QrCode,
  Brain,
  BarChart3,
  Gift,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Store,
      title: 'POS Management',
      description: 'Complete point-of-sale system with real-time inventory tracking and seamless payment processing.',
    },
    {
      icon: ShoppingCart,
      title: 'Online Order Management',
      description: 'Effortlessly manage online orders from multiple platforms in one unified dashboard.',
    },
    {
      icon: Calendar,
      title: 'Reservation Management',
      description: 'Smart table booking system with automated confirmations and capacity management.',
    },
    {
      icon: QrCode,
      title: 'QR Menu Ordering',
      description: 'Contactless ordering experience with dynamic QR code menus for dine-in customers.',
    },
    {
      icon: Brain,
      title: 'AI Meal Recommendation',
      description: 'Intelligent meal suggestions based on customer preferences, trends, and ratings.',
    },
    {
      icon: BarChart3,
      title: 'Restaurant Analytics',
      description: 'Comprehensive insights and reporting to optimize your restaurant operations.',
    },
    {
      icon: Gift,
      title: 'Customer Loyalty & Rewards',
      description: 'Build lasting relationships with customizable loyalty programs and rewards.',
    },
  ];

  return (
    <section id="our-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
            Our <span className="text-[#ff6b35]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run a successful restaurant, all in one platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] to-[#ff4444] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff4444] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
