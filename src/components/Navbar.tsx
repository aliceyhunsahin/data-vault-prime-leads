
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button (left) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo (centered) */}
          <Link to="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/de380eab-659f-4c30-bcf7-757f971d689d.png" 
                alt="DeepOasisAI Logo" 
                className="h-10 md:h-12" 
              />
            </div>
          </Link>

          {/* Desktop Navigation (right) */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Button asChild>
              <Link to="/get-data">
                Explore Datasets
              </Link>
            </Button>
          </nav>
          
          {/* Empty div for spacing on mobile */}
          <div className="md:hidden">
            <div className="w-8"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Button asChild className="w-full">
              <Link to="/get-data" onClick={() => setIsMenuOpen(false)}>
                Explore Datasets
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
