import { motion } from 'motion/react';
import { Monitor, Smartphone, TrendingUp, Calendar, ChefHat, Building2, QrCode, Table } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Monitor,
      title: 'Smart Restaurant POS',
      description: 'Powerful point-of-sale system designed for the modern restaurant with real-time sync across all devices.',
      image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3ODYwNzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: false,
    },
    {
      icon: Smartphone,
      title: 'Real-time Order Tracking',
      description: 'Keep customers informed with live order status updates from kitchen to delivery.',
      image: 'https://images.unsplash.com/photo-1664681340322-8b659e1130de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzc4NjA3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true,
    },
    {
      icon: QrCode,
      title: 'QR-Based Ordering',
      description: 'Contactless dining experience with instant QR code menu access and ordering right from the customer\'s phone.',
      image: 'https://images.unsplash.com/photo-1705331337149-f3a683382831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzc4NjA3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: false,
    },
    {
      icon: TrendingUp,
      title: 'AI-powered Personalized Meal Suggestions',
      description: 'Boost sales with intelligent recommendations tailored to each customer\'s preferences.',
      image: 'https://images.unsplash.com/photo-1671363465562-2428cbbb764a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzc4NjA3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true,
    },
    {
      icon: Table,
      title: 'Table Management',
      description: 'Efficiently manage table availability, seating arrangements, and waitlist with visual floor plans and real-time updates.',
      image: 'https://images.unsplash.com/photo-1660380775592-5647075c8ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzc4NjA3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: false,
    },
    {
      icon: Calendar,
      title: 'Reservation Scheduling',
      description: 'Streamline your table management with smart booking and automated confirmations.',
      image: 'https://images.unsplash.com/photo-1625489576985-eaa4b58d34b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cmVzdGF1cmFudCUyMGZvb2QlMjBkZWxpdmVyeSUyMGhlYWx0aHklMjBtZWFsfGVufDF8fHx8MTc3ODYwNzk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true,
    },
    {
      icon: ChefHat,
      title: 'Kitchen Workflow Management',
      description: 'Optimize your kitchen operations with order prioritization and preparation tracking.',
      image: 'https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3ODYwNzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: false,
    },
    {
      icon: Building2,
      title: 'Multi-branch Restaurant Management',
      description: 'Manage multiple locations effortlessly from a single unified dashboard.',
      image: 'https://images.unsplash.com/photo-1594394490830-4cf54dd62910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3ODYwNzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
            Powerful <span className="text-[#ff6b35]">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for modern restaurants with cutting-edge technology
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex flex-col ${
                feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff4444] flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#2d3748] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff4444] text-white rounded-full hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
