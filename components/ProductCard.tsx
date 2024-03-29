import Image from "next/image";
import React from "react";

function ProductCard({ productInfo }: { productInfo: any }) {
  const { imgUrl, name, price } = productInfo;

  return (
    <div className="rounded-3xl overflow-hidden shadow-md bg-neutral-50">
      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
        <Image src={imgUrl} fill={true} alt="drink" />
      </div>
      <div className="px-3 pt-2 pb-3">
        <h3 className="font-bold text-neutral-600">{name}</h3>
        <span className="font-bold text-neutral-800">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
