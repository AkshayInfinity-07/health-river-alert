import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Droplets, Users, MapPin, TrendingUp, Bell, Activity } from "lucide-react";
import { AlertPanel } from "./AlertPanel";
import { WaterQualityMap } from "./WaterQualityMap";
import { HealthMetrics } from "./HealthMetrics";
import { CommunityReports } from "./CommunityReports";

export const HealthDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Health Surveillance Dashboard</h1>
          <p className="text-muted-foreground mt-2">Northeast India - Water-borne Disease Monitoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <Bell className="h-4 w-4" />
            Alerts (3)
          </Button>
          <Button variant="water" className="gap-2">
            <Activity className="h-4 w-4" />
            Live Monitoring
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Communities</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">127</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Sources Monitored</CardTitle>
            <Droplets className="h-4 w-4 text-water-clean" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-water-clean">89</div>
            <p className="text-xs text-muted-foreground">
              Real-time monitoring active
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disease Reports</CardTitle>
            <TrendingUp className="h-4 w-4 text-alert-medium" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">23</div>
            <p className="text-xs text-muted-foreground">
              -8% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Areas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-alert-high" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">5</div>
            <p className="text-xs text-muted-foreground">
              Requires immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts Panel */}
        <div className="lg:col-span-1">
          <AlertPanel />
        </div>

        {/* Map and Monitoring */}
        <div className="lg:col-span-2 space-y-6">
          <WaterQualityMap />
          <HealthMetrics />
        </div>
      </div>

      {/* Community Reports */}
      <CommunityReports />
    </div>
  );
};