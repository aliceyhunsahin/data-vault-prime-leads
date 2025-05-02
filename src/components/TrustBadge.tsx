
import React from 'react';
import { BadgeCheck, Shield, Lock } from 'lucide-react';

type TrustBadgeProps = {
  type: 'verified' | 'encrypted' | 'crypto';
  className?: string;
};

const TrustBadge = ({ type, className = '' }: TrustBadgeProps) => {
  let icon;
  let title;
  let description;

  switch (type) {
    case 'verified':
      icon = <BadgeCheck className="h-8 w-8 text-green-500" />;
      title = '100% Verified Emails';
      description = 'Every contact manually verified';
      break;
    case 'encrypted':
      icon = <Lock className="h-8 w-8 text-blue-500" />;
      title = 'Encrypted Delivery';
      description = 'Secure download links';
      break;
    case 'crypto':
      icon = <Shield className="h-8 w-8 text-purple-500" />;
      title = 'Crypto Payments Accepted';
      description = 'Fast & secure transactions';
      break;
    default:
      icon = <BadgeCheck className="h-8 w-8 text-green-500" />;
      title = '100% Verified';
      description = 'Quality guaranteed';
  }

  return (
    <div className={`flex flex-col items-center p-4 text-center ${className}`}>
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default TrustBadge;
