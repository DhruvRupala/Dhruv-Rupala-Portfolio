import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-primary text-base sm:text-lg md:text-xl font-medium">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Dhruv Rupala
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80">
                Architecting Ideas into Reality
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bachelor's of Computer Science student at PDEU with a strong interest in Web Development, Databases, Cybersecurity, and AI/ML. Motivated to apply problem-solving skills to real-world projects and meaningful challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button asChild className="gradient-primary shadow-glow w-full sm:w-auto">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href="https://drive.google.com/file/d/1AKznSJqspqvkklifc9rTElmInScAPPls/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center sm:justify-start">
              
              <a
                href="https://www.linkedin.com/in/dhruv-rupala-96191a253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
                <a
                href="https://github.com/DhruvRupala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://www.instagram.com/dhruv._rupala/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:dhruvrupala1213@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 gradient-primary rounded-full"></div>
                <img
                  src={profileImage}
                  alt="Dhruv Rupala - Computer Engineering Student"
                  className="relative w-full h-full object-cover rounded-full p-1.5 sm:p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
