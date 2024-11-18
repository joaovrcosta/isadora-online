import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterTop: React.FC = () => {
  return (
    <div className="">
      <Link href="/locales">
        <div className="relative min-h-16 w-full transition-opacity duration-300 hover:opacity-75">
          <Image
            src="/others/bn-tu-tienda.webp"
            alt="Tu tienda"
            height={120}
            width={1920}
            className="hidden md:block"
          />
          <Image
            src="/others/bn-tu-tienda.webp"
            alt="Tu tienda"
            fill
            className="h-60 object-cover md:hidden"
          />
        </div>
      </Link>

      <div className="mx-0 flex min-h-[373px] flex-col justify-center gap-5 rounded-none border border-[#f8e6e3] bg-[#f8e6e3] px-5 text-center text-base leading-4">
        <p className="text-center text-xl font-semibold leading-6">
          Unite a ISACLUB
        </p>
        <p className="text-center">
          ¡Sé parte de ISA club y enterate de todas las novedades y los
          beneficios!
        </p>
        <p className="flex items-center justify-center">
          <Link
            href="/descubre-isaclub"
            className="border-solid bg-black px-8 py-4 font-medium text-white transition-opacity duration-300 hover:opacity-75"
          >
            SUSCRIBIRSE
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
