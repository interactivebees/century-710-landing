import { MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  variant?: "default" | "floating" | "inline";
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ 
  variant = "default", 
  phoneNumber = "918800123456", // Default Century Ply WhatsApp number
  message = "Hi! I'm interested in Sainik 710 BWP Plywood. Can you please share the pricing and technical details?",
  className = ""
}: WhatsAppButtonProps) {
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={`bg-green-500 hover:bg-green-600 text-white font-semibold ${className}`}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp Us
      </Button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Chat on WhatsApp</span>
    </Button>
  );
}