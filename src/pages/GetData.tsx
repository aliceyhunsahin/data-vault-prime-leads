
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PricingTable } from '@/components/PricingTable';
import FAQ from '@/components/FAQ';
import TrustBadge from '@/components/TrustBadge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Shield } from 'lucide-react';

const GetData = () => {
  // Apply 75% discount to all prices (original * 0.25 = 375)
  const pricingData = [
    {
      category: "European Investor Firms and Contacts",
      price: 375, 
      description: "Decision makers at top European VCs",
      contactCount: 50000,
      companyCount: 20000,
    },
    {
      category: "European VCs",
      price: 75,
      description: "Premium access to European venture capital firms",
      companyCount: 15000,
    },
    {
      category: "European Angel Investors and Contacts",
      price: 125,
      description: "Active angel investors throughout Europe",
      contactCount: 2000,
      emailAddresses: true,
    },
    {
      category: "Family Offices and Contacts",
      price: 75,
      description: "Family offices across USA, EU, and India",
      contactCount: 500,
      companyCount: 1600,
    },
  ];

  const faqItems = [
    {
      question: "Can I pay with BTC or ETH?",
      answer: "Currently we only accept USDT. Support for more coins coming soon.",
    },
    {
      question: "Is the data GDPR compliant?",
      answer: "All data is sourced from publicly available or B2B-compliant directories.",
    },
    {
      question: "How recent is the data?",
      answer: "All contacts are verified within the last 3 months to ensure maximum accuracy.",
    },
    {
      question: "What if some emails bounce?",
      answer: "We guarantee a minimum 95% deliverability rate. If you experience more than 5% bounces, we'll provide replacement contacts.",
    },
    {
      question: "Can I get a custom dataset?",
      answer: "Yes! Contact us at info@deepoasisai.com for custom data requirements and quotes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Purchase Premium Datasets with Crypto
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Secure access to verified decision-maker contacts with simple cryptocurrency payments.
          </p>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <TrustBadge type="verified" />
            <TrustBadge type="encrypted" />
            <TrustBadge type="crypto" />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Dataset Pricing</h2>
            <p className="section-subtitle">
              Choose the dataset that meets your needs. All prices are in USDT.
            </p>
          </div>
          
          <PricingTable items={pricingData} />
        </div>
      </section>
      
      {/* Payment Instructions */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Payment Instructions</h2>
            <p className="section-subtitle text-center">
              Follow these simple steps to purchase and receive your dataset:
            </p>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 mt-8">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Choose your dataset</h3>
                    <p className="text-muted-foreground">
                      Select the dataset you need from the options above and note the USDT amount.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Send payment</h3>
                    <p className="text-muted-foreground mb-4">
                      Transfer the exact USDT amount to one of our wallet addresses:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-100 p-3 rounded-md">
                        <p className="text-sm font-medium mb-1">USDT (ERC-20):</p>
                        <code className="text-sm break-all">0xYourWalletAddressHere</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <p className="text-sm font-medium mb-1">USDT (TRC-20):</p>
                        <code className="text-sm break-all">YourTRC20WalletAddress</code>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Send confirmation</h3>
                    <p className="text-muted-foreground">
                      Email a screenshot of your transaction to <strong>info@deepoasisai.com</strong> with the dataset name in the subject line.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Receive your data</h3>
                    <p className="text-muted-foreground">
                      Within 24 hours, we'll send you a secure, private download link to access your dataset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Notice */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Alert className="border-primary/20 bg-primary/5">
              <Shield className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-semibold">Security Notice</AlertTitle>
              <AlertDescription>
                Your payment is secure. All data is delivered manually after validation to protect both buyers and sellers. 
                We never store your payment information or share your purchase details with third parties.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetData;
