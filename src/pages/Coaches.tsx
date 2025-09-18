import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { Search, Filter, Star, Trophy, MapPin, Play, Heart, MessageCircle } from "lucide-react";

const Coaches = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [coachData, setCoachData] = useState({
    name: "",
    organization: "",
    email: "",
    experience: "",
    specialization: "",
    location: "",
    certifications: "",
    bio: "",
  });
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    sport: "all",
    age: "all",
    location: "all",
  });
  const [shortlistedAthletes, setShortlistedAthletes] = useState<string[]>([]);
  
  const { signup, isLoading } = useAuth();
  const { toast } = useToast();

  const handleCoachInputChange = (field: string, value: string) => {
    setCoachData(prev => ({ ...prev, [field]: value }));
  };

  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleCoachSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(coachData, 'coach');
      toast({
        type: 'success',
        title: 'Coach Profile Created!',
        description: 'Welcome to TalentArena. Start discovering talented athletes.',
      });
      setActiveTab("search");
    } catch (error) {
      toast({
        type: 'error',
        title: 'Error',
        description: 'Failed to create coach profile. Please try again.',
      });
    }
  };

  const toggleShortlist = (athleteName: string) => {
    setShortlistedAthletes(prev => {
      const isShortlisted = prev.includes(athleteName);
      if (isShortlisted) {
        toast({
          type: 'info',
          title: 'Removed from Shortlist',
          description: `${athleteName} has been removed from your shortlist.`,
        });
        return prev.filter(name => name !== athleteName);
      } else {
        toast({
          type: 'success',
          title: 'Added to Shortlist',
          description: `${athleteName} has been added to your shortlist.`,
        });
        return [...prev, athleteName];
      }
    });
  };

  const sendMessage = (athleteName: string) => {
    toast({
      type: 'info',
      title: 'Message Sent',
      description: `Your message has been sent to ${athleteName}.`,
    });
  };

  const mockAthletes = [
    {
      name: "Sarah Johnson",
      sport: "Athletics",
      age: 17,
      location: "California, USA",
      score: 92,
      specialty: "100m Sprint",
      achievements: ["State Champion", "Regional Record"],
      videos: 8,
    },
    {
      name: "Mike Chen",
      sport: "Basketball",
      age: 19,
      location: "Texas, USA", 
      score: 88,
      specialty: "Point Guard",
      achievements: ["All-State Team", "MVP Award"],
      videos: 12,
    },
    {
      name: "Elena Rodriguez",
      sport: "Swimming",
      age: 16,
      location: "Florida, USA",
      score: 95,
      specialty: "Freestyle",
      achievements: ["National Qualifier", "Junior Olympics"],
      videos: 15,
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">For Coaches</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover talented athletes, analyze their performance data, and connect with future champions
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signup">Coach Profile</TabsTrigger>
              <TabsTrigger value="search">Find Athletes</TabsTrigger>
              <TabsTrigger value="dashboard">My Connections</TabsTrigger>
            </TabsList>

            <TabsContent value="signup" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Create Your Coach Profile</CardTitle>
                  <CardDescription>
                    Set up your profile to start connecting with talented athletes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCoachSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="coachName">Full Name</Label>
                        <Input 
                          id="coachName" 
                          value={coachData.name}
                          onChange={(e) => handleCoachInputChange('name', e.target.value)}
                          placeholder="Enter your full name" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input 
                          id="organization" 
                          value={coachData.organization}
                          onChange={(e) => handleCoachInputChange('organization', e.target.value)}
                          placeholder="School/Club/Team name" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coachEmail">Email</Label>
                      <Input 
                        id="coachEmail" 
                        type="email" 
                        value={coachData.email}
                        onChange={(e) => handleCoachInputChange('email', e.target.value)}
                        placeholder="Enter your email" 
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input 
                          id="experience" 
                          type="number" 
                          value={coachData.experience}
                          onChange={(e) => handleCoachInputChange('experience', e.target.value)}
                          placeholder="Years" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialization">Sport Specialization</Label>
                        <Select value={coachData.specialization} onValueChange={(value) => handleCoachInputChange('specialization', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Primary sport" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="athletics">Athletics</SelectItem>
                            <SelectItem value="basketball">Basketball</SelectItem>
                            <SelectItem value="football">Football</SelectItem>
                            <SelectItem value="swimming">Swimming</SelectItem>
                            <SelectItem value="tennis">Tennis</SelectItem>
                            <SelectItem value="multi-sport">Multi-Sport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coachLocation">Location</Label>
                        <Input 
                          id="coachLocation" 
                          value={coachData.location}
                          onChange={(e) => handleCoachInputChange('location', e.target.value)}
                          placeholder="City, State" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certifications">Certifications</Label>
                      <Input 
                        id="certifications" 
                        value={coachData.certifications}
                        onChange={(e) => handleCoachInputChange('certifications', e.target.value)}
                        placeholder="List your coaching certifications" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coachBio">Professional Bio</Label>
                      <Textarea 
                        id="coachBio" 
                        value={coachData.bio}
                        onChange={(e) => handleCoachInputChange('bio', e.target.value)}
                        placeholder="Describe your coaching philosophy and experience" 
                      />
                    </div>
                    <Button size="lg" variant="coach" className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? 'Creating Profile...' : 'Create Coach Profile'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="search" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Search & Filter Athletes</CardTitle>
                  <CardDescription>
                    Find athletes that match your criteria and coaching needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="searchName">Athlete Name</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="searchName" placeholder="Search by name" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filterSport">Sport</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All sports" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sports</SelectItem>
                          <SelectItem value="athletics">Athletics</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="swimming">Swimming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filterAge">Age Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All ages" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Ages</SelectItem>
                          <SelectItem value="14-16">14-16 years</SelectItem>
                          <SelectItem value="17-19">17-19 years</SelectItem>
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filterLocation">Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAthletes.map((athlete, index) => (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{athlete.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {athlete.location}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{athlete.score}</div>
                          <div className="text-xs text-muted-foreground">Performance Score</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{athlete.sport}</Badge>
                        <span className="text-sm text-muted-foreground">Age {athlete.age}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Specialty: {athlete.specialty}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Play className="h-3 w-3" />
                          {athlete.videos} performance videos
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Achievements:</p>
                        <div className="flex flex-wrap gap-1">
                          {athlete.achievements.map((achievement, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              <Trophy className="h-3 w-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" className="flex-1">
                          View Profile
                        </Button>
                        <Button 
                          size="sm" 
                          variant={shortlistedAthletes.includes(athlete.name) ? "default" : "outline"}
                          onClick={() => toggleShortlist(athlete.name)}
                        >
                          <Heart className={`h-4 w-4 ${shortlistedAthletes.includes(athlete.name) ? 'fill-current' : ''}`} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => sendMessage(athlete.name)}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Star className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Shortlisted</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">8</div>
                    <p className="text-muted-foreground">Athletes</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <MessageCircle className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Conversations</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">5</div>
                    <p className="text-muted-foreground">Active Chats</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Trophy className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Recruited</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">3</div>
                    <p className="text-muted-foreground">This Year</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Shortlisted Athletes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAthletes.slice(0, 3).map((athlete, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{athlete.name}</p>
                            <p className="text-sm text-muted-foreground">{athlete.sport} • Score: {athlete.score}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="default">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Shortlisted", athlete: "Sarah Johnson", time: "2 hours ago" },
                        { action: "Viewed profile", athlete: "Mike Chen", time: "5 hours ago" },
                        { action: "Sent message", athlete: "Elena Rodriguez", time: "1 day ago" },
                        { action: "Shortlisted", athlete: "Alex Thompson", time: "2 days ago" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.athlete}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
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

export default Coaches;