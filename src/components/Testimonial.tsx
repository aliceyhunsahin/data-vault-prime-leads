
import { cn } from '@/lib/utils';

type TestimonialProps = {
  quote: string;
  role: string;
  company?: string;
  className?: string;
};

const Testimonial = ({ quote, role, company, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg border border-gray-200 card-hover h-full",
      className
    )}>
      <div className="mb-4 text-lg italic text-gray-700">"{quote}"</div>
      <div className="font-semibold">{role}</div>
      {company && <div className="text-sm text-muted-foreground">{company}</div>}
    </div>
  );
};

export default Testimonial;
