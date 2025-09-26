import { HealthMetrics } from "@/components/dashboard/HealthMetrics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp, AlertTriangle, FileText } from "lucide-react";

const DiseaseSurveillance = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Disease Surveillance</h1>
          <p className="text-muted-foreground mt-2">Water-borne disease tracking and outbreak prevention</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            Create Alert
          </Button>
          <Button variant="secondary" className="gap-2">
            <FileText className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">199</div>
            <Badge className="bg-alert-medium text-white">This Week</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Outbreaks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">3</div>
            <p className="text-xs text-muted-foreground">Requires intervention</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">94%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">At-Risk Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">12</div>
            <p className="text-xs text-muted-foreground">Enhanced monitoring</p>
          </CardContent>
        </Card>
      </div>

      <HealthMetrics />
    </div>
  );
};

export default DiseaseSurveillance;