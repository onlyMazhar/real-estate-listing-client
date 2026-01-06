import React from "react";
import formImg from "../assets/formImg.svg";
import Swal from "sweetalert2";

const InquiryForm = () => {
  const formSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Inquiry Submited",
      icon: "success",
      draggable: true
    });
    e.target.reset()
  }
  return (
    <div className=" pt-20 pb-40 px-4 md:px-0">
      <div className="  mx-auto flex flex-col gap-8 lg:flex-row overflow-hidden">

        {/* Form Side */}
        <div className="p-4 sm:p-8 lg:w-1/2 flex flex-col justify-around">
          <div className="mb-8 py-auto">
            {/* Changed text-gray-800 to text-base-content */}
            <h2 className="text-3xl font-bold text-base-content">Real Estate Inquiry Form </h2>
            {/* Changed text-gray-500 to opacity-70 text-base-content */}
            <p className="text-base-content opacity-70 mt-2">
              Share your preferences — we'll connect you with the right property that fits your lifestyle and budget.
            </p>
          </div>

          <form onSubmit={formSubmit} className="space-y-6">
            {/* Inquiry Type */}
            <div>
              {/* Changed text-gray-700 to text-base-content */}
              <label className="block font-semibold mb-2 text-base-content">Inquiry Type</label>
              <select
                /* Changed bg-gray-50 to bg-base-200, border-gray-300 to border-base-300, and focus ring to yellow-400 */
                className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="" className="bg-base-100">— Choose an option —</option>
                <option className="bg-base-100">Buying</option>
                <option className="bg-base-100">Renting</option>
                <option className="bg-base-100">Selling</option>
              </select>
            </div>

            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-base-content">First Name </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-base-content">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last your name"
                  className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2 text-base-content">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Price & Size */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-base-content"> Max Price ($) </label>
                <input
                  type="number"
                  placeholder="e.g. 200000"
                  className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2 text-base-content">Min Size (Sq ft)</label>
                <input
                  type="number"
                  placeholder="e.g. 1200"
                  className="w-full border border-base-300 rounded-lg p-3 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
               <button type="submit" className="w-full bg-primary hover:bg-yellow-500 transition font-bold text-secondary py-3 rounded-lg shadow-md">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* ---------- Image  ---------- */}
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src={formImg}
            alt="Property inquiry illustration"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
