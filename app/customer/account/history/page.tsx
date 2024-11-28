import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { ShoppingBasket } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="mt-24 flex h-full flex-col space-x-0 lg:flex-row xl:flex-row">
      <SidebarAccount />

      <main className="h-auto w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          title="Mis Pedidos"
          className="h-full max-h-[300px] max-w-[825px]"
          icon={<ShoppingBasket />}
        >
          <div className="mx-auto mt-16 flex items-center justify-center">
            <div className="space-y-6 text-center">
              <p className="text-[13px]">
                Aún no hay pedidos registrados, ¿Qué esperas para comprar?
              </p>
              <Button className="h-[42px] w-[200px] text-xs font-bold">
                COMPRAR
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
