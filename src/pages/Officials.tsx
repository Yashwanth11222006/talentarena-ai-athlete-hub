import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { Shield, Database, BarChart3, Users, FileText, CheckCircle } from "lucide-react";

const Officials = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">For Sports Officials</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure portal for Sports Authority of India (SAI) officials to access verified athlete data and analytics
            </p>
          </div>

          <Tabs defaultValue="login" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Secure Login</TabsTrigger>
              <TabsTrigger value="dashboard">Analytics Dashboard</TabsTrigger>
              <TabsTrigger value="integration">Data Integration</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-8">
              <Card className="shadow-card max-w-md mx-auto">
                <CardHeader className="text-center">
                  <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Official Access Portal</CardTitle>
                  <CardDescription>
                    Secure login for authorized SAI officials only
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="officialId">Official ID</Label>
                      <Input id="officialId" placeholder="Enter your SAI ID" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Two-Factor Authentication</Label>
                      <Input id="otp" placeholder="Enter OTP from authenticator" />
                    </div>
                    <Button size="lg" variant="default" className="w-full">
                      <Shield className="mr-2 h-4 w-4" />
                      Secure Login
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      All access is logged and monitored for security purposes
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-card text-center">
                  <CardHeader>
                    <Shield className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">Secure Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Multi-factor authentication and encrypted data access
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-card text-center">
                  <CardHeader>
                    <Database className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">Verified Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      AI-verified athlete submissions with tamper detection
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-card text-center">
                  <CardHeader>
                    <BarChart3 className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Regional and national performance analytics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Users className="mx-auto h-8 w-8 text-primary mb-2" />
                    <CardTitle>Verified Athletes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">2,847</div>
                    <p className="text-muted-foreground">Active Profiles</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <FileText className="mx-auto h-8 w-8 text-primary mb-2" />
                    <CardTitle>Submissions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">15,629</div>
                    <p className="text-muted-foreground">This Month</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <CheckCircle className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Verified</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-accent">94.2%</div>
                    <p className="text-muted-foreground">Success Rate</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <BarChart3 className="mx-auto h-8 w-8 text-primary mb-2" />
                    <CardTitle>Regions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">28</div>
                    <p className="text-muted-foreground">States Covered</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Regional Performance Analytics</CardTitle>
                    <CardDescription>State-wise athlete performance distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { state: "Maharashtra", athletes: 425, avgScore: 87 },
                        { state: "Karnataka", athletes: 398, avgScore: 85 },
                        { state: "Tamil Nadu", athletes: 362, avgScore: 84 },
                        { state: "Punjab", athletes: 341, avgScore: 86 },
                        { state: "Kerala", athletes: 298, avgScore: 83 },
                      ].map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{region.state}</p>
                            <p className="text-sm text-muted-foreground">{region.athletes} athletes</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">Avg: {region.avgScore}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Verifications</CardTitle>
                    <CardDescription>Latest AI-verified athlete submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { athlete: "Priya Sharma", sport: "100m Sprint", score: 92, status: "Verified" },
                        { athlete: "Arjun Patel", sport: "Long Jump", score: 88, status: "Verified" },
                        { athlete: "Kavya Reddy", sport: "High Jump", score: 91, status: "Verified" },
                        { athlete: "Rohit Singh", sport: "Shot Put", score: 85, status: "Under Review" },
                        { athlete: "Ananya Gupta", sport: "400m Sprint", score: 89, status: "Verified" },
                      ].map((submission, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{submission.athlete}</p>
                            <p className="text-sm text-muted-foreground">{submission.sport}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">Score: {submission.score}</p>
                            <p className={`text-xs ${submission.status === 'Verified' ? 'text-accent' : 'text-warning'}`}>
                              {submission.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>SAI Server Integration</CardTitle>
                  <CardDescription>
                    Seamless data integration with existing Sports Authority infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Integration Status</h3>
                        <div className="space-y-3">
                          {[
                            { system: "Athlete Database", status: "Connected", color: "text-accent" },
                            { system: "Competition Records", status: "Connected", color: "text-accent" },
                            { system: "Training Centers", status: "Connected", color: "text-accent" },
                            { system: "Medical Records", status: "Pending", color: "text-warning" },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{item.system}</span>
                              <span className={`text-sm ${item.color}`}>{item.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Data Sync Settings</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span>Real-time sync</span>
                            <Button size="sm" variant="success">Enabled</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Backup frequency</span>
                            <span className="text-sm text-muted-foreground">Every 6 hours</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Data retention</span>
                            <span className="text-sm text-muted-foreground">5 years</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Encryption level</span>
                            <span className="text-sm text-muted-foreground">AES-256</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                  <CardDescription>Configure data endpoints and access permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { endpoint: "/api/athletes", method: "GET", description: "Retrieve athlete profiles", access: "Read-only" },
                      { endpoint: "/api/submissions", method: "POST", description: "Submit new assessments", access: "Write" },
                      { endpoint: "/api/analytics", method: "GET", description: "Access performance analytics", access: "Read-only" },
                      { endpoint: "/api/verification", method: "PUT", description: "Update verification status", access: "Admin" },
                    ].map((api, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{api.method}</span>
                            <span className="font-medium">{api.endpoint}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{api.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">{api.access}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Officials;