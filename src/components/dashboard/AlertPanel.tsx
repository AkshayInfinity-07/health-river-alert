import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, Users, ChevronRight } from "lucide-react";

export const AlertPanel = () => {
  const alerts = [
    {
      id: 1,
      level: "critical",
      title: "Cholera Outbreak Detected",
      location: "Imphal East District",
      time: "2 hours ago",
      affected: 15,
      description: "Multiple cases reported in 3 villages"
    },
    {
      id: 2,
      level: "high",
      title: "Water Contamination",
      location: "Dimapur Village",
      time: "4 hours ago",
      affected: 8,
      description: "E.coli detected in main water source"
    },
    {
      id: 3,
      level: "medium",
      title: "Seasonal Trend Alert",
      location: "Kohima Region",
      time: "1 day ago",
      affected: 0,
      description: "Increased diarrhea cases expected"
    }
  ];

  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "secondary";
      default: return "outline";
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case "critical": return "text-alert-critical";
      case "high": return "text-alert-high";
      case "medium": return "text-alert-medium";
      default: return "text-alert-low";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-alert-high" />
              Active Alerts
            </CardTitle>
            <CardDescription>Real-time health and water quality alerts</CardDescription>
          </div>
          <Badge variant="destructive">{alerts.length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={getBadgeVariant(alert.level)} className="text-xs">
                    {alert.level.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {alert.time}
                  </span>
                </div>
                <h4 className={`font-semibold ${getAlertColor(alert.level)} mb-1`}>
                  {alert.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {alert.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {alert.affected} affected
                  </span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  );
};