import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Check, Download, FileText, Beaker, IndianRupee, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function ProductDetails() {
  const features = [
    "100% Boiling Waterproof (BWP) Grade",
    "8-Year Comprehensive Warranty",
    "Premium Gurjan Face Veneer",
    "Phenolic Resin (WBP) Adhesive",
    "Uniform Thickness ±0.2mm Tolerance",
    "Termite & Borer Resistant Treatment",
    "E1 Grade Low Formaldehyde Emission",
    "IS:303 & CE Mark Certified",
    "72-Hour Boiling Water Test Passed",
    "Marine Grade Applications Suitable"
  ];

  const applications = [
    {
      title: "Kitchen Cabinets & Modular Furniture",
      description: "Perfect for high-moisture kitchen environments"
    },
    {
      title: "Bathroom Vanities & Wash Basins",
      description: "Excellent water resistance for wet areas"
    },
    {
      title: "Exterior Cladding & Facades",
      description: "Weather-resistant for outdoor applications"
    },
    {
      title: "Marine & Boat Building",
      description: "Suitable for marine grade applications"
    },
    {
      title: "False Ceilings & Partitions",
      description: "Structural stability for interior design"
    },
    {
      title: "Flooring & Subflooring",
      description: "Moisture-resistant base for all flooring types"
    },
    {
      title: "Industrial & Commercial Projects",
      description: "Heavy-duty applications in commercial spaces"
    },
    {
      title: "Export Quality Furniture",
      description: "International standards for furniture manufacturing"
    }
  ];

  const priceRange = [
    { thickness: "4mm", price: "₹45-55", weight: "18-20 kg" },
    { thickness: "6mm", price: "₹65-75", weight: "20-22 kg" },
    { thickness: "9mm", price: "₹95-110", weight: "22-25 kg" },
    { thickness: "12mm", price: "₹125-140", weight: "25-28 kg" },
    { thickness: "15mm", price: "₹155-175", weight: "28-32 kg" },
    { thickness: "18mm", price: "₹185-210", weight: "32-35 kg" },
    { thickness: "21mm", price: "₹215-245", weight: "35-38 kg" },
    { thickness: "25mm", price: "₹255-285", weight: "38-42 kg" }
  ];

  return (
    <section className="py-20 bg-white" id="technical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-century-red border-century-red bg-red-50 px-6 py-2 text-sm">
            TECHNICAL SPECIFICATIONS
          </Badge>
          <h2 className="mb-6">Sainik 710 - Complete Product Information</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
            Discover the technical excellence and superior engineering that makes Sainik 710 
            the preferred choice for architects, contractors, and furniture manufacturers across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Product Images Gallery */}
          <div className="space-y-6">
            {/* Main Sainik 710 Promotional Image */}
            <div className="relative group">
              <img
                src="https://www.centuryply.com/uploads/Sainik_710_1_6e015aeee8.jpg"
                alt="Century Ply Sainik 710 - Authentic BWP Waterproof Plywood with Professional Endorsement"
                className="w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
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
              
              <div className="absolute top-6 left-6 flex flex-wrap space-x-2 space-y-2">
                <Badge className="bg-century-red text-white px-4 py-2">AUTHENTIC PRODUCT</Badge>
                <Badge className="bg-green-600 text-white px-4 py-2">IS:303 CERTIFIED</Badge>
                <Badge className="bg-yellow-500 text-black px-4 py-2">STARTING ₹114</Badge>
              </div>
            </div>
            
            {/* Product Detail Views */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=250&h=200&fit=crop"
                  alt="Cross-section view showing plywood layers and construction quality"
                  className="w-full h-32 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-medium bg-black/60 px-2 py-1 rounded">
                    Cross Section
                  </span>
                </div>
              </div>
              <div className="relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=250&h=200&fit=crop"
                  alt="Surface finish showing premium Gurjan veneer wood grain"
                  className="w-full h-32 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-medium bg-black/60 px-2 py-1 rounded">
                    Surface Finish
                  </span>
                </div>
              </div>
              <div className="relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=250&h=200&fit=crop"
                  alt="Quality control testing and certification process"
                  className="w-full h-32 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-medium bg-black/60 px-2 py-1 rounded">
                    Quality Testing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold">SAINIK 710</h3>
              <Badge variant="secondary" className="bg-century-red/10 text-century-red border-century-red px-3 py-1">
                BWP GRADE
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300 px-3 py-1">
                PREMIUM
              </Badge>
            </div>
            
            <div className="bg-century-red/5 p-4 rounded-lg mb-6">
              <p className="text-century-red font-semibold mb-2">
                🏆 India's #1 Selling BWP Plywood
              </p>
              <p className="text-gray-700">
                Trusted by over 1 million customers nationwide for extreme durability and water resistance.
                Professional choice starting at ₹114 per unit.
              </p>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Sainik 710 represents five decades of plywood innovation, featuring advanced 
              boiling waterproof technology with phenolic resin adhesive. Engineered specifically 
              for Indian climate conditions and high-moisture applications.
            </p>

            {/* Key Features Checklist */}
            <div className="grid grid-cols-1 gap-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 bg-century-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-century-red" />
                  </div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-century-red hover:bg-century-red-dark flex items-center gap-2 px-6">
                <IndianRupee className="w-4 h-4" />
                Get Price Quote
              </Button>
              <Button variant="outline" className="border-century-red text-century-red hover:bg-century-red hover:text-white flex items-center gap-2 px-6">
                <Download className="w-4 h-4" />
                Download Catalog
              </Button>
              <Button variant="outline" className="border-century-red text-century-red hover:bg-century-red hover:text-white flex items-center gap-2 px-6">
                <Truck className="w-4 h-4" />
                Check Delivery
              </Button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-800">Available Sizes</div>
                <div className="text-blue-600">8'×4' | 9'×4' | Custom</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="font-semibold text-green-800">Thickness Range</div>
                <div className="text-green-600">4mm to 25mm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications Tabs */}
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-10 bg-gray-100 h-14">
            <TabsTrigger value="specifications" className="data-[state=active]:bg-century-red data-[state=active]:text-white font-medium">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="dimensions" className="data-[state=active]:bg-century-red data-[state=active]:text-white font-medium">
              Dimensions & Pricing
            </TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-century-red data-[state=active]:text-white font-medium">
              Applications
            </TabsTrigger>
            <TabsTrigger value="certifications" className="data-[state=active]:bg-century-red data-[state=active]:text-white font-medium">
              Certifications
            </TabsTrigger>
            <TabsTrigger value="installation" className="data-[state=active]:bg-century-red data-[state-active]:text-white font-medium">
              Installation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="font-bold text-xl mb-6 text-century-red">Physical Properties</h4>
                <div className="space-y-4">
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Grade Classification</span>
                    <span className="text-century-red font-medium">BWP (Boiling Water Proof)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Face Veneer</span>
                    <span>Premium Gurjan (Dipterocarpus spp.)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Core Construction</span>
                    <span>Hardwood Multi-ply</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Adhesive Type</span>
                    <span>Phenolic Resin (WBP Grade)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Moisture Content</span>
                    <span>8-12% (±2%)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Density</span>
                    <span>650-750 kg/m³</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Thickness Tolerance</span>
                    <span>±0.2mm (Premium Grade)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-bold text-xl mb-6 text-century-red">Performance Standards</h4>
                <div className="space-y-4">
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Warranty Coverage</span>
                    <span className="text-century-red font-medium">8 Years Manufacturing</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Boiling Water Test</span>
                    <span>72 Hours (Passed)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Formaldehyde Emission</span>
                    <span>E1 Grade (&lt; 0.124 mg/m³)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Bond Strength</span>
                    <span>&gt; 1.0 N/mm² (Wet)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Screw Holding Capacity</span>
                    <span>1200-1500 N</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Fire Rating</span>
                    <span>Class 3 (Optional FR Grade)</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-gray-200">
                    <span className="font-semibold">Termite Resistance</span>
                    <span>Chemically Treated</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dimensions" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h4 className="font-bold text-xl mb-6 text-century-red">Thickness & Pricing Guide</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-century-red text-white">
                        <th className="p-4 text-left font-semibold">Thickness</th>
                        <th className="p-4 text-left font-semibold">Price Range (₹/Sheet)*</th>
                        <th className="p-4 text-left font-semibold">Weight (8'×4')</th>
                        <th className="p-4 text-left font-semibold">Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceRange.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-4 font-semibold text-century-red">{item.thickness}</td>
                          <td className="p-4 font-medium">{item.price}</td>
                          <td className="p-4">{item.weight}</td>
                          <td className="p-4 text-sm">
                            {item.thickness === "4mm" && "Back panels, Drawer bottoms"}
                            {item.thickness === "6mm" && "Cabinet backs, Light partitions"}
                            {item.thickness === "9mm" && "Shelving, Wall paneling"}
                            {item.thickness === "12mm" && "Cabinet sides, Furniture"}
                            {item.thickness === "15mm" && "Kitchen cabinets, Countertops"}
                            {item.thickness === "18mm" && "Heavy furniture, Flooring"}
                            {item.thickness === "21mm" && "Structural applications"}
                            {item.thickness === "25mm" && "Heavy-duty, Marine grade"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *Prices are indicative and may vary based on location, dealer, and market conditions. 
                  GST extra. Contact authorized dealers for current pricing.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-century-red">Standard Dimensions</h4>
                <div className="space-y-4">
                  <div className="bg-century-red/10 p-4 rounded-xl border border-century-red/20">
                    <div className="font-semibold text-century-red mb-2">8' × 4' (2440 × 1220 mm)</div>
                    <div className="text-sm text-gray-700">Most popular size for furniture</div>
                  </div>
                  <div className="bg-century-red/10 p-4 rounded-xl border border-century-red/20">
                    <div className="font-semibold text-century-red mb-2">9' × 4' (2740 × 1220 mm)</div>
                    <div className="text-sm text-gray-700">Large format for minimal joints</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="font-semibold text-gray-700 mb-2">Custom Sizes Available</div>
                    <div className="text-sm text-gray-600">Contact for special dimensions</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-3">💡 Buying Tips</h5>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Check moisture content before purchase</li>
                    <li>• Verify IS:303 marking on each sheet</li>
                    <li>• Store in dry, ventilated area</li>
                    <li>• Use authorized Century Ply dealers only</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-century-red/40 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-century-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-century-red" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">{application.title}</h5>
                      <p className="text-gray-600 text-sm">{application.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-century-red text-white rounded-2xl p-8">
                <h4 className="font-bold mb-4 text-xl">🏠 Ideal for Home Applications</h4>
                <p className="text-red-100 leading-relaxed">
                  Perfect for Indian homes with high humidity, monsoon seasons, and varied climatic conditions. 
                  Especially recommended for coastal areas and regions with heavy rainfall.
                </p>
              </div>
              
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h4 className="font-bold mb-4 text-xl">🏭 Commercial & Industrial Use</h4>
                <p className="text-gray-300 leading-relaxed">
                  Trusted by leading furniture manufacturers, interior designers, and construction companies 
                  for projects requiring superior durability and moisture resistance.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-xl mb-6 text-century-red">Quality Certifications</h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl border border-green-200">
                    <Badge variant="outline" className="text-green-600 border-green-600 px-4 py-2 text-sm">IS:303</Badge>
                    <div>
                      <div className="font-semibold">Bureau of Indian Standards</div>
                      <div className="text-sm text-gray-600">Plywood Specification Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <Badge variant="outline" className="text-blue-600 border-blue-600 px-4 py-2 text-sm">CE MARK</Badge>
                    <div>
                      <div className="font-semibold">European Conformity</div>
                      <div className="text-sm text-gray-600">EU Standards Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <Badge variant="outline" className="text-purple-600 border-purple-600 px-4 py-2 text-sm">E1 GRADE</Badge>
                    <div>
                      <div className="font-semibold">Low Formaldehyde Emission</div>
                      <div className="text-sm text-gray-600">Indoor Air Quality Certified</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-century-red/10 rounded-xl border border-century-red/20">
                    <Badge variant="outline" className="text-century-red border-century-red px-4 py-2 text-sm">FSC</Badge>
                    <div>
                      <div className="font-semibold">Forest Stewardship Council</div>
                      <div className="text-sm text-gray-600">Sustainable Forestry Certified</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-century-red">Test Reports & Documentation</h4>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-century-red text-century-red hover:bg-century-red hover:text-white h-14">
                    <FileText className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">BWP Grade Test Certificate</div>
                      <div className="text-xs">72-hour boiling water test results</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-century-red text-century-red hover:bg-century-red hover:text-white h-14">
                    <FileText className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Formaldehyde Emission Report</div>
                      <div className="text-xs">E1 grade compliance certificate</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-century-red text-century-red hover:bg-century-red hover:text-white h-14">
                    <FileText className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Structural Performance Data</div>
                      <div className="text-xs">Load bearing and strength analysis</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-century-red text-century-red hover:bg-century-red hover:text-white h-14">
                    <Beaker className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Quality Assurance Certificate</div>
                      <div className="text-xs">ISO 9001:2015 compliance</div>
                    </div>
                  </Button>
                </div>
                
                <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-3">🔍 Verification Tips</h5>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• Look for Century Ply hologram on each sheet</li>
                    <li>• Check IS:303 marking and grade stamp</li>
                    <li>• Verify dealer authorization certificate</li>
                    <li>• Download Century Ply app for authentication</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="installation" className="mt-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-xl mb-6 text-century-red">Installation Guidelines</h4>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-3">📦 Pre-Installation</h5>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• Acclimatize sheets for 24-48 hours</li>
                      <li>• Check moisture content (8-12%)</li>
                      <li>• Inspect for any transit damage</li>
                      <li>• Ensure dry storage conditions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-3">🔧 Installation Process</h5>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• Use carbide-tipped cutting tools</li>
                      <li>• Maintain 2-3mm expansion gaps</li>
                      <li>• Apply wood adhesive uniformly</li>
                      <li>• Use appropriate screws/fasteners</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h5 className="font-semibold text-purple-800 mb-3">✅ Post-Installation</h5>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li>• Apply suitable edge banding</li>
                      <li>• Use compatible finishes only</li>
                      <li>• Maintain proper ventilation</li>
                      <li>• Regular cleaning and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-century-red">Care & Maintenance</h4>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-3">🧽 Regular Cleaning</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Use mild soap and water solution</li>
                      <li>• Avoid abrasive cleaners</li>
                      <li>• Wipe dry immediately after cleaning</li>
                      <li>• Use microfiber cloths</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h5 className="font-semibold text-yellow-800 mb-3">⚠️ Important Notes</h5>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Avoid prolonged water exposure on edges</li>
                      <li>• Use coasters for hot objects</li>
                      <li>• Maintain room humidity 45-65%</li>
                      <li>• Address water spills immediately</li>
                    </ul>
                  </div>
                  
                  <div className="bg-century-red text-white p-6 rounded-xl">
                    <h5 className="font-semibold mb-3">📞 Technical Support</h5>
                    <p className="text-red-100 text-sm mb-3">
                      For installation guidance and technical queries:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>🏭 Technical Helpline: 1800-212-0506</div>
                      <div>📧 Email: technical@centuryply.com</div>
                      <div>🌐 Website: www.centuryply.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}