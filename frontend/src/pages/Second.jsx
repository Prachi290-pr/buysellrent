import React from 'react'
import { MapPin, BedDouble, Bath, Ruler } from 'lucide-react'
import landing from '../assets/landing.jpg'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'
import { Link } from 'react-router-dom';
const properties = [
  {
    id: 1,
    img: landing,
    title: '2-Bed Apartment',
    location: 'Mumbai Central',
    price: '₹2,50,00,000',
    beds: 2,
    baths: 2,
    area: '900 sqft',
  },
  {
    id: 2,
    img: room2,
    title: 'Sea View Villa',
    location: 'Juhu Beach',
    price: '₹8,00,00,000',
    beds: 4,
    baths: 3,
    area: '2500 sqft',
  },
  {
    id: 3,
    img: room3,
    title: 'Studio Apartment',
    location: 'Bandra West',
    price: '₹1,10,00,000',
    beds: 1,
    baths: 1,
    area: '500 sqft',
  },
  
]

const Second = () => {
  return (
    <div className=" min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
        Latest Properties
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {p.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {p.location}
              </div>
              <div className="flex justify-between text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> {p.beds}
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" /> {p.baths}
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="w-4 h-4" /> {p.area}
                </div>
              </div>
              <div className="text-2xl font-extrabold text-orange-500 mb-2">
                {p.price}
              </div>
              <button className="w-full border border-blue-600 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition">
                View Details
              </button>
            </div>
          </div>
        ))}

        
      </div>
    <div className='flex text-center items-center justify-center'>
        <button className='bg-orange-400 rounded-3xl text-white px-20 py-4 mt-20 '>
            <Link to="/properties">Explore More Properties</Link>
        </button>
    </div>
      
    </div>
  )
}

export default Second
