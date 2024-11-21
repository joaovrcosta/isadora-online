'use client';
import { CustomBreadCrumbs } from '@/components/custom-bread-crumbs';
import Aside from '@/components/custom/aside/Aside';
import { AsideDesk } from '@/components/custom/aside/AsideDesk';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <div className="mt-20 md:mt-[130px] lg:hidden xl:mt-[102px]">
        <Image
          className="md:hidden"
          src="/banner/TOPBANNER_ISA_NEW-IN_mobile_1_.webp"
          height={203}
          width={830}
          alt="nueva coleccion"
          loading="lazy"
        />
        <Image
          className="hidden md:block"
          src="/banner/TOPBANNER_ISA_NEW-IN_3__2.webp"
          height={160}
          width={1920}
          alt="nueva coleccion"
          loading="lazy"
        />
      </div>
      <div className="lg:hidden">
        <h1 className="my-5 text-center text-2xl font-normal capitalize tracking-widest">
          {pathName.replaceAll(/[\/-]/gi, (match) =>
            match === '/' ? '' : ' ',
          )}
        </h1>
      </div>

      <section className="relative z-10 flex flex-wrap md:flex-nowrap md:pl-12 md:pr-8 md:pt-0 lg:flex-col xl:mt-24">
        <CustomBreadCrumbs />
        <div className="space-x-28 lg:flex">
          <div className="hidden lg:block">
            <div>
              <h1 className="mb-8 text-left text-4xl font-normal capitalize tracking-widest">
                {pathName.replaceAll(/[\/-]/gi, (match) =>
                  match === '/' ? '' : ' ',
                )}
              </h1>
            </div>
            <AsideDesk />
          </div>

          <Aside className="sticky top-20 z-50 order-first min-h-10 w-full flex-grow basis-full pr-[2%] md:top-44 md:mt-20 md:h-fit md:w-1/5 md:basis-[20%] lg:hidden" />

          <main className="relative w-full flex-grow basis-auto overflow-hidden px-4 pb-10 md:min-h-80 md:w-4/5 md:px-0 md:pl-1">
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
