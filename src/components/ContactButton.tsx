import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ContactButton.css';

const ContactButton: React.FC = () => {
  return (
    <section className="contact-button-section">
      <div className="container">
        <motion.div
          className="contact-button-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/contact" className="btn btn-primary contact-button">
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactButton;