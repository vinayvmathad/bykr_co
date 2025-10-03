import products from '../data/products.json'

export default function ProductGrid(){
  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen py-8">
      {products.map(p=>(
        <div key={p.id} className="bg-white p-4 rounded-lg shadow">
          <img src={p.image} alt={p.title} className="w-full h-44 object-cover rounded"/>
          <h3 className="mt-3 font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-700">{p.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-lg">₹{(p.price_cents/100).toFixed(2)}</div>
            <button className="px-3 py-1 bg-orange-200 text-black rounded">Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}
