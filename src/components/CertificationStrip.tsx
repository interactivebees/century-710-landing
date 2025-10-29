import { Badge } from "./ui/badge";

export function CertificationStrip() {
  const certifications = [
    { name: "ISI", description: "Indian Standards Institute" },
    { name: "CE", description: "European Conformity" },
    { name: "E1 Emission", description: "Low Formaldehyde" },
    { name: "Gurjan Face Veneer", description: "Premium Quality" }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3>Certified Quality Standards</h3>
          <p className="text-muted-foreground">Trusted by industry professionals worldwide</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <Badge variant="outline" className="text-lg px-6 py-2 mb-2">
                {cert.name}
              </Badge>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}