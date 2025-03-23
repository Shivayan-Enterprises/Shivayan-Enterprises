
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';
import BusinessHours from './BusinessHours';

const ContactSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <ContactInfo />
      <LocationMap />
      <BusinessHours />
    </motion.div>
  );
};

export default ContactSidebar;
