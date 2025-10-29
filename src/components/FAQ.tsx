import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What makes Sainik 710 different from regular plywood?",
      answer: "Sainik 710 is BWP (Boiling Water Proof) grade plywood that passes a rigorous 72-hour boiling water test. It uses phenolic resin adhesive which provides superior water resistance compared to regular plywood. It also comes with an 8-year warranty and IS:303 certification, making it ideal for high-moisture applications like kitchens and bathrooms."
    },
    {
      question: "Is Sainik 710 suitable for kitchen cabinets and bathroom vanities?",
      answer: "Absolutely! Sainik 710 is specifically engineered for high-moisture environments. Its BWP grade certification ensures it can withstand steam, water splashes, and humidity commonly found in kitchens and bathrooms. The phenolic resin adhesive maintains structural integrity even when exposed to moisture for extended periods."
    },
    {
      question: "What is the warranty coverage and what does it include?",
      answer: "Sainik 710 comes with a comprehensive 8-year manufacturing warranty that covers delamination, warping, and structural defects under normal usage conditions. The warranty is valid when the product is purchased from authorized Century Ply dealers and installed according to recommended guidelines. It does not cover damage due to misuse, natural disasters, or improper storage."
    },
    {
      question: "How can I verify if my Sainik 710 sheets are genuine?",
      answer: "Genuine Sainik 710 sheets have several authenticity features: (1) Century Ply hologram sticker on each sheet, (2) IS:303 marking with grade stamp, (3) Batch number and manufacturing date, (4) QR code for mobile verification. You can also download the Century Ply mobile app to scan and verify authenticity. Always buy from authorized dealers to ensure genuineness."
    },
    {
      question: "What thicknesses are available and how do I choose the right one?",
      answer: "Sainik 710 is available in thicknesses from 4mm to 25mm. For cabinet backs and drawer bottoms, use 4-6mm. For shelving and wall panels, 9-12mm is ideal. Kitchen cabinets and furniture typically use 15-18mm, while heavy-duty applications require 21-25mm. Your carpenter or dealer can recommend the appropriate thickness based on your specific application."
    },
    {
      question: "Can Sainik 710 be used for exterior applications?",
      answer: "Yes, Sainik 710's BWP grade makes it suitable for exterior applications where moisture resistance is crucial. It can be used for exterior cladding, balcony furniture, and covered outdoor areas. However, for complete exterior exposure, ensure proper sealing and finishing. The product performs exceptionally well in coastal areas with high humidity and salt air."
    },
    {
      question: "What is the difference between BWP and WBP grade plywood?",
      answer: "BWP (Boiling Water Proof) is superior to WBP (Water and Boil Proof). BWP grade plywood like Sainik 710 uses phenolic resin adhesive and passes a 72-hour boiling test, ensuring maximum moisture resistance. WBP grade uses extended urea formaldehyde adhesive and passes a 4-hour boiling test. BWP is recommended for extreme moisture conditions and offers better long-term durability."
    },
    {
      question: "How should I store Sainik 710 plywood before installation?",
      answer: "Store Sainik 710 sheets in a dry, well-ventilated area away from direct sunlight and moisture. Keep sheets flat and supported every 2-3 feet to prevent sagging. Stack no more than 50 sheets per pile with wooden battens between every 10-15 sheets. Cover the top sheet to protect from dust. Allow 24-48 hours for acclimatization before installation."
    },
    {
      question: "Is Sainik 710 termite and borer resistant?",
      answer: "Yes, Sainik 710 undergoes chemical treatment that provides resistance against termites and wood borers. The treatment is integrated during manufacturing and provides long-term protection. However, in areas with severe termite infestation, additional anti-termite treatment of the structure may be recommended for complete protection."
    },
    {
      question: "What are the current price ranges for different thicknesses?",
      answer: "Sainik 710 prices vary by thickness, location, and market conditions. Approximate ranges (per 8'×4' sheet): 4mm: ₹45-55, 9mm: ₹95-110, 15mm: ₹155-175, 18mm: ₹185-210. Prices are subject to GST and may vary by dealer and location. Contact authorized Century Ply dealers for current pricing and availability in your area."
    },
    {
      question: "Can I get technical support for my project requirements?",
      answer: "Century Ply provides comprehensive technical support through multiple channels: Technical helpline (1800-212-0506), email support (technical@centuryply.com), and field technical officers in major cities. They can assist with product selection, installation guidelines, troubleshooting, and project-specific recommendations. Technical datasheets and installation guides are also available for download."
    },
    {
      question: "How does Sainik 710 contribute to green building and sustainability?",
      answer: "Sainik 710 is FSC (Forest Stewardship Council) certified, ensuring sustainable forestry practices. It has E1 grade formaldehyde emission levels, contributing to better indoor air quality. The long 8-year warranty and durability reduce replacement frequency, minimizing environmental impact. The manufacturing process follows environmental standards and waste reduction practices."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-century-red/10 text-century-red px-6 py-2 rounded-full font-semibold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="mb-6">Everything You Need to Know About Sainik 710</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Get answers to common questions about Century Ply Sainik 710 BWP plywood - 
            from technical specifications to installation guidelines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-century-red py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-century-red rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="font-bold mb-4">Still Have Questions?</h3>
            <p className="text-red-100 mb-6">
              Our technical experts are here to help you choose the right plywood for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2">
                <span>📞</span>
                <span className="font-semibold">1800-212-0506</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span className="font-semibold">technical@centuryply.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}