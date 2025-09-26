import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, Bell, Globe, Shield, Database } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground mt-2">Configure health monitoring system preferences</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <Database className="h-4 w-4" />
            Backup Data
          </Button>
          <Button variant="secondary" className="gap-2">
            <Shield className="h-4 w-4" />
            Security Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Manage system users and access permissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { role: "Health Administrator", users: 3, permissions: "Full Access" },
                { role: "District Coordinator", users: 12, permissions: "Regional Access" },
                { role: "ASHA Supervisor", users: 45, permissions: "Community Reports" },
                { role: "Data Analyst", users: 6, permissions: "Read-only Access" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{item.role}</h4>
                    <p className="text-xs text-muted-foreground">{item.permissions}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{item.users}</div>
                    <div className="text-xs text-muted-foreground">users</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">Manage User Roles</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Settings
            </CardTitle>
            <CardDescription>Configure alert thresholds and notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { type: "Critical Health Alerts", enabled: true, threshold: "Immediate" },
                { type: "Water Quality Warnings", enabled: true, threshold: "< 60% quality" },
                { type: "Outbreak Predictions", enabled: true, threshold: "> 30% probability" },
                { type: "System Maintenance", enabled: false, threshold: "Weekly" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{item.type}</h4>
                    <p className="text-xs text-muted-foreground">{item.threshold}</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={item.enabled}
                    className="rounded"
                    readOnly
                  />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">Update Alert Settings</Button>
          </CardContent>
        </Card>

        {/* Language & Localization */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-secondary" />
              Language & Localization
            </CardTitle>
            <CardDescription>Regional language support and cultural adaptation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-foreground">Primary Language</label>
                <select className="w-full mt-1 p-2 border border-border rounded-lg bg-background">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Assamese</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Supported Languages</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["Assamese", "Bengali", "Manipuri", "Mizo", "Nagamese", "Hindi"].map((lang) => (
                    <div key={lang} className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">Save Language Settings</Button>
          </CardContent>
        </Card>

        {/* System Configuration */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              System Configuration
            </CardTitle>
            <CardDescription>Core system settings and data management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">Data Retention</h4>
                  <p className="text-xs text-muted-foreground">Health records kept for 7 years</p>
                </div>
                <Badge className="bg-alert-low text-white">Active</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">Auto Backup</h4>
                  <p className="text-xs text-muted-foreground">Daily at 2:00 AM</p>
                </div>
                <Badge className="bg-alert-low text-white">Enabled</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">API Rate Limits</h4>
                  <p className="text-xs text-muted-foreground">1000 requests/hour</p>
                </div>
                <Badge className="bg-alert-medium text-white">Moderate</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">Advanced Configuration</Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-alert-low" />
            System Status
          </CardTitle>
          <CardDescription>Current system health and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-alert-low">99.8%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-primary">2.3TB</div>
              <div className="text-sm text-muted-foreground">Data Stored</div>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-secondary">156</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-alert-medium">45ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;