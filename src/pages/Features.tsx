import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Eye, 
  Shield, 
  Scissors, 
  Trophy, 
  Users, 
  BarChart3, 
  Target, 
  Zap,
  Brain,
  Video,
  Award,
  MessageCircle
} from "lucide-react";
import aiTrackingImage from "@/assets/ai-motion-tracking.jpg";

const Features = () => {
  const coreFeatures = [
    {
      icon: Eye,
      title: "AI Motion Tracking",
      description: "Advanced pose detection and skeleton extraction for detailed movement analysis",
      details: [
        "Real-time pose estimation",
        "3D movement tracking", 
        "Form analysis and correction",
        "Movement pattern recognition"
      ]
    },
    {
      icon: Shield,
      title: "Cheat Detection",
      description: "AI-powered verification to detect tampered videos and false attempts",
      details: [
        "Video authenticity verification",
        "Attempt validation",
        "Metadata analysis",
        "Tampering detection algorithms"
      ]
    },
    {
      icon: Scissors,
      title: "Auto-Test Segmentation",
      description: "Intelligent video segmentation to automatically count reps, jumps, and runs",
      details: [
        "Automatic rep counting",
        "Exercise segmentation",
        "Time-based analysis",
        "Performance metrics extraction"
      ]
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Achievement badges, leaderboards, and progress tracking to motivate athletes",
      details: [
        "Achievement badges system",
        "Global leaderboards",
        "Progress milestones",
        "Personalized challenges"
      ]
    }
  ];

  const analysisFeatures = [
    {
      icon: Brain,
      title: "Performance Analytics",
      description: "Deep insights into athletic performance with AI-powered analysis"
    },
    {
      icon: Video,
      title: "Video Analysis",
      description: "Frame-by-frame breakdown of technique and form"
    },
    {
      icon: Target,
      title: "Benchmarking",
      description: "Compare performance against standards and peer groups"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Detailed progression analysis over time"
    }
  ];

  const networkingFeatures = [
    {
      icon: Users,
      title: "Athlete Profiles",
      description: "Comprehensive profiles showcasing skills and achievements"
    },
    {
      icon: Award,
      title: "Coach Discovery",
      description: "Connect with qualified coaches in your sport"
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Secure communication between athletes and coaches"
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "AI-powered matching based on compatibility and goals"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="block gradient-hero bg-clip-text text-transparent">
                Athletic Excellence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with sports science 
              to provide comprehensive talent assessment and development tools.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core AI Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced artificial intelligence capabilities that set TalentArena apart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative">
              <img
                src={aiTrackingImage}
                alt="AI motion tracking in action"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Performance Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to analyze, track, and improve athletic performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card text-center hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Networking & Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with coaches, scouts, and fellow athletes to build your sports network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkingFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card text-center hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technology for reliable and accurate assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>AI Models</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pose Detection</span>
                  <span className="font-medium">MediaPipe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Motion Analysis</span>
                  <span className="font-medium">Custom CNN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Video Processing</span>
                  <span className="font-medium">OpenCV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accuracy</span>
                  <span className="font-medium text-accent">95.7%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Supported Formats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Video Formats</span>
                  <span className="font-medium">MP4, MOV, AVI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution</span>
                  <span className="font-medium">720p - 4K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frame Rate</span>
                  <span className="font-medium">30-120 FPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Duration</span>
                  <span className="font-medium">10 minutes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Encryption</span>
                  <span className="font-medium">AES-256</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Storage</span>
                  <span className="font-medium">Encrypted Cloud</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Compliance</span>
                  <span className="font-medium">GDPR, COPPA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime</span>
                  <span className="font-medium text-accent">99.9%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;