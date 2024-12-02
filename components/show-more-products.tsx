import { useState } from 'react';
import { ProductItem } from './product-item';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './shadcn/ui/carousel';
import { ProductItemCarousel } from './product-item-carousel';

export const CarouselComponent = ({ mockProducts }) => {
  const itemsPerCarouselItem = 4; // Número de produtos por item de carrossel
  const totalItems = mockProducts.length;

  // Função para agrupar os produtos em blocos de 4
  const groupProducts = () => {
    let groups = [];
    for (let i = 0; i < totalItems; i += itemsPerCarouselItem) {
      groups.push(mockProducts.slice(i, i + itemsPerCarouselItem));
    }
    return groups;
  };

  const productGroups = groupProducts();

  return (
    <Carousel>
      <CarouselContent className="flex overflow-hidden space-x-4">
        {productGroups.map((group, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full sm:w-1/4">
            <div className="flex space-x-4">
              {group.map((product, idx) => (
                <div key={idx} className="w-1/4">
                  <ProductItemCarousel
                    name={product.name}
                    price={product.price}
                    images={product.images}
                    colors={product.colors}
                  />
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-[40%] transform -translate-y-1/2 border-none shadow-none bg-transparent  text-white p-2 rounded-full h-[52px] w-[52px] hover:bg-transparent">
        Previous
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-[40%] transform -translate-y-1/2 border-none shadow-none bg-transparent  text-white  rounded-full h-[52px] w-[52px] hover:bg-transparent">
        Next
      </CarouselNext>
    </Carousel>
  );
};
