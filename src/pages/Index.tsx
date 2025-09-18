import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { ArrowRight, Play, BarChart3, Users, Target, Shield } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import athletesTrainingImage from "@/assets/athletes-training.jpg";
import aiTrackingImage from "@/assets/ai-motion-tracking.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight animate-scale-in">
                  AI-Powered Sports
                  <span className="block gradient-hero bg-clip-text text-transparent">
                    Talent Assessment
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg animate-fade-in delay-200">
                  Record, analyze, and showcase your performance — anytime, anywhere. 
                  Connect with coaches and scouts through intelligent assessment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                <Button size="xl" variant="hero" className="hover-scale" asChild>
                  <Link to="/athletes">
                    I'm an Athlete
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="coach" className="hover-scale" asChild>
                  <Link to="/coaches">
                    I'm a Coach
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-400">
              <img
                src={heroImage}
                alt="Athletes training with modern equipment"
                className="rounded-2xl shadow-soft w-full h-auto hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How TalentArena Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform transforms sports assessment through intelligent video analysis and benchmarking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Record",
                description: "Upload or record your performance video",
                icon: Play,
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Advanced motion tracking and form analysis",
                icon: BarChart3,
              },
              {
                step: "03",
                title: "Benchmarks",
                description: "Compare against performance standards",
                icon: Target,
              },
              {
                step: "04",
                title: "Dashboard",
                description: "Track progress and showcase talent",
                icon: Users,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-card hover-lift animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Advanced AI Motion Tracking
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our cutting-edge AI analyzes every movement, providing detailed insights into form, 
                  technique, and performance metrics that matter most.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Cheat detection and video verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-accent" />
                  <span>Automatic test segmentation and counting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <span>Real-time performance analytics</span>
                </div>
              </div>
              <Button size="lg" variant="default" className="hover-scale" asChild>
                <Link to="/leaderboard">
                  View Leaderboards
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-fade-in">
              <img
                src={dashboardImage}
                alt="Performance analytics dashboard"
                className="rounded-2xl shadow-soft w-full h-auto hover-lift"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Comprehensive Performance Dashboard
                </h2>
                <p className="text-lg text-muted-foreground">
                  Track your progress with detailed analytics, compare with benchmarks, 
                  and showcase your achievements to coaches and scouts.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Performance trend analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Goal setting and tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Networking with coaches and scouts</span>
                </div>
              </div>
              <Button size="lg" variant="default" asChild>
                <Link to="/networking">
                  Join the Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Showcase Your Talent?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of athletes already using TalentArena to track their progress and connect with opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/athletes">Get Started as Athlete</Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/coaches">Find Talent as Coach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
