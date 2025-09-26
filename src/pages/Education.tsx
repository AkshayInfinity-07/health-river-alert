import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Download, Globe, Users, Video } from "lucide-react";

const Education = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Education Hub</h1>
          <p className="text-muted-foreground mt-2">Health awareness and disease prevention resources</p>
        </div>
        <div className="flex gap-3">
          <Button variant="health" className="gap-2">
            <Video className="h-4 w-4" />
            Create Content
          </Button>
          <Button variant="secondary" className="gap-2">
            <Globe className="h-4 w-4" />
            Language Versions
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">127</div>
            <Badge className="bg-alert-low text-white">Active</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">8</div>
            <p className="text-xs text-muted-foreground">Regional languages</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-medium">15.2K</div>
            <p className="text-xs text-muted-foreground">+23% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Community Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-alert-low">89%</div>
            <p className="text-xs text-muted-foreground">Villages covered</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Educational Materials
              </CardTitle>
              <CardDescription>Interactive content for community health education</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Water Purification Methods", type: "Video Guide", views: "2.3K", languages: 6 },
                  { title: "Cholera Prevention", type: "Interactive", views: "1.8K", languages: 5 },
                  { title: "Hygiene Practices", type: "Poster Series", views: "3.1K", languages: 8 },
                  { title: "Symptom Recognition", type: "Audio Guide", views: "1.2K", languages: 7 }
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{item.views} views</span>
                      <span>{item.languages} languages</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Play className="h-3 w-3" />
                        View
                      </Button>
                      <Button size="sm" variant="ghost" className="gap-1">
                        <Download className="h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-secondary" />
                Language Support
              </CardTitle>
              <CardDescription>Multilingual content availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { language: "Assamese", coverage: "95%", status: "Complete" },
                  { language: "Bengali", coverage: "88%", status: "Active" },
                  { language: "Manipuri", coverage: "92%", status: "Complete" },
                  { language: "Mizo", coverage: "76%", status: "In Progress" },
                  { language: "Nagamese", coverage: "83%", status: "Active" },
                  { language: "Hindi", coverage: "100%", status: "Complete" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border border-border rounded">
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.language}</span>
                      <div className="text-xs text-muted-foreground">{item.coverage}</div>
                    </div>
                    <Badge 
                      className={
                        item.status === "Complete" ? "bg-alert-low text-white" :
                        item.status === "Active" ? "bg-alert-medium text-white" :
                        "bg-muted text-muted-foreground"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Impact
              </CardTitle>
              <CardDescription>Educational program effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Awareness Level</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Behavioral Change</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-health h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Knowledge Retention</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-water h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;