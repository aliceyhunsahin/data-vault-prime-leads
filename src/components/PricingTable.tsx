
import { Euro } from "lucide-react";

type PricingItemProps = {
  category: string;
  price: number;
  description: string;
};

const PricingItem = ({ category, price, description }: PricingItemProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden card-hover">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{category}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-2 mb-2">
          <Euro className="h-5 w-5 text-primary" />
          <span className="text-2xl font-bold">{price.toLocaleString()} USDT</span>
        </div>
        <p className="text-xs text-muted-foreground">One-time purchase</p>
      </div>
      <div className="bg-secondary p-4">
        <ul className="text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Verified emails & LinkedIn profiles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Secure delivery within 24 hours</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>CSV and Excel formats</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

type PricingTableProps = {
  items: Array<{
    category: string;
    price: number;
    description: string;
  }>;
  className?: string;
};

const PricingTable = ({ items, className = '' }: PricingTableProps) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <PricingItem
            key={index}
            category={item.category}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
