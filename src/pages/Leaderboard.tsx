import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Trophy, Medal, Award, Target, TrendingUp, MapPin } from "lucide-react";
import leaderboardImage from "@/assets/leaderboard-ceremony.jpg";
import athletesTrainingImage from "@/assets/athletes-training.jpg";

const Leaderboard = () => {
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const mockLeaderboard = [
    {
      rank: 1,
      name: "Sarah Johnson",
      sport: "Athletics",
      event: "100m Sprint",
      score: 95,
      location: "California, USA",
      recent: "+3",
      badges: ["Gold Medal", "Speed Demon", "Consistency"],
    },
    {
      rank: 2,
      name: "Elena Rodriguez", 
      sport: "Swimming",
      event: "200m Freestyle",
      score: 94,
      location: "Florida, USA",
      recent: "+1",
      badges: ["Silver Medal", "Technique Master", "Endurance"],
    },
    {
      rank: 3,
      name: "Mike Chen",
      sport: "Basketball", 
      event: "Free Throws",
      score: 92,
      location: "Texas, USA",
      recent: "0",
      badges: ["Bronze Medal", "Precision", "Focus"],
    },
    {
      rank: 4,
      name: "Alex Thompson",
      sport: "Athletics",
      event: "Long Jump",
      score: 91,
      location: "New York, USA", 
      recent: "+2",
      badges: ["Form Expert", "Power", "Technique"],
    },
    {
      rank: 5,
      name: "Maya Patel",
      sport: "Gymnastics",
      event: "Floor Routine",
      score: 90,
      location: "Georgia, USA",
      recent: "+4",
      badges: ["Artistry", "Balance", "Grace"],
    },
  ];

  const topPerformers = [
    { category: "Most Improved", athlete: "Jake Wilson", improvement: "+12 points", sport: "Track" },
    { category: "Consistency Champion", athlete: "Lisa Zhang", streak: "15 sessions", sport: "Swimming" }, 
    { category: "Rising Star", athlete: "Carlos Martinez", age: 16, score: 88, sport: "Soccer" },
  ];

  const achievements = [
    { badge: "Speed Demon", description: "Achieved top speed in sprint events", holders: 45, rarity: "Rare" },
    { badge: "Consistency King", description: "Maintained performance for 30+ days", holders: 23, rarity: "Epic" },
    { badge: "Form Master", description: "Perfect technique score in 10 sessions", holders: 67, rarity: "Common" },
    { badge: "Endurance Elite", description: "Completed longest training session", holders: 12, rarity: "Legendary" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getBadgeColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "bg-purple-500";
      case "Epic":
        return "bg-pink-500";
      case "Rare":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Layout>
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{backgroundImage: `url(${leaderboardImage})`}}></div>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Global Leaderboard</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
              See how you rank against athletes worldwide and celebrate achievements together
            </p>
          </div>

          <Tabs defaultValue="leaderboard" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="leaderboard">Rankings</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Filter Rankings</CardTitle>
                  <CardDescription>Customize the leaderboard view</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Sport</label>
                      <Select value={selectedSport} onValueChange={setSelectedSport}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sports</SelectItem>
                          <SelectItem value="athletics">Athletics</SelectItem>
                          <SelectItem value="swimming">Swimming</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="gymnastics">Gymnastics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Age Group</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Ages" />
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
                      <label className="text-sm font-medium">Region</label>
                      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Global</SelectItem>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Period</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Time</SelectItem>
                          <SelectItem value="week">This Week</SelectItem>
                          <SelectItem value="month">This Month</SelectItem>
                          <SelectItem value="year">This Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="shadow-card lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Top Athletes</CardTitle>
                    <CardDescription>Global performance rankings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockLeaderboard.map((athlete, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-center w-12 h-12">
                            {getRankIcon(athlete.rank)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{athlete.name}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">{athlete.score}</span>
                                <span className={`text-sm px-2 py-1 rounded ${
                                  athlete.recent.startsWith('+') ? 'bg-green-100 text-green-700' : 
                                  athlete.recent === '0' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'
                                }`}>
                                  {athlete.recent}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary">{athlete.sport}</Badge>
                              <span className="text-sm text-muted-foreground">• {athlete.event}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {athlete.location}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {athlete.badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>Top Performers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topPerformers.map((performer, index) => (
                          <div key={index} className="p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <Target className="h-4 w-4 text-accent" />
                              <span className="font-medium text-sm">{performer.category}</span>
                            </div>
                            <p className="font-semibold">{performer.athlete}</p>
                            <p className="text-sm text-muted-foreground">
                              {performer.sport} • {performer.improvement || performer.streak || `Age ${performer.age}, Score ${performer.score}`}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>Your Rank</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <div className="text-3xl font-bold text-primary">#47</div>
                        <p className="text-muted-foreground">Global Ranking</p>
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm">+5 this week</span>
                        </div>
                        <div className="pt-4 space-y-2">
                          <p className="text-sm text-muted-foreground">Your best event:</p>
                          <Badge>Push-ups: 87/100</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div className="section-black rounded-2xl p-8 mb-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Achievement System</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Unlock exclusive badges and recognition for your athletic achievements
                  </p>
                </div>
              </div>
              <Card className="card-enhanced animate-fade-in">
                <CardHeader>
                  <CardTitle>Achievement Badges</CardTitle>
                  <CardDescription>Unlock badges by reaching performance milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                        <div className={`w-12 h-12 ${getBadgeColor(achievement.rarity)} rounded-full flex items-center justify-center`}>
                          <Trophy className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{achievement.badge}</h3>
                            <Badge variant="outline" className={`text-xs ${achievement.rarity === 'Legendary' ? 'border-purple-500 text-purple-600' : 
                              achievement.rarity === 'Epic' ? 'border-pink-500 text-pink-600' :
                              achievement.rarity === 'Rare' ? 'border-blue-500 text-blue-600' : ''}`}>
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          <p className="text-xs text-muted-foreground">{achievement.holders} athletes have this badge</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <TrendingUp className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Weekly Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">+8</div>
                    <p className="text-muted-foreground">Positions climbed</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Target className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>Goals Achieved</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">3/5</div>
                    <p className="text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <Trophy className="mx-auto h-8 w-8 text-accent mb-2" />
                    <CardTitle>New Badges</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">2</div>
                    <p className="text-muted-foreground">Earned this week</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Your improvement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { exercise: "100m Sprint", trend: "+5%", score: "89/100", status: "improving" },
                      { exercise: "Long Jump", trend: "+12%", score: "85/100", status: "improving" },
                      { exercise: "Push-ups", trend: "-2%", score: "92/100", status: "declining" },
                      { exercise: "High Jump", trend: "+8%", score: "78/100", status: "improving" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.exercise}</p>
                          <p className="text-sm text-muted-foreground">Current: {item.score}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            item.status === 'improving' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {item.trend}
                          </div>
                          <TrendingUp className={`h-4 w-4 ${
                            item.status === 'improving' ? 'text-green-600' : 'text-red-600 rotate-180'
                          }`} />
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

export default Leaderboard;