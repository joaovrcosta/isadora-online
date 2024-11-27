'use client';

import { Button } from '@/components/shadcn/ui/button';
import Image from 'next/image';
import envioImg from '@/public/icons/ic-envio-gratis.webp';
import cambiosImg from '@/public/icons/ic-cambios-devoluciones.webp';
import logoTargeta from '@/public/icons/logo-tarjeta.webp';
import { Heart, Share2 } from 'lucide-react';
import ProductImages from '@/components/product/product-images';
import { useState } from 'react';

const product = {
  sku: '48611201',
  name: 'Clutch con correa de cadena',
  price: 59000,
  description:
    'Clutch con cierre a presión, con correa larga de cadena. Forro interior.',
  extraDescription:
    'Este clutch es ideal para ocasiones especiales. Con su diseño elegante y sofisticado, puedes llevar tus esenciales con estilo. Está disponible en varios colores y es un accesorio perfecto para complementar tu look.',
  images: [
    '/products/product-image-1.webp',
    '/products/product-image-2.webp',
    '/products/product-image-3.webp',
    '/products/product-image-4.webp',
  ],
  shippingInfo: {
    title: 'RETIRO Y ENVÍO GRATIS',
    description:
      'Retira gratis en nuestras tiendas o envío gratis en compras mayores a $30.000',
  },
  returnInfo: {
    title: 'CAMBIOS Y DEVOLUCIONES',
    description:
      '¿Dudas sobre tu elección? Tenes hasta 6 meses para cambiar tu compra y hasta 15 días de devolución.',
  },
  paymentInfo: {
    title: 'CUOTAS SIN INTERÉS',
    description:
      'Pagá con Visa, MasterCard, Mercado Pago y Naranja plan Z en 3 cuotas sin interés en compras superiores a $30.000 y 6 cuotas sin interés en compras superiores a $60.000.',
  },
};

export default function ProductPage() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="mt-[76px] flex flex-col items-center justify-center md:mt-24 lg:mt-12 lg:flex-row">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <ProductImages images={product.images} />

        <section className="md:lg-8 ml-0 flex h-full max-w-[760px] flex-col justify-start px-4 md:w-[43%] lg:ml-8 lg:w-[43%]">
          <div className="flex items-center justify-between">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[11px] tracking-[2px] text-gray-300">
                SKU
              </span>
              <span className="text-[11px] tracking-[2px] text-gray-300">
                {product.sku}
              </span>
            </div>
            <div className="mb-4 flex items-center justify-center space-x-3 md:mb-0 lg:mb-0">
              <div className="flex flex-col items-center justify-center">
                <button className="hover:text-lightPink">
                  <Heart
                    size={32}
                    className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
                  />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className="duration-75 hover:text-lightPink">
                  <Share2
                    size={32}
                    className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
                  />
                </button>
              </div>
            </div>
          </div>

          <h1 className="mb-4 text-[14px] font-normal tracking-[2px] text-gray-900 md:text-[22px] md:font-bold lg:text-[22px] lg:font-bold">
            {product.name}
          </h1>

          <div className="md:lg-0 mb-6 max-w-[456px] border-b border-gray-200 pl-2 text-lg text-gray-900 md:pb-10 lg:pb-10 lg:pl-0">
            <span className="hidden tracking-[2px] md:block lg:block">
              ${product.price}
            </span>
          </div>

          <div className="mb-6 space-y-2">
            <div className="mb-6 space-y-3">
              <h4 className="text-xs font-bold text-gray-800">DESCRIÇÃO</h4>

              <p className="text-xs text-gray-700">{product.description}</p>
              {showMore && (
                <p className="text-xs text-gray-700">
                  {product.extraDescription}
                </p>
              )}
            </div>
            <button
              onClick={toggleShowMore}
              className="mt-6 text-xs text-lightPink"
            >
              <span className="tracking-[2px] underline">
                {showMore ? 'Ver menos' : 'Ver mais'}
              </span>
            </button>
          </div>

          <Button className="mb-16 mt-4 hidden h-[50px] w-[250px] rounded-none text-[16px] md:block lg:block">
            ADICIONAR AO CARRINHO
          </Button>

          <div className="space-y-6">
            {product.shippingInfo && (
              <div className="flex items-center space-x-4">
                <div className="min-w-[45px]">
                  <Image
                    src={envioImg}
                    width={45}
                    height={45}
                    alt="Envio gratis"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                    {product.shippingInfo.title}
                  </h4>
                  <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                    {product.shippingInfo.description}
                  </p>
                </div>
              </div>
            )}

            {product.returnInfo && (
              <div className="flex items-center space-x-4">
                <div className="min-w-[45px]">
                  <Image
                    src={cambiosImg}
                    width={45}
                    height={45}
                    alt="Cambios y devoluciones"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                    {product.returnInfo.title}
                  </h4>
                  <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                    {product.returnInfo.description}
                  </p>
                </div>
              </div>
            )}

            {product.paymentInfo && (
              <div className="flex items-center space-x-4">
                <div className="min-w-[45px]">
                  <Image
                    src={logoTargeta}
                    width={45}
                    height={45}
                    alt="Cambios y devoluciones"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                    {product.paymentInfo.title}
                  </h4>
                  <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                    {product.paymentInfo.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-md md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="text-[14px] text-lg tracking-[2px] text-black">
            ${product.price}
          </div>
          <Button className="h-[45px] w-[200px] rounded-none bg-black text-[14px]">
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </div>
    </div>
  );
}
