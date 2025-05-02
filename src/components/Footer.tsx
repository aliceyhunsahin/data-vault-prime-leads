
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/5c1f80f6-6452-423a-847f-168344e788d1.png" 
                alt="DeepOasisAI Logo" 
                className="h-10 bg-white rounded-full p-1" 
              />
              <h3 className="text-xl font-bold">DeepOasisAI</h3>
            </div>
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
                  Explore Datasets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-primary-foreground/80">
              For questions and support:<br />
              <a href="mailto:info@deepoasisaI.com" className="hover:text-white transition-colors">
                info@deepoasisaI.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} DeepOasisAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
