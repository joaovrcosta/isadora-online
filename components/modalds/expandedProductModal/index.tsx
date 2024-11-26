'use client';

import { Button } from '@/components/shadcn/ui/button';
import { DialogContent } from '@/components/shadcn/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/ui/carousel';

export function ExpandedProductModal({
  images,
}: {
  images: (string | StaticImageData)[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1); // Estado para o nível de zoom

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const delta = event.deltaY > 0 ? -0.1 : 0.1; // Diminui ou aumenta o zoom
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 1), 3)); // Limita o zoom entre 1x e 3x
  };

  return (
    <DialogContent className="flex h-full w-full items-start justify-center">
      <div className="max-h-[746px] max-w-[620px] space-y-4">
        <Carousel>
          <CarouselContent
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="overflow-hidden" // Para esconder a parte da imagem que extrapola os limites
                  onWheel={handleWheel} // Zoom ao usar a roda do mouse
                >
                  <Image
                    src={image}
                    layout="responsive"
                    width={616}
                    height={788}
                    alt={`Imagem do produto ${index + 1}`}
                    style={{
                      transform: `scale(${zoomLevel})`, // Aplica o zoom
                      transition: 'transform 0.2s ease', // Suaviza o zoom
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            onClick={handlePreviousSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
          ></CarouselPrevious>
          <CarouselNext
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            &#9654;
          </CarouselNext>
        </Carousel>

        {/* Miniaturas */}
        <div className="flex items-center justify-center space-x-3">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[120px] w-[110px] cursor-pointer rounded border ${
                currentSlide === index
                  ? 'border-2 border-black'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                width={110}
                height={100}
                alt={`Imagem ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );
}
