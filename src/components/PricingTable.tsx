
import { Euro, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type PricingItemProps = {
  category: string;
  price: number;
  description: string;
  contactCount?: number;
};

interface PricingTableProps {
  items: PricingItemProps[];
}

export const PricingTable = ({ items }: PricingTableProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <PricingItem key={item.category} {...item} />
      ))}
    </div>
  );
};

const PricingItem = ({ category, price, description, contactCount }: PricingItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <div className="px-6 py-8">
        <h3 className="text-xl font-semibold text-center mb-1">{category}</h3>
        <p className="text-muted-foreground text-center mb-2">{description}</p>
        {contactCount && (
          <p className="text-center font-medium mb-4">
            <strong>Includes {contactCount.toLocaleString()}+ verified contacts</strong>
          </p>
        )}
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-primary">${price}</span>
        </div>
        
        <div className="mt-4 text-center">
          <Button 
            variant="default" 
            className="w-full" 
            onClick={() => window.location.href = "mailto:info@deepoasisai.com?subject=Inquiry about " + category}
          >
            <Mail size={16} />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
