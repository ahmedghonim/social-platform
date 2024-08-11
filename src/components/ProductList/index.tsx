import React from "react";
import ProductCard from "./ProductCard";
import watch from "@/image/watch.png";
import car from "@/image/car.png";
interface Product {
  id: number;
  imageSrc: any;
  companyName: string;
  websiteUrl: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: car,
    companyName: "Ford Motor Company",
    websiteUrl: "https://www.ford.com/usa",
    description: "manufacturer headquartered in Dearborn,",
  },
  {
    id: 2,
    imageSrc: watch,
    companyName: "Ford Motor Company",
    websiteUrl: "https://www.ford.com/usa",
    description: "manufacturer headquartered in Dearborn,",
  },
];

const ProductList: React.FC = () => {
  return (
    <section className="flex flex-col gap-2.5 p-2.5 w-full text-sm text-black bg-white rounded-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      {products.map((product) => (
        <div key={product.id} className="last:mb-0">
          <ProductCard
            imageSrc={product.imageSrc}
            companyName={product.companyName}
            websiteUrl={product.websiteUrl}
            description={product.description}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
