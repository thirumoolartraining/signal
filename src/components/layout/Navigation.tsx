import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Philosophy", href: "/philosophy" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border/20 shadow-sm' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <nav className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity duration-200"
            aria-label="Home"
          >
            SIGNAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-foreground before:scale-x-100'
                    : 'text-foreground/80 hover:text-foreground before:scale-x-0 hover:before:scale-x-100'
                } before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-foreground before:origin-left before:transition-transform before:duration-300`}
                aria-current={location.pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/proposal"
              className="group relative flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium tracking-wide text-foreground bg-foreground/5 border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get a Proposal
              <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-border/20' : 'max-h-0'
        }`}>
          <div className="py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-1 text-lg font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                aria-current={location.pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/proposal"
              onClick={() => setIsOpen(false)}
              className="mt-4 py-3 px-1 text-lg font-medium text-foreground/80 hover:text-foreground flex items-center gap-2 group"
            >
              Get a Proposal
              <ArrowUpRight size={18} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
