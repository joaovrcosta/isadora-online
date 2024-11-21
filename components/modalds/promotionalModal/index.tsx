import { Button } from '@/components/shadcn/ui/button';
import { DialogContent, DialogFooter } from '@/components/shadcn/ui/dialog';
import Image from 'next/image';
import isaClubImg from '@/public/icons/isaClub.svg';

export function PromotionalModal() {
  return (
    <DialogContent className="bg-lightPink">
      <div className="flex items-center justify-center p-4 py-12">
        <Image src={isaClubImg} width={375} height={40} />
      </div>
      <DialogFooter className="bg-white p-4">
        <Button className="bg-lightPink hover:bg-lightPink/80 text-black">
          APROVEITAR AGORA
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
