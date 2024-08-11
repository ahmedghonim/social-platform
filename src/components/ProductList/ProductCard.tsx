import Image from "next/image";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  companyName: string;
  websiteUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  companyName,
  websiteUrl,
  description,
}) => {
  return (
    <article className="grid grid-cols-2 gap-3  bg-gray-200  rounded-[15px]">
      <div className="h-full rounded-[15px]">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={`${companyName} product`}
          className="object-cover  w-full h-full rounded-[15px]"
        />
      </div>
      <div className="flex flex-col p-[11px]">
        <h3 className="font-thin">{companyName}</h3>
        <a href={websiteUrl} className="text-xs text-[#767676]">
          {websiteUrl}
        </a>
        <p className="mt-3 text-base font-thin leading-5 text-center">
          {description}
        </p>
        <button className="gap-2.5 self-center px-2.5 py-1.5 mt-2.5 text-center text-white bg-secondary rounded-[30px]">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
