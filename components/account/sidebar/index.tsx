'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SidebarAccount() {
  const pathName = usePathname();

  const menuItems = [
    { label: 'Minha conta', path: '/customer/account' },
    { label: 'Meus dados', path: '/customer/account/edit' },
    { label: 'Meus pedidos', path: '/customer/account/history' },
    { label: 'Meus endereços', path: '/meus-enderecos' },
    { label: 'Meus favoritos', path: '/meus-favoritos' },
    { label: 'Giftcard', path: '/giftcard' },
    { label: 'Newsletter', path: '/newsletter' },
  ];

  return (
    <aside className="px-16 py-2">
      <div className="w-[314px] max-w-[314px] py-16">
        <div className="mb-12">
          <h3 className="font-bold">Olá,</h3>
          <p className="text-sm">customer@store.com</p>
        </div>

        <ul className="space-y-5 text-[13px]">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block cursor-pointer ${
                  pathName === item.path
                    ? 'border-l-4 border-black pl-2 font-bold'
                    : 'text-gray-700 transition-all duration-100 hover:text-lightPink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button className="text-[13px] font-bold">Sair da conta</button>
        </div>
      </div>
    </aside>
  );
}
