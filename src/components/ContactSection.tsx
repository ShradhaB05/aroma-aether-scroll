import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive",
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-luxury-black mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to discover your signature scent? Get in touch with our fragrance experts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="h-12 border-luxury-black/20 focus:border-luxury-gold transition-smooth"
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 border-luxury-black/20 focus:border-luxury-gold transition-smooth"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your fragrance preferences..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="border-luxury-black/20 focus:border-luxury-gold transition-smooth resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="luxury"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-12 text-center space-y-4">
            <div className="text-luxury-black/70">
              <strong>Visit our boutique</strong>
            </div>
            <div className="text-luxury-black/60">
              123 Luxury Avenue, Beverly Hills, CA 90210
            </div>
            <div className="text-luxury-black/60">
              Phone: (555) 123-4567 | Email: hello@luxe-perfumes.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;