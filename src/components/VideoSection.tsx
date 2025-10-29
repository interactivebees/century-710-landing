import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Volume2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">See Sainik 710 in Action</h2>
          <p className="text-muted-foreground">
            Watch how our waterproof plywood performs in real-world conditions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&h=450&fit=crop"
                  alt="Sainik 710 Video Thumbnail"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <Volume2 className="w-12 h-12 mx-auto mb-4" />
                  <p>Video Player Placeholder</p>
                  <p className="text-sm text-blue-200 mt-2">
                    In a real implementation, this would be a video player
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h4>Water Resistance Test</h4>
              <p className="text-sm text-muted-foreground">24-hour boiling water test demonstration</p>
            </div>
            <div className="text-center">
              <h4>Installation Guide</h4>
              <p className="text-sm text-muted-foreground">Step-by-step installation process</p>
            </div>
            <div className="text-center">
              <h4>Quality Assurance</h4>
              <p className="text-sm text-muted-foreground">Manufacturing process overview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}