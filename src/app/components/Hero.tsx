import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Users, ShoppingBag } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: ShoppingBag, label: 'Restaurants', value: '500+' },
    { icon: TrendingUp, label: 'Orders Processed', value: '50K+' },
    { icon: Users, label: 'Customers', value: '100K+' },
  ];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMTA3LDUzLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-orange-100 text-[#ff6b35] rounded-full mb-6">
              <span className="text-sm font-medium">AI-Powered Restaurant Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-6 leading-tight">
              The Complete Digital Solution for{' '}
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff4444] bg-clip-text text-transparent">
                Restaurants
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your restaurant with our all-in-one platform featuring POS management,
              online ordering, reservation handling, AI-powered meal recommendations, and customer engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff4444] text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/restaurants" className="px-8 py-4 bg-white text-[#ff6b35] border-2 border-[#ff6b35] rounded-full font-medium hover:bg-orange-50 transition-all duration-300 text-center">
                Explore Restaurants
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-[#ff6b35] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#2d3748]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1603383798954-52db11c056bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzc4NjA3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant Management Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff4444] flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2d3748]">98%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm">
              <div className="text-sm text-gray-600 mb-1">Live Orders</div>
              <div className="text-3xl font-bold text-[#ff6b35]">1,247</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
