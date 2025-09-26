import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, CheckCircle, Clock } from "lucide-react";

const AlertsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Active Alerts</h1>
          <p className="text-muted-foreground mt-2">Critical health and water quality notifications</p>
        </div>
        <div className="flex gap-3">
          <Button variant="alert" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            New Alert
          </Button>
          <Button variant="secondary" className="gap-2">
            <Bell className="h-4 w-4" />
            Notification Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-critical">2</div>
            <Badge className="bg-alert-critical text-white">Immediate Action</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">5</div>
            <p className="text-xs text-muted-foreground">Response within 4h</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">12</div>
            <p className="text-xs text-muted-foreground">Avg resolution: 6.2h</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">3</div>
            <p className="text-xs text-muted-foreground">Awaiting assessment</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AlertPanel />
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-alert-low" />
              Recent Resolutions
            </CardTitle>
            <CardDescription>Successfully resolved alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Water contamination resolved", location: "Kohima Village", time: "2h ago" },
              { title: "Outbreak contained", location: "Imphal District", time: "5h ago" },
              { title: "Quality test completed", location: "Dimapur", time: "1d ago" }
            ].map((item, index) => (
              <div key={index} className="p-3 border border-border rounded-lg">
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <span>{item.location}</span>
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlertsPage;