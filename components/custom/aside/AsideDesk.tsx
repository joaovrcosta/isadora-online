import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';

export function AsideDesk() {
  return (
    <div className="flex">
      <aside className="w-64">
        <h2 className="text-md mb-4 font-light">Filtrar por:</h2>
        <Accordion type="single" collapsible>
          {/* Filtro de Preço */}
          <AccordionItem value="price">
            <AccordionTrigger>
              <span className="text-xs">PREÇO</span>
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

          {/* Filtro de Cor */}
          <AccordionItem value="color">
            <AccordionTrigger>
              <span className="text-xs">COR</span>
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
