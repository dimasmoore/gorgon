'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaShoppingCart, 
  FaHistory, 
  FaChartLine, 
  FaUserPlus, 
  FaMoneyBillWave, 
  FaTicketAlt, 
  FaQuestionCircle, 
  FaTools,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaTelegram,
  FaWallet,
  FaUsers
} from 'react-icons/fa';

type ButtonMenuItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  bgColor: string;
};

const mainMenuItems: ButtonMenuItem[] = [
  {
    id: 1,
    title: 'New Order',
    icon: <FaShoppingCart size={24} />,
    href: '/order',
    color: 'text-purple-100',
    bgColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    title: 'History',
    icon: <FaHistory size={24} />,
    href: '/history',
    color: 'text-blue-100',
    bgColor: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Services',
    icon: <FaChartLine size={24} />,
    href: '/services',
    color: 'text-green-100',
    bgColor: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    title: 'Add Funds',
    icon: <FaMoneyBillWave size={24} />,
    href: '/add-funds',
    color: 'text-yellow-100',
    bgColor: 'from-yellow-500 to-amber-600'
  },
  {
    id: 5,
    title: 'Wallet',
    icon: <FaWallet size={24} />,
    href: '/wallet',
    color: 'text-pink-100',
    bgColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 6,
    title: 'Referral',
    icon: <FaUsers size={24} />,
    href: '/referral',
    color: 'text-indigo-100',
    bgColor: 'from-indigo-500 to-violet-600'
  },
  {
    id: 7,
    title: 'API',
    icon: <FaTools size={24} />,
    href: '/api',
    color: 'text-red-100',
    bgColor: 'from-red-500 to-rose-600'
  },
  {
    id: 8,
    title: 'Support',
    icon: <FaTicketAlt size={24} />,
    href: '/support',
    color: 'text-teal-100',
    bgColor: 'from-teal-500 to-emerald-600'
  }
];

const socialItems: ButtonMenuItem[] = [
  {
    id: 9,
    title: 'Instagram',
    icon: <FaInstagram size={24} />,
    href: '/services/instagram',
    color: 'text-pink-100',
    bgColor: 'from-purple-500 to-pink-600'
  },
  {
    id: 10,
    title: 'Facebook',
    icon: <FaFacebook size={24} />,
    href: '/services/facebook',
    color: 'text-blue-100',
    bgColor: 'from-blue-600 to-blue-800'
  },
  {
    id: 11,
    title: 'Twitter',
    icon: <FaTwitter size={24} />,
    href: '/services/twitter',
    color: 'text-blue-100',
    bgColor: 'from-blue-400 to-blue-600'
  },
  {
    id: 12,
    title: 'TikTok',
    icon: <FaTiktok size={24} />,
    href: '/services/tiktok',
    color: 'text-gray-100',
    bgColor: 'from-black to-gray-800'
  },
  {
    id: 13,
    title: 'YouTube',
    icon: <FaYoutube size={24} />,
    href: '/services/youtube',
    color: 'text-red-100',
    bgColor: 'from-red-600 to-red-700'
  },
  {
    id: 14,
    title: 'Telegram',
    icon: <FaTelegram size={24} />,
    href: '/services/telegram',
    color: 'text-blue-100',
    bgColor: 'from-blue-500 to-blue-600'
  }
];

const HomeButtonMenu: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 space-y-8">
        {/* Main Menu Section - App Style Circular Buttons */}
        <motion.div 
          className="bg-gradient-to-br from-black via-green-950/30 to-black rounded-3xl p-6 shadow-lg border border-green-500/30 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 filter drop-shadow-[0_0_2px_rgba(0,255,128,0.5)] relative z-10">
            SMM Panel Services
          </h2>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 relative z-10">
            {mainMenuItems.map((item) => (
              <Link key={item.id} href={item.href} className="flex flex-col items-center group">
                <motion.div
                  className={`bg-gradient-to-b ${item.bgColor} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,128,0.3)]`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`${item.color}`}>
                    {item.icon}
                  </div>
                </motion.div>
                <p className="mt-3 text-center text-sm font-medium text-gray-100 group-hover:text-green-400 transition-colors">{item.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Social Media Services Section */}

        
        {/* Featured Services Banner */}

      </div>
    </div>
  );
};

export default HomeButtonMenu;
