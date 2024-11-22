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
      <section className="relative z-10 md:flex-nowrap md:pl-12 md:pr-8 md:pt-0 lg:mt-32 lg:flex-col xl:mt-24">
        <CustomBreadCrumbs />

        <main className="relative w-full basis-auto overflow-hidden px-4 pb-10 md:min-h-80">
          {children}
        </main>
      </section>
    </>
  );
}
