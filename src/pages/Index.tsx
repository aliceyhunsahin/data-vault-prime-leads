
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustBadge from "@/components/TrustBadge";
import DataCategory from "@/components/DataCategory";
import Testimonial from "@/components/Testimonial";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
              Access Exclusive Investor & Travel Industry Contact Data
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Verified emails and LinkedIn profiles of decision-makers. Curated for precision. Delivered securely.
            </p>
            <Button asChild size="lg" className="btn-accent">
              <Link to="/get-data" className="flex items-center gap-2">
                Explore the Data <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <TrustBadge type="verified" />
            <TrustBadge type="encrypted" />
            <TrustBadge type="crypto" />
          </div>
        </div>
      </section>

      {/* Data Categories Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Premium Data Categories</h2>
            <p className="section-subtitle">
              Access verified contact information for key decision makers across these high-value categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DataCategory 
              icon="users" 
              title="European Venture Capital Firms" 
              description="Decision makers at top European VCs, including partners and investment directors."
            />
            <DataCategory 
              icon="users" 
              title="European Angel Investors" 
              description="Active angel investors throughout Europe with verified contact details."
            />
            <DataCategory 
              icon="users" 
              title="European Travel Company Executives" 
              description="C-level and senior leadership at travel industry companies across Europe."
            />
            <DataCategory 
              icon="users" 
              title="Family Offices (USA, EU, India)" 
              description="Hard-to-reach family office principals and investment decision makers."
            />
            <DataCategory 
              icon="users" 
              title="Most Active Travel Industry Acquirers" 
              description="Strategic buyers and companies with a history of travel sector acquisitions."
            />
          </div>
        </div>
      </section>

      {/* Sample Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Try Before You Buy</h2>
            <p className="section-subtitle">
              See the data quality firsthand with our free sample. Download verified contacts from one example company.
            </p>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Sample
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what users have achieved with our data:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Testimonial 
              quote="I closed a deal with one of the investors within 2 weeks." 
              author="Alex Thompson" 
              company="CEO, FinTech Startup"
            />
            <Testimonial 
              quote="Best curated VC data I've seen online." 
              author="Sarah Mitchell" 
              company="Founder, TravelTech"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              We don't rely on automated scraping or outdated directories. Each contact in our database is:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12">
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Sourced Carefully</h3>
                <p className="text-muted-foreground">From public business profiles and directories</p>
              </div>
              
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Manually Verified</h3>
                <p className="text-muted-foreground">Each email and profile checked by our team</p>
              </div>
              
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Regularly Updated</h3>
                <p className="text-muted-foreground">To ensure maximum deliverability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to access premium contacts?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start with our verified decision-maker contacts and accelerate your outreach efforts today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/get-data" className="flex items-center gap-2">
              View Pricing & Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
