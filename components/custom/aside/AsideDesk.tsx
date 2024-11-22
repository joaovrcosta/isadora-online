import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';

export function AsideDesk({ className = '' }) {
  return (
    <div className={`flex ${className}`}>
      <aside className="w-full">
        <h2 className="text-md mb-4 text-sm font-medium tracking-[2px]">
          Filtrar por:
        </h2>
        <hr className="border-t border-gray-200" />

        <Accordion type="single" collapsible>
          <AccordionItem value="price">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">PREÇO</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div>
                  <label>
                    <input type="checkbox" value="0-50" className="mr-2" />
                    R$0 - R$50
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value="50-100" className="mr-2" />
                    R$50 - R$100
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value="100+" className="mr-2" />
                    R$100+
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="color">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">COR</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div>
                  <label>
                    <input type="checkbox" value="red" className="mr-2" />
                    Vermelho
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value="blue" className="mr-2" />
                    Azul
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value="green" className="mr-2" />
                    Verde
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    </div>
  );
}
