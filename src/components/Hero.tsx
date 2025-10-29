import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Shield, Award, Clock, Droplets, Star } from "lucide-react";
import { EnquireNowDialog } from "./EnquireNowDialog";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-century-dark via-gray-900 to-century-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-century-dark/95 to-century-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-century-dark/40"></div>
        {/* Wood grain pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Brand Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-century-red/20 backdrop-blur-sm rounded-full border border-century-red/30 mb-8">
              <span className="font-bold text-century-red">CENTURY PLY</span>
              <span className="mx-3 text-white/50">•</span>
              <span className="text-white font-medium">BWP Grade Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              SAINIK <span className="text-century-red">710</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300">
                Boiling Waterproof Plywood
              </span>
            </h1>

            {/* USP Line */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-century-red font-semibold mb-2">
                India's Most Trusted BWP Grade Plywood
              </p>
              <p className="text-lg text-gray-300">
                72-Hour Boiling Water Test Certified • IS:303 Standards
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-century-red/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-century-red" />
                </div>
                <div>
                  <div className="font-bold text-white">8 YEAR WARRANTY</div>
                  <div className="text-sm text-gray-400">Manufacturing Guarantee</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-bold text-white">100% BWP GRADE</div>
                  <div className="text-sm text-gray-400">Boiling Waterproof</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <div className="font-bold text-white">IS:303 CERTIFIED</div>
                  <div className="text-sm text-gray-400">Bureau of Standards</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-white">PREMIUM GURJAN</div>
                  <div className="text-sm text-gray-400">Face Veneer</div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-white/10">
              <p className="text-lg text-gray-200 leading-relaxed">
                <strong className="text-white">Perfect for Kitchens & Bathrooms:</strong> Engineered with phenolic resin adhesive 
                for extreme moisture resistance. Ideal for modular furniture, marine applications, 
                and high-humidity environments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <EnquireNowDialog>
                <Button 
                  size="lg" 
                  className="bg-century-red hover:bg-century-red-dark text-white font-bold px-10 py-4 text-lg shadow-lg"
                >
                  Get Best Price Quote
                </Button>
              </EnquireNowDialog>
              <WhatsAppButton 
                variant="default" 
                className="bg-green-500 hover:bg-green-600 border-2 border-green-500 font-bold px-10 py-4 text-lg"
                message="Hi! I'm interested in Sainik 710 BWP Plywood. Can you please share the best price quote and technical specifications?"
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-century-red">50+</div>
                <div className="text-sm text-gray-400">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-century-red">500+</div>
                <div className="text-sm text-gray-400">Dealers PAN India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-century-red">1M+</div>
                <div className="text-sm text-gray-400">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-century-red">₹114</div>
                <div className="text-sm text-gray-400">Starting Price</div>
              </div>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Sainik 710 Image with multiple fallback options */}
              <div className="relative group">
                <div className="w-full max-w-lg mx-auto">
                  {/* Try the original imgur URL first, with fallback to a high-quality plywood image */}
                  <img
                    src="https://www.centuryply.com/uploads/Sainik_710_1_6e015aeee8.jpg"
                    alt="Century Ply Sainik 710 - BWP Waterproof Plywood with Professional Endorsement"
                    className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Fallback to a high-quality professional plywood image
                      target.src = "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=600&fit=crop&crop=center";
                      target.onerror = () => {
                        // Final fallback to another professional image
                        target.src = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop";
                      };
                    }}
                  />
                </div>
                
                {/* Floating Quality Badges */}
                <div className="absolute -top-4 -left-4 bg-century-red text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-pulse">
                  AUTHENTIC
                </div>
                <div className="absolute top-1/4 -right-6 bg-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                  BWP GRADE
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold shadow-lg">
                  ₹114/UNIT*
                </div>
              </div>

              {/* Professional Endorsement Callout */}
              <div className="absolute top-16 -left-8 bg-blue-600/90 backdrop-blur-sm text-white p-3 rounded-lg text-sm border border-blue-400/30">
                <div className="font-semibold">Professional Choice</div>
                <div className="text-blue-100">Trusted by Experts</div>
              </div>
              
              {/* Price Highlight */}
              <div className="absolute bottom-16 -right-8 bg-green-600/90 backdrop-blur-sm text-white p-3 rounded-lg text-sm border border-green-400/30">
                <div className="font-semibold">Best Value</div>
                <div className="text-green-100">Competitive Pricing</div>
              </div>
            </div>
            
            {/* Background Glow Effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-century-red/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
            
            {/* Quality Seal */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              ⭐ PROFESSIONAL CHOICE
            </div>
            
            {/* Authentic Product Badge */}
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              🏭 CENTURY PLY ORIGINAL
            </div>

            {/* Alternative: Product Showcase with Text Overlay (if image fails) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-century-dark/80 rounded-3xl">
              <div className="text-center text-white p-8">
                <div className="text-4xl font-bold text-century-red mb-4">SAINIK 710</div>
                <div className="text-xl mb-2">BWP Grade Plywood</div>
                <div className="text-sm text-gray-300">Professional Quality • Starting ₹114</div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-century-red rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C400,120 800,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}