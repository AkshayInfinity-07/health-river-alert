import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, Layers, Search, Filter, Maximize } from "lucide-react";

const InteractiveMap = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interactive Map</h1>
          <p className="text-muted-foreground mt-2">Geographic visualization of health and water quality data</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter Layers
          </Button>
          <Button variant="health" className="gap-2">
            <Maximize className="h-4 w-4" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Map Layers
            </CardTitle>
            <CardDescription>Toggle data visualization layers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Water Sources", active: true, color: "water-clean" },
              { name: "Disease Hotspots", active: true, color: "alert-high" },
              { name: "Risk Areas", active: false, color: "alert-medium" },
              { name: "Health Facilities", active: true, color: "alert-low" },
              { name: "Population Density", active: false, color: "muted" },
              { name: "Transport Routes", active: false, color: "muted" }
            ].map((layer, index) => (
              <div key={index} className="flex items-center justify-between p-2 border border-border rounded">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${layer.color}`}></div>
                  <span className="text-sm">{layer.name}</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={layer.active}
                  className="rounded"
                  readOnly
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Main Map Area */}
        <div className="lg:col-span-3">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  Northeast India Health Map
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Interactive Map Container */}
              <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-lg p-8 min-h-[600px] relative border border-border">
                {/* Simulated Map Content */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-100/40 to-green-100/40 rounded-lg">
                  
                  {/* State Boundaries Simulation */}
                  <div className="absolute top-4 left-4 w-20 h-16 border-2 border-primary/30 rounded bg-primary/5">
                    <div className="text-xs text-center mt-2 font-medium">Assam</div>
                  </div>
                  
                  <div className="absolute top-6 right-8 w-16 h-14 border-2 border-primary/30 rounded bg-primary/5">
                    <div className="text-xs text-center mt-2 font-medium">Nagaland</div>
                  </div>
                  
                  <div className="absolute bottom-8 left-6 w-18 h-12 border-2 border-primary/30 rounded bg-primary/5">
                    <div className="text-xs text-center mt-1 font-medium">Manipur</div>
                  </div>
                  
                  <div className="absolute bottom-6 right-12 w-16 h-16 border-2 border-primary/30 rounded bg-primary/5">
                    <div className="text-xs text-center mt-3 font-medium">Mizoram</div>
                  </div>

                  {/* Data Points */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-alert-high rounded-full animate-pulse border-2 border-white shadow-lg" title="Disease Outbreak"></div>
                  <div className="absolute top-12 right-16 w-3 h-3 bg-water-clean rounded-full animate-pulse border-2 border-white" title="Clean Water Source"></div>
                  <div className="absolute bottom-12 left-12 w-4 h-4 bg-alert-medium rounded-full animate-pulse border-2 border-white" title="At-Risk Area"></div>
                  <div className="absolute bottom-16 right-20 w-3 h-3 bg-alert-low rounded-full animate-pulse border-2 border-white" title="Health Facility"></div>
                  <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-water-contaminated rounded-full animate-pulse border-2 border-white" title="Contaminated Source"></div>
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                    <h4 className="text-xs font-semibold mb-2">Legend</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-alert-high rounded-full"></div>
                        <span>Disease Outbreak</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-water-clean rounded-full"></div>
                        <span>Safe Water</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-water-contaminated rounded-full"></div>
                        <span>Contaminated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-alert-low rounded-full"></div>
                        <span>Health Facility</span>
                      </div>
                    </div>
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg shadow-md">
                    <div className="flex flex-col gap-1">
                      <Button size="sm" variant="outline" className="px-2 py-1 h-8">+</Button>
                      <Button size="sm" variant="outline" className="px-2 py-1 h-8">-</Button>
                    </div>
                  </div>
                </div>

                {/* Center Message */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary/80 mb-2">Interactive Health Surveillance Map</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Real-time visualization of water quality sensors, disease outbreaks, 
                      and health facility locations across Northeast India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Statistics */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-lg font-bold text-primary">127</div>
                  <div className="text-xs text-muted-foreground">Active Markers</div>
                </div>
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-lg font-bold text-water-clean">89</div>
                  <div className="text-xs text-muted-foreground">Water Sources</div>
                </div>
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-lg font-bold text-alert-high">12</div>
                  <div className="text-xs text-muted-foreground">Risk Areas</div>
                </div>
                <div className="text-center p-3 bg-accent rounded-lg">
                  <div className="text-lg font-bold text-alert-low">45</div>
                  <div className="text-xs text-muted-foreground">Health Facilities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;