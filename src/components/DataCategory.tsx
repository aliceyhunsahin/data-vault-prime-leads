
import { Folder, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

type DataCategoryProps = {
  title: string;
  icon: 'folder' | 'users';
  description: string;
  className?: string;
};

const DataCategory = ({ title, icon, description, className }: DataCategoryProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 p-6 card-hover",
      className
    )}>
      <div className="flex items-center gap-3 mb-3">
        {icon === 'folder' ? (
          <Folder className="h-6 w-6 text-primary" />
        ) : (
          <Users className="h-6 w-6 text-primary" />
        )}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default DataCategory;
