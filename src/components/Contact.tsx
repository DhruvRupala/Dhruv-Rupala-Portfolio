import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhruvrupala1213@gmail.com',
    href: 'mailto:dhruvrupala1213@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8401722679',
    href: 'tel:+918401722679',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gujarat, India',
    href: null,
  },
];

const socialProfiles = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruv-rupala-96191a253/',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/DhruvRupala',
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const { ref: leftRef, isInView: leftInView } = useScrollReveal();
  const { ref: rightRef, isInView: rightInView } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: '✅ Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In"
      titleAccent="Touch"
      subtitle="Have a project in mind? Let's work together to bring your ideas to life"
      showBackground
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          ref={leftRef}
          className="space-y-5"
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="glass-card-hover p-5 rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors font-medium break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-foreground/90 font-medium">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Social profiles */}
          <div className="flex gap-4 pt-2">
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card-hover p-4 rounded-2xl flex items-center justify-center space-x-3 group"
              >
                <profile.icon className="h-5 w-5 text-primary" />
                <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                  {profile.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={rightRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border border-border/40">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 h-12 rounded-xl border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 h-12 rounded-xl border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-background/50 h-12 rounded-xl border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-background/50 rounded-xl border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-primary-foreground h-12 rounded-xl text-base font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};
