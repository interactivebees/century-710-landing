import { useState } from "react";
import { MessageCircle, FileText, Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import { EnquireNowDialog } from "./EnquireNowDialog";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          {/* Enquire Now Button */}
          <div className="flex items-center">
            <div className="bg-black text-white text-xs px-3 py-2 rounded-lg mr-3 opacity-90">
              Get Price Quote
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-black"></div>
            </div>
            <EnquireNowDialog>
              <Button
                className="bg-century-red hover:bg-century-red-dark text-white rounded-full w-12 h-12 shadow-lg"
                size="icon"
              >
                <FileText className="w-5 h-5" />
              </Button>
            </EnquireNowDialog>
          </div>

          {/* WhatsApp Button */}
          <div className="flex items-center">
            <div className="bg-black text-white text-xs px-3 py-2 rounded-lg mr-3 opacity-90">
              Chat on WhatsApp
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-black"></div>
            </div>
            <WhatsAppButton variant="floating" className="relative w-12 h-12 animate-none" />
          </div>

          {/* Call Button */}
          <div className="flex items-center">
            <div className="bg-black text-white text-xs px-3 py-2 rounded-lg mr-3 opacity-90">
              Call Now
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-black"></div>
            </div>
            <Button
              onClick={() => window.location.href = 'tel:+918001200506'}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg"
              size="icon"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-45' 
            : 'bg-century-red hover:bg-century-red-dark animate-pulse'
        }`}
        size="icon"
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>

      {/* Ripple Effect */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full border-4 border-century-red/30 animate-ping"></div>
      )}
    </div>
  );
}