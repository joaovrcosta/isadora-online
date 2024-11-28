import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { UserRound } from 'lucide-react';

export default function EditPage() {
  return (
    <div className="mt-24 flex flex-col space-x-0 lg:flex-row xl:flex-row">
      <SidebarAccount />
      <main className="h-full w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          icon={<UserRound size={24} />}
          title="Info. de contato"
          className="mb-8 h-full max-w-[825px]"
        >
          <div className="mb-7 flex space-x-12">
            <div className="mb-7 w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
          </div>

          <div className="mb-7 flex space-x-12">
            <div className="mb-7 w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
          </div>

          <div className="mb-7 flex space-x-12">
            <div className="mb-7 w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
          </div>

          <div className="mb-7 flex space-x-12">
            <div className="mb-7 w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Correo electrónico
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <Input />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="h-[42px] w-[165px] rounded-none text-[12px]"
            >
              SALVAR DADOS
            </Button>
          </div>
        </Card>
        <Card
          title="Cambiar datos de acceso"
          showIcon={false}
          className="h-full max-w-[825px]"
        >
          <Label className="text-xs">Código</Label>
          <Input placeholder="Digite o código" />
          <div className="mt-7 flex items-center justify-center">
            <Button
              className="h-[40px] w-[200px] rounded-none bg-black text-xs font-bold"
              disabled
            >
              CHECAR CÓDIGO
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
