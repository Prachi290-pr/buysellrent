import React from 'react'
import { Home, Key, DollarSign } from 'lucide-react'

const services = [
  {
    icon: <Home className="w-10 h-10 text-indigo-800 mb-4" />,
    title: "Buy a Home",
    desc: "Explore a wide selection of homes for sale in your desired area in Mumbai.",
    btn: "Learn More"
  },
  {
    icon: <Key className="w-10 h-10 text-indigo-800 mb-4" />,
    title: "Sell Your Home",
    desc: "Get expert guidance and a seamless selling experience in Mumbai.",
    btn: "Learn More"
  },
  {
    icon: <DollarSign className="w-10 h-10 text-indigo-800 mb-4" />,
    title: "Rent a Property",
    desc: "Discover available rental properties that fit your lifestyle in Mumbai.",
    btn: "Learn More"
  }
]

const Third = () => (
  <div>
    <div className="">
      <h2 className="text-4xl font-bold text-center my-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-orange-200 to-orange-100 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition border border-gray-100"
          >
            {s.icon}
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-500 mb-6 text-center">{s.desc}</p>
            <button className="border border-orange-600 text-orange-500 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
              {s.btn}
            </button>
          </div>
        ))}
      </div>
    </div>



    <div className="bg-indigo-950 w-full text-center shadow-xl py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Find Your Place in Mumbai?
      </h2>
      <p className="text-white text-lg mb-8">
        We're dedicated to helping you achieve your real estate goals with local
        expertise.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition">
          About Us
        </button>
        <button className="bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
          Get in Touch
        </button>
      </div>
    </div>

    
  </div>
);

export default Third