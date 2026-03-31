import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold">
                R
              </div>
              <h3 className="text-xl font-bold text-white">
                Rank<span className="text-indigo-500">Resumes</span>
              </h3>
            </div>

            <p className="text-gray-400">
              Revolutionizing recruitment with AI-powered resume screening and ranking.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">𝕏</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">in</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">f</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-500 transition">Features</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Integration</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on AI in recruitment.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 mb-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
            />

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 md:flex md:justify-between text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RankResumes AI Inc.
          </p>

          <div className="mt-4 md:mt-0 flex justify-center md:justify-start gap-8 text-sm">
            <a href="#" className="hover:text-white transition">Status</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;