import { ProductItem } from '@/components/product-item';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';

export default function CollectionPage() {
  return (
    <div>
      <div>
        <div className="mb-10 flex w-full items-center justify-end gap-2">
          <span className="text-xs">ORDENAR POR:</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Mais relevantes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
