import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { profileData } from '../mock';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'prempanchal7435@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_fnsd03k',  // Your Service ID
        'template_jcd2r5i', // Your Template ID
        templateParams,
        'Kg-sWb_J3PRK5YfHG' // Your Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a href={`mailto:${profileData.email}`} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                      {profileData.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a href={`tel:${profileData.phone}`} className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                      {profileData.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <MapPin className="text-orange-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-slate-400 text-sm">{profileData.location}</p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-lg bg-[#0F0F10] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={profileData.github}
                  className="flex-1 p-4 rounded-lg bg-[#0F0F10] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-slate-200 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;