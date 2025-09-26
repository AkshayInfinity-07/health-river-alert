import { WaterQualityMap } from "@/components/dashboard/WaterQualityMap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, TrendingUp, AlertCircle, Plus } from "lucide-react";

const WaterQuality = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Water Quality Monitoring</h1>
          <p className="text-muted-foreground mt-2">Real-time water source surveillance and quality analysis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="water" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Water Source
          </Button>
          <Button variant="secondary" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">89</div>
            <Badge className="bg-alert-low text-white">Active</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Safe Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">67</div>
            <p className="text-xs text-muted-foreground">75% of total</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Contaminated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">15</div>
            <p className="text-xs text-muted-foreground">Immediate action needed</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Under Testing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">7</div>
            <p className="text-xs text-muted-foreground">Results pending</p>
          </CardContent>
        </Card>
      </div>

      <WaterQualityMap />
    </div>
  );
};

export default WaterQuality;