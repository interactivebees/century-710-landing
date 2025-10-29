import { Shield, CheckCircle, Zap, Award, Droplets, Leaf } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function KeyHighlights() {
  const highlights = [
    {
      icon: Shield,
      title: "100% BWP Grade",
      description: "Boiling Water Proof grade ensuring complete moisture resistance for all weather conditions.",
      color: "text-century-red",
      bgColor: "bg-red-50"
    },
    {
      icon: Award,
      title: "8-Year Warranty",
      description: "Industry-leading warranty coverage backed by rigorous quality testing and certification.",
      color: "text-century-red",
      bgColor: "bg-red-50"
    },
    {
      icon: CheckCircle,
      title: "Uniform Thickness",
      description: "Precision-engineered for consistent thickness across the entire sheet for perfect finishes.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Superior Strength",
      description: "High-density core construction providing exceptional structural integrity and load-bearing capacity.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Droplets,
      title: "Waterproof Adhesive",
      description: "Advanced phenolic resin technology ensuring permanent waterproof bonding between layers.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Leaf,
      title: "E1 Emission",
      description: "Low formaldehyde emission meeting European E1 standards for indoor air quality and safety.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-century-red/10 text-century-red px-4 py-2 rounded-full font-semibold mb-4">
            Premium Features
          </div>
          <h2 className="mb-6">Why Choose Sainik 710?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Engineered with cutting-edge technology and premium materials to deliver 
            unmatched performance in the most demanding applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl ${highlight.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${highlight.color}`} />
                  </div>
                  <h3 className="font-bold mb-3 text-gray-900 text-xl">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section with Plywood Theme */}
        <div className="mt-20 bg-century-red rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
              <p className="text-red-100 text-lg">Numbers that speak for our quality and reliability</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-red-100 font-medium">Authorized Dealers</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-red-100 font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-red-100 font-medium">Quality Guarantee</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">1M+</div>
                <div className="text-red-100 font-medium">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}