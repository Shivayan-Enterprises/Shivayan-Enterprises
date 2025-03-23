
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Database, Smartphone, Gauge, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies that engage users and drive results.",
    color: "from-blue-600 to-blue-400",
    link: "/services"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and strengthen your brand identity.",
    color: "from-purple-600 to-purple-400",
    link: "/services"
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Digital Strategy",
    description: "Strategic planning and consultation to align your digital presence with your business objectives.",
    color: "from-amber-500 to-amber-300",
    link: "/services"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "CMS Solutions",
    description: "Powerful content management systems that make updating your website simple and efficient.",
    color: "from-green-600 to-green-400",
    link: "/services"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that provide a seamless experience across all devices.",
    color: "from-red-600 to-red-400",
    link: "/services"
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Speed optimization services to ensure your website loads quickly and ranks higher in search results.",
    color: "from-cyan-600 to-cyan-400",
    link: "/services"
  }
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  link: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, color, link, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="p-6 md:p-8">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-magic-light/70 mb-5">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center text-magic-light font-medium group-hover:text-magic-gold transition-colors duration-300"
        >
          <span>Learn more</span>
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 opacity-0 transition-opacity duration-700 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-magic-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-magic-accent/10 mb-3"
          >
            <span className="text-magic-accent text-sm font-medium">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Magical Digital <span className="text-gradient">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-magic-light/80 text-lg max-w-2xl mx-auto"
          >
            We offer a full range of web development and design services to help your business thrive in the digital world.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button className="bg-magic-accent hover:bg-magic-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-magic-accent/20">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
