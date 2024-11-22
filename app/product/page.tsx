'use client';

import { Button } from '@/components/shadcn/ui/button';
import Image from 'next/image';
import envioImg from '@/public/icons/ic-envio-gratis.webp';
import cambiosImg from '@/public/icons/ic-cambios-devoluciones.webp';
import logoTargeta from '@/public/icons/logo-tarjeta.webp';
import productImage1 from '@/public/products/product-image-1.webp';
import productImage2 from '@/public/products/product-image-2.webp';
import productImage3 from '@/public/products/product-image-3.webp';
import productImage4 from '@/public/products/product-image-4.webp';
import { Heart, Share2 } from 'lucide-react';
import ProductImages from '@/components/product/product-images';

const images = [productImage1, productImage2, productImage3, productImage4];

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="flex flex-col md:flex-row lg:flex-row">
        {/* Coluna de miniaturas à esquerda */}
        <ProductImages images={images} />

        {/* Detalhes do produto */}
        <section className="ml-8 flex h-full max-w-[760px] flex-col justify-start">
          <div className="flex items-center justify-between">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[11px] tracking-[2px] text-gray-300">
                SKU
              </span>
              <span className="text-[11px] tracking-[2px] text-gray-300">
                48611201
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex flex-col items-center justify-center">
                <button>
                  <Heart size={32} />
                  {/* <p className="text-[12px]">Amo!</p> */}
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button>
                  <Share2 size={32} />
                  {/* <p className="text-[12px]">Compartilhar</p> */}
                </button>
              </div>
            </div>
          </div>

          <h1 className="mb-4 text-[22px] font-bold tracking-[2px] text-gray-900">
            Clutch con correa de cadena
          </h1>

          <div className="mb-6 max-w-[456px] border-b border-gray-200 pb-10 text-lg text-gray-900">
            <span className="tracking-[2px]">$ 59.000</span>
          </div>

          <div className="mb-6 space-y-2">
            <div className="mb-6 space-y-1">
              <h4 className="text-xs font-bold text-gray-800">DESCRIPCIÓN</h4>
              <p className="text-xs text-gray-700">
                Clutch con cierre a presión, con correa larga de cadena
              </p>
              <p className="text-xs text-gray-700">Forro interior.</p>
            </div>
            <button className="mt-6 text-xs">
              <span className="tracking-[2px] underline">Ver mais</span>
            </button>
          </div>

          <Button className="mb-16 mt-4 h-[50px] w-[250px] rounded-none text-[16px]">
            ADICIONAR AO CARRINHO
          </Button>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div>
                <Image
                  src={envioImg}
                  width={45}
                  height={45}
                  alt="Envio gratis"
                />
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                  RETIRO Y ENVÍO GRATIS
                </h4>
                <p className="text-[11px] tracking-[2px] text-gray-600">
                  Retira gratis en nuestras tiendas o envío gratis en compras
                  mayores a $30.000
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <Image
                  src={cambiosImg}
                  width={45}
                  height={45}
                  alt="Cambios y devoluciones"
                />
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                  CAMBIOS Y DEVOLUCIONES
                </h4>
                <p className="text-[11px] tracking-[2px] text-gray-600">
                  ¿Dudas sobre tu elección? Tenes hasta 6 meses para cambiar tu
                  compra y hasta 15 días de devolución.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <Image
                  src={cambiosImg}
                  width={45}
                  height={45}
                  alt="Cambios y devoluciones"
                />
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                  CAMBIOS Y DEVOLUCIONES
                </h4>
                <p className="text-[11px] tracking-[2px] text-gray-600">
                  ¿Dudas sobre tu elección? Tenes hasta 6 meses para cambiar tu
                  compra y hasta 15 días de devolución.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
