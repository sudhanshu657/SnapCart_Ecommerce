'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 md:px-16 lg:px-32 py-16">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src={assets.logo}
            alt="SnapCart Logo"
            width={180}
            height={60}
            className="w-40 md:w-48 h-auto"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          About <span className="text-orange-500">SnapCart</span>
        </h1>

        <p className="mt-4 text-gray-600">
          A smarter way to shop online — fast, secure, and built for convenience.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-medium text-gray-900">
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            SnapCart is a modern ecommerce platform designed to deliver a smooth
            and reliable shopping experience. We focus on speed, simplicity, and
            security—so you can shop without distractions.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            From discovering products to managing your cart and completing
            checkout, SnapCart ensures everything works seamlessly across
            devices.
          </p>

          <div className="mt-6 inline-block px-6 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
            Shop Smarter. Shop Faster.
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Why Choose SnapCart
          </h2>

          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              Secure authentication and user accounts
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              Smart cart with real-time sync
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              Exclusive deals and competitive pricing
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              Clean, fast, and responsive UI
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              Built with modern, scalable technology
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-sm text-gray-500">
          SnapCart is built to make online shopping enjoyable, reliable, and
          effortless — anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

export default About;
