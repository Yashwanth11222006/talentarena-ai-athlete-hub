import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, CheckCircle } from "lucide-react";
import { useToast } from "@/contexts/ToastContext";

export const InteractiveDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { toast } = useToast();

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    setProgress(0);
    setAnalysisComplete(false);

    toast({
      type: 'info',
      title: 'Analysis Started',
      description: 'AI is now analyzing the performance video...',
    });

    // Simulate progressive analysis
    const intervals = [
      { percent: 25, message: 'Extracting motion data...', delay: 800 },
      { percent: 50, message: 'Analyzing form and technique...', delay: 1200 },
      { percent: 75, message: 'Calculating performance metrics...', delay: 1000 },
      { percent: 100, message: 'Generating insights...', delay: 800 },
    ];

    for (const interval of intervals) {
      await new Promise(resolve => setTimeout(resolve, interval.delay));
      setProgress(interval.percent);
      
      if (interval.percent < 100) {
        toast({
          type: 'info',
          title: 'Processing...',
          description: interval.message,
        });
      }
    }

    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    toast({
      type: 'success',
      title: 'Analysis Complete!',
      description: 'Your performance has been analyzed. Check your results below.',
    });
  };

  const resetDemo = () => {
    setProgress(0);
    setAnalysisComplete(false);
    setIsAnalyzing(false);
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Try the AI Analysis Demo</CardTitle>
        <CardDescription>
          Experience how our AI analyzes athletic performance in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Demo Video Placeholder */}
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium">Sample Training Video</p>
            <p className="text-sm text-muted-foreground">100m Sprint Analysis</p>
          </div>
          
          {isAnalyzing && (
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-sm font-medium">Analyzing...</p>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Analysis Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={startAnalysis} 
            disabled={isAnalyzing}
            className="flex-1"
          >
            {isAnalyzing ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Analyzing...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start AI Analysis
              </>
            )}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetDemo}
            disabled={isAnalyzing}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Results */}
        {analysisComplete && (
          <div className="space-y-4 p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Analysis Complete</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.7s</div>
                <div className="text-sm text-muted-foreground">Sprint Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">94/100</div>
                <div className="text-sm text-muted-foreground">Form Score</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Excellent Start</Badge>
              <Badge variant="secondary">Good Acceleration</Badge>
              <Badge variant="outline">Improve Arm Swing</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};