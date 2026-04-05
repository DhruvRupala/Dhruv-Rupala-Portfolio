import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themes = [
  { name: 'Neon Cyan', class: '', color: 'hsl(190 100% 50%)' },
  { name: 'Cosmic Purple', class: 'theme-purple', color: 'hsl(270 80% 65%)' },
  { name: 'Matrix Green', class: 'theme-green', color: 'hsl(155 85% 45%)' },
  { name: 'Midnight Blue', class: 'theme-dark', color: 'hsl(210 100% 55%)' },
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('Neon Cyan');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme !== null) {
      const theme = themes.find((t) => t.class === savedTheme);
      if (theme) {
        setCurrentTheme(theme.name);
        document.body.className = savedTheme;
      }
    }
    // Default is Neon Cyan (no class needed, root vars apply)
  }, []);

  const changeTheme = (themeName: string, themeClass: string) => {
    setCurrentTheme(themeName);
    document.body.className = themeClass;
    localStorage.setItem('portfolio-theme', themeClass);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-xl border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all"
          aria-label="Change theme"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 glass-card border-border/50">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => changeTheme(theme.name, theme.class)}
            className={`flex items-center gap-3 cursor-pointer rounded-lg ${
              currentTheme === theme.name
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/80'
            }`}
          >
            <span
              className="w-3 h-3 rounded-full border border-border/50 flex-shrink-0"
              style={{ background: theme.color }}
            />
            <span className="text-sm font-medium">{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
