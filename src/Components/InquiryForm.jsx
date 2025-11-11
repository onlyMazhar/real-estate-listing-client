import React from "react";
import formImg from "../assets/formImg.svg";

const InquiryForm = () => {
  return (
    <section className="sm:py-12 px-4">
      <div className="max-w-6xl py-10 md:py-16 lg:py-20 mx-auto flex flex-col gap-8 lg:flex-row overflow-hidden">
        
        {/*Frm Section*/}
        <div className="p-4 sm:p-8 lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Real Estate Inquiry Form </h2>
            <p className="text-gray-500 mt-2">Share your preferences — we'll connect you with the right
              property that fits your lifestyle and budget.
            </p>
          </div>

          <form className="space-y-6">
            {/* Inquiry Type */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Inquiry Type</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">— Choose an option —</option>
                <option>Buying</option>
                <option>Renting</option>
                <option>Selling</option>
              </select>
            </div>

            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-700">How to Address </label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  required
                >
                  <option value="">— Choose an option —</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700"> I am a... </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"required >
                <option value="">— Choose a role —</option>
                <option>Property Owner</option>
                <option>Real Estate Agent</option>
                <option>Prospective Buyer</option>
              </select>
            </div>

            {/* Price & Size */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-700"> Max Price ($) </label>
                <input
                  type="number"
                  placeholder="e.g. 200000"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-700">Min Size (Sq ft)</label>
                <input
                  type="number"
                  placeholder="e.g. 1200"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button type="submit"   className="w-full bg-yellow-400 hover:bg-yellow-500 transition font-bold text-gray-900 py-3 rounded-lg">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* ---------- Image Section ---------- */}
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src={formImg}
            alt="Property inquiry illustration"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
