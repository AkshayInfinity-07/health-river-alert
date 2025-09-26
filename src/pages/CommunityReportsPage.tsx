import { CommunityReports } from "@/components/dashboard/CommunityReports";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Phone, Globe } from "lucide-react";

const CommunityReportsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community Reports</h1>
          <p className="text-muted-foreground mt-2">ASHA workers, volunteers, and clinic submissions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <Phone className="h-4 w-4" />
            SMS Integration
          </Button>
          <Button variant="secondary" className="gap-2">
            <Globe className="h-4 w-4" />
            Language Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">27</div>
            <Badge className="bg-alert-low text-white">+15% vs yesterday</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Reporters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">156</div>
            <p className="text-xs text-muted-foreground">ASHA & volunteers</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Urgent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">8</div>
            <p className="text-xs text-muted-foreground">Need immediate review</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">87%</div>
            <p className="text-xs text-muted-foreground">Avg response time: 2.3h</p>
          </CardContent>
        </Card>
      </div>

      <CommunityReports />
    </div>
  );
};

export default CommunityReportsPage;