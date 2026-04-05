"use client";

import { useState } from "react";

const products = [
  {
    name: "Masala Chai",
    price: "$4.50",
    description: "Traditional spiced tea with cardamom, cinnamon, and ginger",
    image: "🍵",
  },
  {
    name: "Green Tea",
    price: "$3.50",
    description: "Light and refreshing organic green tea leaves",
    image: "🍃",
  },
  {
    name: "Butter Biscuit",
    price: "$2.00",
    description: "Crispy homemade biscuits perfect with tea",
    image: "🍪",
  },
  {
    name: "Chai Latte",
    price: "$5.00",
    description: "Creamy spiced chai with steamed milk",
    image: "☕",
  },
  {
    name: "Darjeeling Tea",
    price: "$5.50",
    description: "Premium first flush Darjeeling from the Himalayas",
    image: "🏔️",
  },
  {
    name: "Shortbread",
    price: "$2.50",
    description: "Buttery Scottish-style shortbread cookies",
    image: "🧈",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-amber-800">
              Chiya Biskut
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-amber-700 transition">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-700 transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d97706%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8">
          <div className="text-8xl mb-6">🍵</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-900 mb-6">
            Chiya Biskut
          </h1>
          <p className="text-xl sm:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Experience the warmth of traditional Nepali tea paired with homemade biscuits
          </p>
          <a
            href="#products"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition transform hover:scale-105 shadow-lg"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handcrafted teas and freshly baked biscuits made with love
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-700">{product.price}</span>
                  <button className="bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in the heart of Kathmandu, Chiya Biskut brings the authentic taste of 
                Nepali tea culture to your cup. Our recipes have been passed down through 
                generations, preserving the rich heritage of Himalayan tea traditions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Every cup of chai we serve is brewed with carefully selected spices and 
                premium tea leaves. Our biscuits are baked fresh daily using traditional 
                recipes that complement the bold flavors of our teas.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-amber-700">15+</div>
                  <div className="text-gray-600">Years</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-amber-700">50k+</div>
                  <div className="text-gray-600">Cups Served</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-amber-700">100%</div>
                  <div className="text-gray-600">Organic</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-9xl mb-4">🫖</div>
                <p className="text-xl text-amber-800 font-semibold italic">
                  &ldquo;A cup of chai is a cup of happiness&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700">123 Tea Street, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-gray-700">+977 1-234-5678</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span className="text-gray-700">hello@chiyabiskut.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🕐</span>
                  <span className="text-gray-700">Open Daily: 7AM - 9PM</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-700 text-white px-6 py-4 rounded-xl font-semibold hover:bg-amber-800 transition transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
              {submitted && (
                <div className="text-center text-green-600 font-semibold">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Chiya Biskut</div>
              <p className="text-amber-200">
                Bringing the authentic taste of Nepali chai to your cup since 2009.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4">Quick Links</div>
              <div className="space-y-2">
                <a href="#hero" className="block text-amber-200 hover:text-white transition">Home</a>
                <a href="#products" className="block text-amber-200 hover:text-white transition">Products</a>
                <a href="#about" className="block text-amber-200 hover:text-white transition">About</a>
                <a href="#contact" className="block text-amber-200 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Follow Us</div>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="hover:scale-110 transition">📘</a>
                <a href="#" className="hover:scale-110 transition">📸</a>
                <a href="#" className="hover:scale-110 transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            &copy; 2024 Chiya Biskut. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
