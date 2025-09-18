import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Search, Users, MessageCircle, UserPlus, Star, MapPin, Trophy, Video } from "lucide-react";

const Networking = () => {
  const [activeTab, setActiveTab] = useState("athletes");

  const mockAthletes = [
    {
      name: "Sarah Johnson",
      sport: "Athletics",
      age: 17,
      location: "California, USA",
      score: 92,
      specialty: "100m Sprint",
      followers: 234,
      following: 89,
      isFollowing: false,
    },
    {
      name: "Mike Chen", 
      sport: "Basketball",
      age: 19,
      location: "Texas, USA",
      score: 88,
      specialty: "Point Guard", 
      followers: 456,
      following: 156,
      isFollowing: true,
    },
    {
      name: "Elena Rodriguez",
      sport: "Swimming",
      age: 16,
      location: "Florida, USA",
      score: 95,
      specialty: "Freestyle",
      followers: 678,
      following: 203,
      isFollowing: false,
    }
  ];

  const mockCoaches = [
    {
      name: "Coach David Miller",
      specialization: "Track & Field",
      experience: 15,
      location: "New York, USA",
      athletes: 45,
      successRate: 89,
      certifications: ["USATF Level 3", "Olympic Coach"],
    },
    {
      name: "Coach Maria Santos",
      specialization: "Swimming",
      experience: 12,
      location: "California, USA", 
      athletes: 32,
      successRate: 94,
      certifications: ["USA Swimming", "Masters Coach"],
    },
    {
      name: "Coach James Wilson",
      specialization: "Basketball",
      experience: 8,
      location: "Illinois, USA",
      athletes: 28,
      successRate: 86,
      certifications: ["NCAA Certified", "Youth Development"],
    }
  ];

  const mockVendors = [
    {
      name: "SportsTech Solutions",
      category: "Equipment Supplier",
      location: "Multiple Locations",
      rating: 4.8,
      products: ["Training Equipment", "Performance Trackers", "Sports Apparel"],
    },
    {
      name: "Elite Performance Lab",
      category: "Sports Science",
      location: "Boston, USA",
      rating: 4.9,
      products: ["Biomechanics Analysis", "Nutrition Plans", "Recovery Programs"],
    },
    {
      name: "ProAthlete Media",
      category: "Video Production",
      location: "Los Angeles, USA",
      rating: 4.7,
      products: ["Highlight Reels", "Training Videos", "Social Media Content"],
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sports Networking</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with athletes, coaches, and sports industry professionals to build your network and grow your career
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="athletes">Athletes</TabsTrigger>
              <TabsTrigger value="coaches">Coaches</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="athletes" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Discover Athletes</CardTitle>
                  <CardDescription>Connect with talented athletes from around the world</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search athletes by name, sport, or location" className="pl-10" />
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
                          <div className="text-xs text-muted-foreground">Score</div>
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
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{athlete.followers} followers</span>
                          <span>{athlete.following} following</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant={athlete.isFollowing ? "secondary" : "default"} 
                          className="flex-1"
                        >
                          <UserPlus className="h-4 w-4 mr-1" />
                          {athlete.isFollowing ? "Following" : "Follow"}
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coaches" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Find Coaches</CardTitle>
                  <CardDescription>Connect with experienced coaches and mentors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search coaches by name, sport, or location" className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCoaches.map((coach, index) => (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{coach.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {coach.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{coach.successRate}%</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Badge variant="secondary">{coach.specialization}</Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          {coach.experience} years experience • {coach.athletes} athletes coached
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Certifications:</p>
                        <div className="flex flex-wrap gap-1">
                          {coach.certifications.map((cert, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" className="flex-1">
                          <UserPlus className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vendors" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Sports Vendors</CardTitle>
                  <CardDescription>Discover equipment suppliers, service providers, and industry partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search vendors by name, category, or products" className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVendors.map((vendor, index) => (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{vendor.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {vendor.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{vendor.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Badge variant="secondary">{vendor.category}</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Products & Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {vendor.products.map((product, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" className="flex-1">
                          <UserPlus className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="shadow-card lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Conversations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Coach Miller", lastMessage: "Great performance in the last video!", time: "2h ago", unread: 2 },
                        { name: "Sarah Johnson", lastMessage: "Thanks for the training tips!", time: "5h ago", unread: 0 },
                        { name: "SportsTech Solutions", lastMessage: "New equipment catalog available", time: "1d ago", unread: 1 },
                      ].map((conversation, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted/70 transition-colors">
                          <div className="flex-1">
                            <p className="font-medium">{conversation.name}</p>
                            <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                          </div>
                          <div className="text-right ml-2">
                            <p className="text-xs text-muted-foreground">{conversation.time}</p>
                            {conversation.unread > 0 && (
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center ml-auto mt-1">
                                <span className="text-xs text-white">{conversation.unread}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Chat with Coach Miller</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4 h-64 overflow-y-auto">
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Hey! I watched your latest 100m sprint video. Your form has really improved!</p>
                          <p className="text-xs text-muted-foreground mt-1">Coach Miller • 2h ago</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Thank you! I've been working on the technique you suggested.</p>
                          <p className="text-xs text-primary-foreground/70 mt-1">You • 1h ago</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Great! Keep focusing on your start position. I think you could improve your time by 0.2 seconds.</p>
                          <p className="text-xs text-muted-foreground mt-1">Coach Miller • 30m ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Type your message..." className="flex-1" />
                      <Button size="sm">Send</Button>
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

export default Networking;