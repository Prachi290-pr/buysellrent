import React, { useState } from 'react'
import { MapPin, BedDouble, Bath, Ruler } from 'lucide-react'
import sample1 from '../assets/landing.jpg'
import sample2 from '../assets/room2.jpg'
import sample3 from '../assets/room3.jpg'

// Add more sample cards
const properties = [
	{
		id: 1,
		img: sample1,
		title: '2-Bed Apartment',
		location: 'Mumbai Central',
		price: '₹2,50,00,000',
		beds: 2,
		baths: 2,
		area: '900 sqft',
	},
	{
		id: 2,
		img: sample2,
		title: 'Sea View Villa',
		location: 'Juhu Beach',
		price: '₹8,00,00,000',
		beds: 4,
		baths: 3,
		area: '2500 sqft',
	},
	{
		id: 3,
		img: sample3,
		title: 'Studio Apartment',
		location: 'Bandra West',
		price: '₹1,10,00,000',
		beds: 1,
		baths: 1,
		area: '500 sqft',
	},
	{
		id: 4,
		img: sample2,
		title: 'Luxury Penthouse',
		location: 'Worli',
		price: '₹12,00,00,000',
		beds: 5,
		baths: 4,
		area: '3500 sqft',
	},
	{
		id: 5,
		img: sample3,
		title: 'Compact 1-Bed',
		location: 'Andheri East',
		price: '₹85,00,000',
		beds: 1,
		baths: 1,
		area: '400 sqft',
	},
	{
		id: 6,
		img: sample1,
		title: 'Family Home',
		location: 'Powai',
		price: '₹3,75,00,000',
		beds: 3,
		baths: 2,
		area: '1200 sqft',
	},
]

const bedOptions = [
	{ label: 'Any Beds', value: '' },
	{ label: '1 Bed', value: '1' },
	{ label: '2 Beds', value: '2' },
	{ label: '3 Beds', value: '3' },
	{ label: '4 Beds', value: '4' },
	{ label: '5+ Beds', value: '5' },
]

const AllProperties = () => {
	const [search, setSearch] = useState('')
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')
	const [beds, setBeds] = useState('')

	// Enhanced filter logic
	const filtered = properties.filter((p) => {
		const matchesSearch =
			p.title.toLowerCase().includes(search.toLowerCase()) ||
			p.location.toLowerCase().includes(search.toLowerCase())
		const priceNum = Number(p.price.replace(/[^0-9]/g, ''))
		const min = minPrice ? Number(minPrice) : 0
		const max = maxPrice ? Number(maxPrice) : Infinity
		const matchesBeds =
			beds === ''
				? true
				: beds === '5'
				? p.beds >= 5
				: p.beds === Number(beds)
		return matchesSearch && priceNum >= min && priceNum <= max && matchesBeds
	})

	return (
		<div className="bg-gray-50 min-h-screen py-10 px-4">
			<h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
				Browse your Next Home
			</h1>
			<div className="bg-white rounded-md shadow p-8 max-w-6xl mx-auto mb-12">
				<h2 className="text-2xl font-semibold mb-6 text-blue-900">Filters</h2>
				<div className="flex flex-col md:flex-row gap-6">
					<input
						type="text"
						placeholder="Search by location or type"
						className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-blue-400"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<select
						className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/6 focus:outline-blue-400"
						value={beds}
						onChange={(e) => setBeds(e.target.value)}
					>
						{bedOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
					<input
						type="number"
						placeholder="Min Price (₹)"
						className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/6 focus:outline-blue-400"
						value={minPrice}
						onChange={(e) => setMinPrice(e.target.value)}
					/>
					<input
						type="number"
						placeholder="Max Price (₹)"
						className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/6 focus:outline-blue-400"
						value={maxPrice}
						onChange={(e) => setMaxPrice(e.target.value)}
					/>
				</div>
			</div>
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{filtered.length === 0 && (
					<div className="col-span-3 text-center text-gray-400 text-xl py-20">
						No properties found.
					</div>
				)}
				{filtered.map((p) => (
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
		</div>
	)
}

export default AllProperties
