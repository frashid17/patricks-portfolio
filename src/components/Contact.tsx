import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    
    const PUBLIC_KEY = "AGzRshrSCufD-8sk6";
    const TEMPLATE_ID = "template_s3702js";
    const SERVICE_ID = "service_jxjrjgy";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:frashid274@gmail.com"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="mr-4" size={24} />
              Patrick Mwangi
            </a>
            
            <a
              href="https://github.com/frashid17"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Github className="mr-4" size={24} />
              frashid17
            </a>
            
            <a
              href="https://linkedin.com/in/patrick-mwangi-d786"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="mr-4" size={24} />
              Patrick Mwangi
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {status.type && (
            <div className={`p-4 rounded-lg ${
              status.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
            }`}>
              {status.message}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Send Message
            <Send className="ml-2" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;