'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 md:px-16 lg:px-32 py-16">

      {/* Header */}
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
          Contact <span className="text-orange-500">SnapCart</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Have a question or need support? We’re here to help.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 text-sm text-gray-600">
            <p>
              📧 <span className="ml-2">support@snapcart.com</span>
            </p>
            <p>
              📞 <span className="ml-2">+1 234 567 890</span>
            </p>
            <p>
              📍 <span className="ml-2">Available worldwide</span>
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            Whether you have questions about orders, products, or partnerships,
            our team is ready to assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-sm text-gray-500">
          We typically respond within 24 hours. Your satisfaction matters to us.
        </p>
      </div>

    </div>
  );
};

export default Contact;
