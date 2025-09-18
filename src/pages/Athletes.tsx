import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/useToast";
import { Upload, Play, BarChart3, Trophy, Target, Users } from "lucide-react";

const Athletes = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sport: "",
    location: "",
    bio: "",
  });
  const [uploadData, setUploadData] = useState({
    exerciseType: "",
    date: "",
    file: null as File | null,
  });
  
  const { signup, user, isLoading } = useAuth();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUploadChange = (field: string, value: string | File) => {
    setUploadData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData, 'athlete');
      toast({
        type: 'success',
        title: 'Profile Created!',
        description: 'Welcome to TalentArena. Your athlete profile has been created successfully.',
      });
      setActiveTab("upload");
    } catch (error) {
      toast({
        type: 'error',
        title: 'Error',
        description: 'Failed to create profile. Please try again.',
      });
    }
  };

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file || !uploadData.exerciseType) {
      toast({
        type: 'warning',
        title: 'Missing Information',
        description: 'Please select a video file and exercise type.',
      });
      return;
    }

    try {
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        type: 'success',
        title: 'Video Uploaded!',
        description: 'Your performance video is being analyzed. Results will be available shortly.',
      });
      setActiveTab("dashboard");
    } catch (error) {
      toast({
        type: 'error',
        title: 'Upload Failed',
        description: 'Failed to upload video. Please try again.',
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUploadChange('file', file);
      toast({
        type: 'info',
        title: 'File Selected',
        description: `${file.name} selected for upload.`,
      });
    }
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">For Athletes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Record your performance, get AI-powered analysis, and showcase your talent to coaches and scouts
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="upload">Upload Video</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="signup" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Create Your Athlete Profile</CardTitle>
                  <CardDescription>
                    Join TalentArena and start showcasing your athletic potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email" 
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input 
                          id="age" 
                          type="number" 
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          placeholder="Age" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sport">Primary Sport</Label>
                        <Select value={formData.sport} onValueChange={(value) => handleInputChange('sport', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sport" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="athletics">Athletics</SelectItem>
                            <SelectItem value="basketball">Basketball</SelectItem>
                            <SelectItem value="football">Football</SelectItem>
                            <SelectItem value="swimming">Swimming</SelectItem>
                            <SelectItem value="tennis">Tennis</SelectItem>
                            <SelectItem value="gymnastics">Gymnastics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="City, State" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="Tell us about your athletic background and goals" 
                      />
                    </div>
                    <Button size="lg" variant="athlete" className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? 'Creating Profile...' : 'Create Profile'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Upload Performance Video</CardTitle>
                  <CardDescription>
                    Upload your training or competition video for AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleVideoUpload} className="space-y-6">
                    <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Video File</p>
                      <p className="text-muted-foreground mb-4">
                        {uploadData.file ? `Selected: ${uploadData.file.name}` : 'Drag and drop your video file here, or click to browse'}
                      </p>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                        Choose File
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exerciseType">Exercise Type</Label>
                        <Select value={uploadData.exerciseType} onValueChange={(value) => handleUploadChange('exerciseType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exercise" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sprint">100m Sprint</SelectItem>
                            <SelectItem value="long-jump">Long Jump</SelectItem>
                            <SelectItem value="high-jump">High Jump</SelectItem>
                            <SelectItem value="push-ups">Push-ups</SelectItem>
                            <SelectItem value="pull-ups">Pull-ups</SelectItem>
                            <SelectItem value="squat-jump">Squat Jump</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Performance Date</Label>
                        <Input 
                          id="date" 
                          type="date" 
                          value={uploadData.date}
                          onChange={(e) => handleUploadChange('date', e.target.value)}
                        />
                      </div>
                    </div>
                    <Button size="lg" variant="success" className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? 'Uploading & Analyzing...' : 'Upload & Analyze'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Trophy className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Performance Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">85/100</div>
                    <p className="text-muted-foreground">Overall Rating</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Target className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Assessments</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">12</div>
                    <p className="text-muted-foreground">Completed</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Users className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Connections</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">5</div>
                    <p className="text-muted-foreground">Coach Views</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Performances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { exercise: "100m Sprint", score: "92/100", date: "2 days ago" },
                        { exercise: "Long Jump", score: "88/100", date: "5 days ago" },
                        { exercise: "Push-ups", score: "95/100", date: "1 week ago" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{item.exercise}</p>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{item.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Achievement Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: "Speed Demon", level: "Gold" },
                        { name: "Consistency", level: "Silver" },
                        { name: "Form Master", level: "Bronze" },
                        { name: "Strength", level: "Gold" },
                        { name: "Endurance", level: "Silver" },
                        { name: "Technique", level: "Bronze" },
                      ].map((badge, index) => (
                        <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                            badge.level === 'Gold' ? 'bg-yellow-500' :
                            badge.level === 'Silver' ? 'bg-gray-400' : 'bg-orange-600'
                          }`}></div>
                          <p className="text-xs font-medium">{badge.name}</p>
                          <p className="text-xs text-muted-foreground">{badge.level}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Athletes;