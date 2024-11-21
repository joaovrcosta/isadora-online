'use client';

import Image from 'next/image';
import BagImage from '@/public/products/special-price/48680802_0_1_20240711150915.webp';
import BagImage_2 from '@/public/products/special-price/48680802_1_1_20240711150915.webp';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export function ProductItem() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative max-w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do produto */}
      <div className="relative">
        <Image
          src={isHovered ? BagImage_2 : BagImage}
          alt="Bag"
          width={350}
          height={450}
          quality={100}
          className="transition-all duration-300"
        />

        {/* Botão "Adicionar ao Carrinho" */}
        <button
          className={`absolute bottom-0 left-0 w-full bg-[rgb(255,184,184)] py-3 text-sm font-medium text-white transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>

      {/* Detalhes do produto */}
      <div className="flex h-[123px] items-center justify-between pb-4 pl-5 pr-4 pt-2">
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium">Mochila con cierre</span>
          <p className="text-xs font-medium">$50,000</p>
        </div>
        <button className="rounded-md p-2">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
}
