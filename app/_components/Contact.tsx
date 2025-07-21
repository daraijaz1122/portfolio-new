"use client"
import { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import data from '../data/data.json';
import { useForm} from '@formspree/react';
import { toast } from 'react-toastify';

interface ContactInfo {
  email: string;
  linkedin: string;
}

export default function Contact() {
  const { contact } = data as { contact: ContactInfo };
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [state, handleSubmit] = useForm("xeozezza");
  useEffect(() => {
  if (state.succeeded) {
    setFormData({ name: '', email: '', message: '' });
    toast.success("Your response has been recorded. Thank you!");
  }
}, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">Get in Touch</h3>
            <form onSubmit={handleSubmit} method='POST' className="space-y-4">
              <div className=''>
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  rows={5}
                  required
                />
              </div>
                    <button
                 disabled={state.submitting}      
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Contact Details</h3>
            <div className="space-y-4 ">
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="mr-2" size={20} />
                <a href={`mailto:${contact.email}`} className="hover:text-blue-500">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <Linkedin className="mr-2" size={20} />
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}