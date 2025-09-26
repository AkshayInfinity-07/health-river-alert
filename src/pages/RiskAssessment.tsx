import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, AlertTriangle, Brain } from "lucide-react";

const RiskAssessment = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Risk Assessment</h1>
          <p className="text-muted-foreground mt-2">AI-powered outbreak prediction and risk analysis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <Brain className="h-4 w-4" />
            Run AI Analysis
          </Button>
          <Button variant="secondary" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Risk Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Risk Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">Medium</div>
            <Badge className="bg-alert-medium text-white">Seasonal Trend</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Risk Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-high">8</div>
            <p className="text-xs text-muted-foreground">Enhanced monitoring</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">92%</div>
            <p className="text-xs text-muted-foreground">AI model performance</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Early Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">Issued this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Prediction Model
            </CardTitle>
            <CardDescription>Machine learning analysis of outbreak patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Current Predictions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cholera outbreak probability</span>
                    <Badge className="bg-alert-medium text-white">23%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Diarrheal disease surge</span>
                    <Badge className="bg-alert-high text-white">67%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Typhoid cases increase</span>
                    <Badge className="bg-alert-low text-white">12%</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-foreground mb-2">Risk Factors</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monsoon season approaching</li>
                  <li>• Water contamination in 3 districts</li>
                  <li>• Population density in urban areas</li>
                  <li>• Historical outbreak patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-alert-high" />
              Risk Hotspots
            </CardTitle>
            <CardDescription>Areas requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { area: "Imphal East District", risk: "High", factors: "Water contamination + Population density" },
                { area: "Dimapur Urban", risk: "Medium", factors: "Sanitation infrastructure" },
                { area: "Kohima Hills", risk: "Low", factors: "Seasonal monitoring" }
              ].map((item, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-foreground">{item.area}</h4>
                    <Badge 
                      className={
                        item.risk === "High" ? "bg-alert-high text-white" :
                        item.risk === "Medium" ? "bg-alert-medium text-white" :
                        "bg-alert-low text-white"
                      }
                    >
                      {item.risk} Risk
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.factors}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskAssessment;