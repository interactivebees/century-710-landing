import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, FileText, CheckCircle } from "lucide-react";

interface EnquireNowDialogProps {
  children: React.ReactNode;
}

export function EnquireNowDialog({ children }: EnquireNowDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    thickness: "",
    quantity: "",
    requirements: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form and close dialog after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        projectType: "",
        thickness: "",
        quantity: "",
        requirements: "",
        agreeToTerms: false
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest in Sainik 710. Our team will contact you within 24 hours.
            </p>
            <Badge className="bg-century-red text-white px-4 py-2">
              Reference ID: SN710-{Date.now().toString().slice(-6)}
            </Badge>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-century-red/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-century-red" />
            </div>
            <div>
              <div className="text-xl font-bold">Enquire Now - Sainik 710</div>
              <div className="text-sm font-normal text-gray-600">Get best price quote & technical assistance</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Contact Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 text-century-red flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 text-blue-800 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Project Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Cabinets</SelectItem>
                    <SelectItem value="bathroom">Bathroom Vanity</SelectItem>
                    <SelectItem value="furniture">Furniture Manufacturing</SelectItem>
                    <SelectItem value="interior">Interior Design</SelectItem>
                    <SelectItem value="commercial">Commercial Project</SelectItem>
                    <SelectItem value="residential">Residential Construction</SelectItem>
                    <SelectItem value="marine">Marine Applications</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="thickness">Required Thickness</Label>
                <Select value={formData.thickness} onValueChange={(value) => handleInputChange("thickness", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select thickness" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4mm">4mm</SelectItem>
                    <SelectItem value="6mm">6mm</SelectItem>
                    <SelectItem value="9mm">9mm</SelectItem>
                    <SelectItem value="12mm">12mm</SelectItem>
                    <SelectItem value="15mm">15mm</SelectItem>
                    <SelectItem value="18mm">18mm</SelectItem>
                    <SelectItem value="21mm">21mm</SelectItem>
                    <SelectItem value="25mm">25mm</SelectItem>
                    <SelectItem value="multiple">Multiple Thickness</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Estimated Quantity</Label>
                <Select value={formData.quantity} onValueChange={(value) => handleInputChange("quantity", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 Sheets</SelectItem>
                    <SelectItem value="11-25">11-25 Sheets</SelectItem>
                    <SelectItem value="26-50">26-50 Sheets</SelectItem>
                    <SelectItem value="51-100">51-100 Sheets</SelectItem>
                    <SelectItem value="100+">100+ Sheets</SelectItem>
                    <SelectItem value="bulk">Bulk Order</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <Label htmlFor="requirements">Specific Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="Please describe your specific requirements, timeline, budget range, or any questions about Sainik 710..."
              rows={4}
              value={formData.requirements}
              onChange={(e) => handleInputChange("requirements", e.target.value)}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              I agree to receive product information, pricing details, and promotional offers from Century Ply 
              via phone, email, or SMS. I understand that my information will be used as per the privacy policy.
            </Label>
          </div>

          {/* Contact Preferences */}
          <div className="bg-century-red/5 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-century-red">What happens next?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-century-red/20 rounded-full flex items-center justify-center">
                  <span className="text-century-red font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold">Instant Confirmation</div>
                  <div className="text-gray-600">You'll receive SMS confirmation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-century-red/20 rounded-full flex items-center justify-center">
                  <span className="text-century-red font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold">Expert Consultation</div>
                  <div className="text-gray-600">Technical team will call you</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-century-red/20 rounded-full flex items-center justify-center">
                  <span className="text-century-red font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold">Best Price Quote</div>
                  <div className="text-gray-600">Customized pricing & delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-century-red hover:bg-century-red-dark text-white font-semibold py-3"
              disabled={!formData.name || !formData.phone || !formData.city || !formData.agreeToTerms}
            >
              <Mail className="w-4 h-4 mr-2" />
              Submit Enquiry
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-century-red text-century-red hover:bg-century-red hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}