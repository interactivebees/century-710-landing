import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";
import { EnquireNowDialog } from "./EnquireNowDialog";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Products", href: "#products" },
    { name: "Applications", href: "#applications" },
    { name: "Technical Data", href: "#technical" },
    { name: "Dealers", href: "#dealers" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-century-red">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">1800-212-0506</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Find Dealer Near You</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block">Follow Us:</span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white hover:bg-white/20">
                  <span className="sr-only">Facebook</span>
                  📘
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white hover:bg-white/20">
                  <span className="sr-only">Twitter</span>
                  🐦
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white hover:bg-white/20">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="font-bold text-2xl text-century-dark">
              Century<span className="text-century-red">Ply</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-century-red">Sainik 710</div>
              <div className="text-xs text-gray-600">Waterproof Plywood</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors hover:text-century-red"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp Button - Desktop */}
            <WhatsAppButton 
              variant="inline" 
              className="hidden md:flex bg-green-500 hover:bg-green-600 px-4"
            />
            
            {/* Enquire Now Button - Desktop */}
            <EnquireNowDialog>
              <Button 
                size="sm" 
                className="hidden sm:flex bg-century-red hover:bg-century-red-dark text-white font-semibold px-6"
              >
                Enquire Now
              </Button>
            </EnquireNowDialog>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium py-2 transition-colors hover:text-century-red"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t space-y-3">
                    <EnquireNowDialog>
                      <Button className="w-full bg-century-red hover:bg-century-red-dark">
                        Enquire Now
                      </Button>
                    </EnquireNowDialog>
                    <WhatsAppButton variant="inline" className="w-full bg-green-500 hover:bg-green-600" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}