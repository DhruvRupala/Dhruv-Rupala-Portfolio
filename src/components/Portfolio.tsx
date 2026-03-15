import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
const projects = [{
  title: 'Excel Analytics App',
  description: 'Full-stack MERN application allowing users to upload Excel files and visualize data with interactive charts. Features real-time data processing and dynamic chart generation.',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js'],
  category: 'Web Development',
  github: 'https://github.com/DhruvRupala/Excel-Analytics-Web-App'
}, {
  title: 'ESports Tournament Registration Platform',
  description: 'A Competitive ESports Tournament Platform for Player Registration, Match Participation, and Prize Distribution.',
  technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'TailwindCSS'],
  category: 'Web Development',
  github: 'https://github.com/DhruvRupala/
}];
export const Portfolio = () => {
  return <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Explore my recent projects and internship work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <div key={project.title} className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300 group animate-fade-in" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1 sm:mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 sm:h-10 sm:w-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map(tech => <span key={tech} className="px-2.5 py-1 sm:px-3 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
