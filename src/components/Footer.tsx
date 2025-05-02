
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DataVault Prime</h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium B2B contact data, delivered securely.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/get-data" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Get The Data
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-primary-foreground/80">
              For questions and support:<br />
              <a href="mailto:admin@yourdomain.com" className="hover:text-white transition-colors">
                admin@yourdomain.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} DataVault Prime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
