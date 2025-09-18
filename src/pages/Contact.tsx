import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useToast } from "@/contexts/ToastContext";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        type: 'success',
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      });
      setFormData({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        userType: "", 
        subject: "", 
        message: "" 
      });
    } catch (error) {
      toast({
        type: 'error',
        title: 'Failed to Send',
        description: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How does the AI motion tracking work?",
      answer: "Our AI uses advanced computer vision and pose estimation algorithms to analyze your movements frame by frame. It identifies key body points and tracks their motion to provide detailed form analysis and performance metrics."
    },
    {
      question: "Is my video data secure and private?",
      answer: "Yes, absolutely. All video uploads are encrypted and stored securely. We follow strict privacy protocols and only authorized personnel can access your data for analysis purposes. You maintain full control over your content."
    },
    {
      question: "What video formats and quality are supported?",
      answer: "We support MP4, MOV, and AVI formats with resolutions from 720p to 4K. For best results, we recommend 1080p at 30-60 FPS. Videos can be up to 10 minutes long and 500MB in size."
    },
    {
      question: "How accurate is the performance scoring?",
      answer: "Our AI achieves 95.7% accuracy in movement analysis. Scores are based on biomechanical principles, form analysis, and comparison with established performance standards in each sport."
    },
    {
      question: "Can coaches access my performance data?",
      answer: "Only if you explicitly grant permission. You have full control over who can view your profile and performance data. Coaches can only see what you choose to share with them."
    },
    {
      question: "What sports and exercises are currently supported?",
      answer: "We currently support athletics (track and field), swimming, basketball, gymnastics, and general fitness exercises. We're continuously adding new sports and movements based on user demand."
    },
    {
      question: "How do I get verified as an official athlete?",
      answer: "Submit your performance videos along with any relevant competition results or certifications. Our AI will verify the authenticity of your submissions, and our team will review your credentials."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, TalentArena is available as a web platform. We're developing mobile apps for iOS and Android, which will be available in early 2024."
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact & Support</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team or find answers to frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                          placeholder="Your first name" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Your last name" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com" 
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="userType">I am a...</Label>
                        <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="athlete">Athlete</SelectItem>
                            <SelectItem value="coach">Coach</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="official">Sports Official</SelectItem>
                            <SelectItem value="vendor">Vendor/Partner</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="What is this about?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your question or concern in detail..." 
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@talentarena.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+1-800-TALENT</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p className="text-sm text-muted-foreground">24/7 Online Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent technical issues or account problems that need immediate attention.
                  </p>
                  <Button variant="destructive" className="w-full">
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Average Response Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Email Support</span>
                    <span className="text-sm font-medium">&lt; 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Phone Support</span>
                    <span className="text-sm font-medium">&lt; 2 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Emergency</span>
                    <span className="text-sm font-medium">&lt; 30 minutes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-primary mb-4" />
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find quick answers to common questions about TalentArena
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle>Help Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our comprehensive help documentation and tutorials.
                </p>
                <Button variant="outline" className="w-full">
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other athletes and coaches in our community.
                </p>
                <Button variant="outline" className="w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Watch step-by-step video guides to get the most out of TalentArena.
                </p>
                <Button variant="outline" className="w-full">
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;