import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../shadcn/ui/carousel';

const ProductImages = ({
  images,
}: {
  images: (string | StaticImageData)[];
}) => {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    images[0],
  );

  return (
    <div className="flex flex-col space-x-0 md:flex-row md:space-x-3 lg:flex-row lg:space-x-3">
      {/* Imagens como carrossel em telas pequenas */}
      <div className="block w-full md:hidden lg:hidden">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative w-full">
                <Image
                  src={image}
                  width={616}
                  height={788}
                  alt={`Imagem ${index + 1}`}
                  className="object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Imagens em lista vertical para telas maiores */}
      <div className="hidden flex-col items-center space-y-3 md:flex md:items-start lg:flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer"
          >
            <Image
              src={image}
              width={110}
              height={100}
              alt={`Imagem ${index + 1}`}
              className="transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Imagem principal */}
      <div className="flex items-center justify-center">
        <Image
          src={selectedImage}
          width={616}
          height={788}
          alt="Imagem do produto"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
