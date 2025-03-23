
import React, { forwardRef, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Text animation effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const phrases = ["magical", "powerful", "stunning", "extraordinary"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimer: ReturnType<typeof setTimeout>;
    
    const type = () => {
      const currentPhrase = phrases[currentIndex];
      const speed = isDeleting ? 50 : 150; // Faster when deleting
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        }
        
        if (charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
        }
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
        
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          typeTimer = setTimeout(type, 1500); // Pause at the end
          return;
        }
      }
      
      typeTimer = setTimeout(type, speed);
    };
    
    type();
    
    return () => clearTimeout(typeTimer);
  }, []);
  
  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center py-16 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 animate-float">
              <span className="text-magic-light/90 text-sm font-medium flex items-center">
                <Wand2 className="h-4 w-4 mr-2 text-magic-gold" />
                Web Development Consultancy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              We create <br />
              <span className="text-gradient">
                <span ref={textRef}>magical</span>
              </span> <br />
              digital experiences
            </h1>
            
            <p className="text-magic-light/80 text-lg md:text-xl mb-8 max-w-lg">
              Transform your ideas into captivating web applications that engage users and drive results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-8 py-6 text-lg rounded-full shadow-lg shadow-magic-gold/20 flex items-center gap-2">
                  <span>Get Started</span>
                  <ChevronRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full">
                  Our Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-10 h-10 rounded-full border-2 border-magic-dark bg-gradient-to-br from-magic-light/80 to-magic-accent/80"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="text-white font-medium">Trusted by 200+ clients</div>
                <div className="text-magic-light/60 text-sm">5.0 ★★★★★ (120+ reviews)</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-magic-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-magic-gold animate-pulse-subtle" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-magic-accent/20 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-magic-accent/40 rounded-full animate-pulse-subtle" />
              </div>
              
              {/* Main image container */}
              <div className="glass-card rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-magic-accent/10 to-magic-gold/5 group-hover:opacity-70 transition-opacity duration-500" />
                
                <div className="relative h-[500px] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80" 
                    alt="Web development magic" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-magic-dark/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4 text-center"
                    >
                      Transforming Ideas into Reality
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-magic-light/90 text-center mb-6"
                    >
                      We blend creativity and technology to create extraordinary digital experiences that captivate and convert.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link to="/about">
                        <Button className="bg-white/90 hover:bg-white text-magic-dark rounded-full">
                          Learn More
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
