export default function BlogCard({ title }: { title: string }) {
  return (
    <div className="border p-4 rounded shadow">
      <div className="h-40 bg-gray-200 mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}