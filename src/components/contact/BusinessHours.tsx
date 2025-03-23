
import { motion } from 'framer-motion';

const BusinessHours = () => {
  return (
    <div className="glass-dark p-6 rounded-xl mt-10">
      <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-magic-light/70">Monday - Friday</span>
          <span className="text-magic-light">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-magic-light/70">Saturday</span>
          <span className="text-magic-light">10:00 AM - 4:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-magic-light/70">Sunday</span>
          <span className="text-magic-light">Closed</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
