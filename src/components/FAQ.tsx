
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  className?: string;
};

const FAQ = ({ items, className = '' }: FAQProps) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
