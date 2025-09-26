import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, Droplets, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const WaterQualityMap = () => {
  const waterSources = [
    { id: 1, name: "Imphal River Source", status: "contaminated", location: "Imphal East", quality: 35 },
    { id: 2, name: "Village Well #23", status: "clean", location: "Kohima", quality: 92 },
    { id: 3, name: "Community Borehole", status: "testing", location: "Dimapur", quality: 0 },
    { id: 4, name: "Mountain Spring", status: "clean", location: "Aizawl", quality: 95 },
    { id: 5, name: "Public Tank", status: "contaminated", location: "Silchar", quality: 28 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "clean": return <CheckCircle className="h-4 w-4 text-alert-low" />;
      case "contaminated": return <AlertCircle className="h-4 w-4 text-alert-high" />;
      case "testing": return <Clock className="h-4 w-4 text-alert-medium" />;
      default: return <Droplets className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "clean": return "text-alert-low";
      case "contaminated": return "text-alert-high";
      case "testing": return "text-alert-medium";
      default: return "text-muted-foreground";
    }
  };

  const getQualityBadge = (quality: number, status: string) => {
    if (status === "testing") return <Badge variant="secondary">Testing</Badge>;
    if (quality >= 80) return <Badge className="bg-alert-low text-white">Safe</Badge>;
    if (quality >= 60) return <Badge className="bg-alert-medium text-white">Caution</Badge>;
    return <Badge className="bg-alert-high text-white">Unsafe</Badge>;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" />
              Water Quality Monitoring
            </CardTitle>
            <CardDescription>Real-time water source status across Northeast India</CardDescription>
          </div>
          <Button variant="water" size="sm">
            View Full Map
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Simulated Map Area */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 mb-6 min-h-[300px] relative border border-border">
          <div className="absolute inset-4 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-lg"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
              <p className="text-muted-foreground text-sm">
                Real-time visualization of water quality sensors and health data
              </p>
            </div>
          </div>
          
          {/* Simulated Data Points */}
          <div className="absolute top-6 left-8 w-3 h-3 bg-alert-low rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-alert-high rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-alert-medium rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 right-8 w-3 h-3 bg-alert-low rounded-full animate-pulse"></div>
        </div>

        {/* Water Source List */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Recent Monitoring Results</h4>
          {waterSources.map((source) => (
            <div
              key={source.id}
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(source.status)}
                <div>
                  <h5 className="font-medium text-foreground">{source.name}</h5>
                  <p className="text-sm text-muted-foreground">{source.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {source.status !== "testing" && (
                  <span className={`text-sm font-medium ${getStatusColor(source.status)}`}>
                    {source.quality}%
                  </span>
                )}
                {getQualityBadge(source.quality, source.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};