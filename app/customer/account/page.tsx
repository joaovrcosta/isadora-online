import { Button } from '@/components/shadcn/ui/button';
import Image from 'next/image';
import isaClubLogo from '@/public/icons/ISACLUB-logo-100.webp';

export default function AccountPage() {
  return (
    <div className="mt-32 flex">
      <aside className="w-[22.3%] max-w-[454px] px-16">
        <div className="py-16">
          <div className="mb-5">
            <h3 className="font-bold">Olá,</h3>
            <p className="text-sm">customer@store.com</p>
          </div>

          <ul className="space-y-5 text-[13px]">
            <li>Minha conta</li>
            <li>Meus dados</li>
            <li>Meus pedidos</li>
            <li>Meus endereços</li>
            <li>Meus favoritos</li>
            <li>Giftcard</li>
            <li>Newsletter</li>
          </ul>

          <button>Sair da conta</button>
        </div>
      </aside>
      <main className="w-full bg-[#eee] px-24 py-12">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="h-[266px] w-[390px] flex-col items-center justify-center rounded-3xl bg-white px-9 pb-8 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[43px] w-[43px] rounded-full bg-[#f8e6e3]"></div>
            <Image
              src={isaClubLogo}
              alt="Isa Club Logo"
              height={21}
              width={100}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              Ya formás parte del Programa de lealtad de Isadora. Podrás acceder
              a descuentos, colecciones y beneficios exclusivos.
            </p>
            <div className="mt-7">
              <Button className="rounded-none">VER BENEFICIOS</Button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="h-[43px] w-[43px] rounded-full bg-[#f8e6e3]"></div>
            <h4 className="text-sm">Giftcard</h4>
          </div>
          <p>
            Ya formás parte del Programa de lealtad de Isadora. Podrás acceder a
            descuentos, colecciones y beneficios exclusivos.
          </p>
          <Button>VER BENEFICIOS</Button>
        </div>
      </main>
    </div>
  );
}
