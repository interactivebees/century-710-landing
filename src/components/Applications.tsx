import { Home, ChefHat, Bath, Building } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Applications() {
  const applications = [
    {
      icon: Home,
      title: "Living Room",
      description: "TV units, wardrobes, and decorative panels"
    },
    {
      icon: ChefHat,
      title: "Kitchen",
      description: "Modular cabinets, countertops, and storage solutions"
    },
    {
      icon: Bath,
      title: "Bathroom",
      description: "Vanities, storage cabinets, and wet area applications"
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Office furniture, retail displays, and interiors"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Perfect for Every Application</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential to commercial projects, Sainik 710 delivers exceptional 
            performance across all applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}