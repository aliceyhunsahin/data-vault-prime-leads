
import { Euro, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type PricingItemProps = {
  category: string;
  records: string;
  price: number;
  features: string[];
};

export const PricingTable = () => {
  const pricingItems: PricingItemProps[] = [
    {
      category: "Startup Package",
      records: "5,000 records",
      price: 199,
      features: ["Email addresses", "Company names", "Phone numbers", "Industry filters"],
    },
    {
      category: "Business Package",
      records: "25,000 records",
      price: 499,
      features: ["Email addresses", "Company names", "Phone numbers", "Industry filters", "Role-based targeting"],
    },
    {
      category: "Enterprise Package",
      records: "100,000+ records",
      price: 1999,
      features: ["Email addresses", "Company names", "Phone numbers", "Industry filters", "Role-based targeting", "Custom data fields", "Integration support"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingItems.map((item) => (
        <PricingItem key={item.category} {...item} />
      ))}
    </div>
  );
};

const PricingItem = ({ category, records, price, features }: PricingItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <div className="px-6 py-8">
        <h3 className="text-xl font-semibold text-center mb-1">{category}</h3>
        <p className="text-muted-foreground text-center mb-4">{records}</p>
        <div className="flex items-center justify-center mb-6">
          <Euro className="text-primary" />
          <span className="text-3xl font-bold text-primary">{price}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-center justify-center">
              <span>✓</span>
              <span>{feature}</span>
            </li>
          ))}
          <li className="flex items-center gap-2 text-center justify-center">
            <span>✓</span>
            <span>CSV and Excel formats</span>
          </li>
        </ul>
        
        <div className="mt-4 text-center">
          <Button 
            variant="default" 
            className="w-full" 
            onClick={() => window.location.href = "mailto:info@deepoasisaI.com?subject=Inquiry about " + category}
          >
            <Mail size={16} />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
