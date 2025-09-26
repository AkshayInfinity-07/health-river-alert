import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, MapPin, Clock, Phone, Globe } from "lucide-react";

export const CommunityReports = () => {
  const reports = [
    {
      id: 1,
      reporter: "ASHA Worker - Priya Devi",
      location: "Imphal East, Village Keishamthong",
      time: "45 minutes ago",
      type: "Health Report",
      symptoms: "Diarrhea, Fever",
      cases: 3,
      language: "Manipuri",
      priority: "high"
    },
    {
      id: 2,
      reporter: "Community Volunteer - Ravi Kumar",
      location: "Dimapur, Ward No. 5",
      time: "2 hours ago",
      type: "Water Quality",
      symptoms: "Contaminated Water",
      cases: 1,
      language: "Hindi",
      priority: "medium"
    },
    {
      id: 3,
      reporter: "Local Clinic - Dr. Sarah Lalthanpuii",
      location: "Aizawl, Bethlehem Vengthlang",
      time: "4 hours ago",
      type: "Health Report",
      symptoms: "Typhoid symptoms",
      cases: 2,
      language: "Mizo",
      priority: "high"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return <Badge className="bg-alert-high text-white">High Priority</Badge>;
      case "medium": return <Badge className="bg-alert-medium text-white">Medium</Badge>;
      case "low": return <Badge className="bg-alert-low text-white">Low</Badge>;
      default: return <Badge variant="outline">Normal</Badge>;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Community Reports
            </CardTitle>
            <CardDescription>
              Real-time reports from ASHA workers, volunteers, and local clinics
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              SMS Gateway
            </Button>
            <Button variant="health" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              Mobile App
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{report.reporter}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {report.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {report.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {report.language}
                      </span>
                    </div>
                  </div>
                </div>
                {getPriorityBadge(report.priority)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Report Type</label>
                  <p className="text-sm font-medium text-foreground">{report.type}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Symptoms/Issue</label>
                  <p className="text-sm font-medium text-foreground">{report.symptoms}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Cases Reported</label>
                  <p className="text-sm font-medium text-foreground">{report.cases} people affected</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="secondary" size="sm">
                    Contact Reporter
                  </Button>
                </div>
                <Button variant="health" size="sm">
                  Take Action
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Multilingual Support</h4>
              <p className="text-sm text-muted-foreground">
                Accepting reports in Assamese, Bengali, Manipuri, Mizo, Nagamese, and Hindi
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure Languages
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};