'use client';

import Image from 'next/image';
import BagImage from '@/public/products/special-price/48680802_0_1_20240711150915.webp';
import BagImage_2 from '@/public/products/special-price/48680802_1_1_20240711150915.webp';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export function ProductItem() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState('red'); // Estado para a cor selecionada

  return (
    <div
      className="group relative w-full max-w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do produto */}
      <div className="relative aspect-square max-h-[450px] w-full">
        <Image
          src={isHovered ? BagImage_2 : BagImage}
          alt="Bag"
          height={450}
          width={350}
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover transition-all duration-300"
        />

        {/* Botão "Adicionar ao Carrinho" */}
        <button
          className={`absolute bottom-0 left-0 hidden w-full rounded-sm bg-[rgb(255,184,184)] py-3 text-sm font-medium text-black transition-opacity duration-300 lg:block ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>

      {/* Detalhes do produto */}
      <div className="mt-4 flex h-[150px] flex-col pb-4 pl-5 pr-4 pt-2">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold tracking-[2px]">
              Mochila con cierre
            </span>
            <p className="text-[11px] font-medium tracking-[2px]">$ 50,000</p>
          </div>
          <button className="rounded-md p-2">
            <Heart size={20} />
          </button>
        </div>

        {/* Escolha de cor */}
        <div className="mt-8 flex items-center justify-center space-x-2">
          <label
            className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 ${
              selectedColor === 'red' ? 'border-black' : 'border-white'
            }`}
          >
            <input
              type="radio"
              name="color"
              value="red"
              className="absolute h-0 w-0 opacity-0"
              checked={selectedColor === 'red'}
              onChange={() => setSelectedColor('red')}
            />
            <div className="h-3 w-3 rounded-full bg-black"></div>
          </label>
          <label
            className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 ${
              selectedColor === 'blue' ? 'border-black' : 'border-white'
            }`}
          >
            <input
              type="radio"
              name="color"
              value="blue"
              className="absolute h-0 w-0 opacity-0"
              checked={selectedColor === 'blue'}
              onChange={() => setSelectedColor('blue')}
            />
            <div className="h-3 w-3 rounded-full bg-[#f4e1c1]"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
