import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Users } from "lucide-react";

export const HealthMetrics = () => {
  const metrics = [
    {
      title: "Diarrheal Cases",
      value: 156,
      change: -12,
      trend: "down",
      color: "text-alert-low"
    },
    {
      title: "Cholera Cases",
      value: 23,
      change: +5,
      trend: "up",
      color: "text-alert-high"
    },
    {
      title: "Typhoid Cases",
      value: 8,
      change: -2,
      trend: "down",
      color: "text-alert-medium"
    },
    {
      title: "Hepatitis A",
      value: 12,
      change: 0,
      trend: "stable",
      color: "text-alert-medium"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-alert-high" />;
      case "down": return <TrendingDown className="h-4 w-4 text-alert-low" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getChangeColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-alert-high";
      case "down": return "text-alert-low";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Disease Monitoring
        </CardTitle>
        <CardDescription>Weekly surveillance data for water-borne diseases</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">{metric.title}</h4>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="flex items-end justify-between">
                <span className={`text-2xl font-bold ${metric.color}`}>
                  {metric.value}
                </span>
                <div className="flex items-center gap-1">
                  <span className={`text-sm font-medium ${getChangeColor(metric.trend)}`}>
                    {metric.change > 0 ? "+" : ""}{metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs last week</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-border">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Disease Trend Analysis</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered outbreak prediction and pattern recognition
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};