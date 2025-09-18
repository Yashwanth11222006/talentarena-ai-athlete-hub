import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, UserType } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: UserType;
}

export const AuthModal = ({ isOpen, onClose, defaultType = 'athlete' }: AuthModalProps) => {
  const [userType, setUserType] = useState<UserType>(defaultType);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) return;

    try {
      await login(formData.email, formData.password, userType);
      toast({
        type: 'success',
        title: 'Welcome Back!',
        description: `Successfully logged in as ${userType}.`,
      });
      onClose();
    } catch (error) {
      toast({
        type: 'error',
        title: 'Login Failed',
        description: 'Invalid credentials. Please try again.',
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to TalentArena</DialogTitle>
          <DialogDescription>
            Choose your role and sign in to continue
          </DialogDescription>
        </DialogHeader>

        <Tabs value={userType || 'athlete'} onValueChange={(value) => setUserType(value as UserType)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="athlete">Athlete</TabsTrigger>
            <TabsTrigger value="coach">Coach</TabsTrigger>
            <TabsTrigger value="official">Official</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Demo credentials: any email/password combination
            </p>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};