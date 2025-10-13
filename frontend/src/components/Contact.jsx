import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // clear any existing success timeout
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }

    // Use URL-encoded form data which is commonly accepted by Google Apps Script
    const urlEncoded = new URLSearchParams();
    Object.keys(formData).forEach((key) => urlEncoded.append(key, formData[key]));

    fetch('https://script.google.com/macros/s/AKfycbxdvE7Uwixs0BNZQXiEf7IHqpRKOo9p5FcTniCeiFjHC-kkvT__saMLDZKnxD6F36t3/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: urlEncoded.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
        // Some Apps Script deployments return plain text, so don't assume JSON.
        return response.text();
      })
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        // show success state briefly (2s), then reset
        setIsSuccess(true);
        // ensure submitting flag cleared so button can show success state
        setIsSubmitting(false);
        successTimeoutRef.current = setTimeout(() => {
          setIsSuccess(false);
          successTimeoutRef.current = null;
        }, 2000);
      })
      .catch((err) => {
        console.error('Contact form submit error:', err);
        toast({
          title: 'Error',
          description: 'There was a problem sending your message. Please try again later.',
        });
      })
      .finally(() => {
        // only clear submitting here if not already cleared by success branch
        setIsSubmitting((prev) => prev && !isSuccess ? false : false);
      });
  };

  // cleanup timeout on unmount to avoid setting state after unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">Let's discuss your project</p>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white relative overflow-hidden transition-all duration-200"
                disabled={isSubmitting || isSuccess}
              >
                {/* Content layers: keep layout stable and crossfade */}
                <span
                  className={`flex items-center justify-center gap-2 w-full transition-opacity duration-200 ${isSubmitting || isSuccess ? 'opacity-0 pointer-events-none absolute inset-0' : 'opacity-100 relative'}`}
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4" />
                </span>

                <span
                  className={`flex items-center justify-center gap-2 w-full transition-all duration-200 ${isSubmitting ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </span>

                <span
                  className={`flex items-center justify-center gap-2 w-full transition-all duration-200 ${isSuccess ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                >
                  <Check className="h-4 w-4" />
                  <span>Sent!</span>
                </span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;