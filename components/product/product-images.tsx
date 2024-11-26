import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../shadcn/ui/carousel';

const ProductImages = ({
  images,
}: {
  images: (string | StaticImageData)[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col space-x-0 md:flex-row md:space-x-3 lg:flex-row lg:space-x-3">
      <div className="block w-full md:hidden lg:hidden">
        <Carousel>
          <CarouselContent
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="relative w-full flex-shrink-0"
              >
                <Image
                  src={image}
                  width={616}
                  height={788}
                  alt={`Imagem ${index + 1}`}
                  className="h-full w-full object-cover"
                />
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

        <ul className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <li key={index}>
              <button
                className={`h-3 w-3 rounded-full border border-black transition-colors ${
                  currentSlide === index ? 'bg-black' : 'bg-transparent'
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden flex-col items-center space-y-3 md:flex md:items-start lg:flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer ${
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
            />
          </div>
        ))}
      </div>

      <div className="flex hidden items-center justify-center md:block lg:block">
        <Image
          src={images[currentSlide]}
          width={616}
          height={788}
          alt="Imagem do produto"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImages;
