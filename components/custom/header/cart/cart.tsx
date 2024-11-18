import React from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
} from '@/components/shadcn/ui/sheet';
import { cn } from '@/lib/utils';
import useCartStore from '@/app/_stores/useCartStore';

interface CartProps {
  isOpenCart: boolean;
  setIsOpenCart: (value: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ isOpenCart, setIsOpenCart }) => {
  const cart = useCartStore((state) => state.cart);

  return (
    <Sheet open={isOpenCart} onOpenChange={setIsOpenCart}>
      <SheetTrigger className="hover:opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={cn(
            'h-7 w-7',
            isOpenCart ? 'text-[#ffb8b8]' : 'stroke-current',
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </SheetTrigger>

      <SheetOverlay className="top-20 bg-white/75 px-5 pb-10 pt-6 md:top-24" />
      <SheetContent className="top-20 w-11/12 px-5 pb-10 pt-6 text-center sm:max-w-none md:top-24">
        {/* Add your cart items here */}

        {cart.length === 0 ? (
          <p className="px-8 py-4">
            No hay productos en tu carrito de compras.
          </p>
        ) : (
          <div>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                Items you have added to your cart.
              </SheetDescription>
            </SheetHeader>
            <div>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
