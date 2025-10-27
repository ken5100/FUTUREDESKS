import { useParams } from "react-router-dom";

const products = [
  { id: 1, title: "Elite Quiz Web Platform", image: "/prebuild_1.png" },
  { id: 2, title: "eDemand Multi Vendor App + Web", image: "/prebuild_2.png" },
  { id: 3, title: "eGrocer Multi Vendor App + Web", image: "/prebuild_3.png" },
  { id: 4, title: "Elite Quiz Web Platform", image: "/prebuild_4.png" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-20 text-2xl">Product Not Found</h1>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <img src={product.image} alt={product.title} className="w-80 rounded-2xl shadow-lg" />
      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
      <p className="mt-4 text-gray-600 max-w-lg text-center">
        This is the checkout/details page for {product.title}.
      </p>
    </div>
  );
}
