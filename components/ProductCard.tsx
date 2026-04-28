export default function ProductCard({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  return (
    <div className="border rounded-lg p-4 shadow hover:scale-105 transition">
      <div className="h-40 bg-gray-200 mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{price}</p>
      <button className="mt-2 bg-black text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}