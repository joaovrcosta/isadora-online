import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../shadcn/ui/carousel';
import { Dialog, DialogTrigger } from '../shadcn/ui/dialog';
import { Expand } from 'lucide-react';
import { ExpandedProductModal } from '../modalds/expandedProductModal';

const ProductImages = ({
  images,
}: {
  images: (string | StaticImageData)[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Adicionando o estado de hover

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
    <div
      className="flex flex-col space-x-0 pr-0 md:flex-row md:space-x-3 md:pr-6 lg:flex-row lg:space-x-3 lg:pr-6"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
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

          {isHovered && ( 
  <>
    <CarouselPrevious
      onClick={handlePreviousSlide}
      className="absolute left-2 top-1/2 -translate-y-1/2 transform cursor-pointer opacity-0 -translate-x-4 transition-all duration-300 hover:opacity-100 hover:translate-x-0"
    />
    <CarouselNext
      onClick={handleNextSlide}
      className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer opacity-0 translate-x-4 transition-all duration-300 hover:opacity-100 hover:translate-x-0"
    >
      &#9654;
    </CarouselNext>
  </>
)}

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
        className={`w-[110px] cursor-pointer ${
          currentSlide === index ? 'border-[1px] border-black' : 'border-transparent'
        } hover:shadow-[inset_10px_0_8px_rgba(0,0,0,0.8),inset_-10px_0_8px_rgba(0,0,0,0.3)]`}
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

      <section className="flex hidden items-center justify-center md:block lg:block">
        <div className="relative h-auto max-w-[616px]">
          <Carousel>
            <CarouselContent
              className="flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    layout="responsive"
                    width={616}
                    height={788}
                    alt={`Imagem do produto ${index + 1}`}
                    className="h-full w-full max-w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {isHovered && (
              <>
                <CarouselPrevious
                iconColor='lightPink'
                  onClick={handlePreviousSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 transform cursor-pointer bg-transparent border-none shadow-none hover:bg-transparent h-[52px] w-[52px]"
                />
                <CarouselNext
                iconColor='lightPink'
                  onClick={handleNextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer bg-transparent shadow-none hover:bg-transparent border-none h-[52px] w-[52px]"
                >
                  &#9654;
                </CarouselNext>
              </>
            )}
          </Carousel>

          <Dialog>
            <DialogTrigger>
              <div className="absolute bottom-8 right-2 rounded-full bg-transparent p-2 hover:bg-gray-200 shadow-none hover:bg-transparent">
                <Expand className="text-black" size={32} strokeWidth={0.5} />
              </div>
            </DialogTrigger>

            <ExpandedProductModal images={images} />
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default ProductImages;
