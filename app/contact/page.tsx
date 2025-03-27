'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ContactPage = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success('Your message has been sent successfully!');
        router.push('/');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Something went wrong.'); 
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Dark Gradient Background Box */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full p-10 rounded-lg shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        
        {/* Image Section with Button on Top */}
        <div className="relative w-full md:w-1/2 flex flex-col items-left">
          {/* Back to Home Button - Positioned on Top of the Image */}
          <div className="absolute top-0 transform -translate-y-1/2">
            <Link href="/">
              <button className="btn-primary max-sm:w-full">
                ← Back to Home
              </button>
            </Link>
          </div>

          <br></br>
          <br></br>
          
          <Image 
            src="/contact.png" 
            alt="Contact HireGenie" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center md:text-left">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">Name</label>
              <input
                type="text"
                id="name"
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">Message</label>
              <textarea
                id="message"
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 min-h-[150px] focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="btn-primary max-sm:w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
