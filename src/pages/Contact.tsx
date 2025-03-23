
import { useEffect } from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactSidebar from '@/components/contact/ContactSidebar';
import ContactFaq from '@/components/contact/ContactFaq';

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Content */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <ContactSidebar />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <ContactFaq />
    </div>
  );
};

export default Contact;
