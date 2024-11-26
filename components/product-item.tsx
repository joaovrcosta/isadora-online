'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductItemProps {
  name: string;
  price: string;
  images: { default: string; hover: string };
  colors: { value: string; label: string; colorCode: string }[];
}

export function ProductItem({ name, price, images, colors }: ProductItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || '');

  return (
    <div className="group relative w-full max-w-[350px]">
      <div
        className="relative aspect-square max-h-[450px] w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? images.hover : images.default}
          alt={name}
          height={450}
          width={350}
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover transition-all duration-300"
        />

        <button
          className={`absolute bottom-0 left-0 hidden w-full rounded-sm bg-[rgb(255,184,184)] py-3 text-sm font-medium text-black transition-opacity duration-300 lg:block ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>

      <div className="mt-4 flex h-[150px] flex-col pb-4 pl-5 pr-4 pt-2">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold tracking-[2px]">{name}</span>
            <p className="text-[11px] font-medium tracking-[2px]">{price}</p>
          </div>
          <button className="rounded-md p-2">
            <Heart size={20} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2">
          {colors.map((color) => (
            <label
              key={color.value}
              className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 ${
                selectedColor === color.value ? 'border-black' : 'border-white'
              }`}
            >
              <input
                type="radio"
                name="color"
                value={color.value}
                className="absolute h-0 w-0 opacity-0"
                checked={selectedColor === color.value}
                onChange={() => setSelectedColor(color.value)}
              />
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color.colorCode }}
              ></div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
