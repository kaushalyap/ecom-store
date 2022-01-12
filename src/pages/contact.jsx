import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Whatsapp,
} from '@icons-pack/react-simple-icons';
import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Any questions, doubts, want to whether a product fit your needs?, do not hesitate to reach us through the contact form, social media and WhatsApp"
      />
      <main>
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl lg:text-3xl xl:text-7xl">
          Get in Touch
        </h1>
        <div className="lg:flex">
          <div className="mb-10 lg:w-1/2">
            <p className="mb-6 font-light tracking-wider xl:text-xl">
              Do not hesitate to reach us, we won&apos;t bite.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/+94771790463">
                <Whatsapp
                  color="#25D366"
                  className="w-8 h-8 opacity-70 hover:opacity-100 md:w-12 md:h-12"
                />
              </a>
              <a href="https://facebook.com/techstacklk">
                <Facebook
                  color="#1877F2"
                  className="w-8 h-8 opacity-70 hover:opacity-100 md:w-12 md:h-12"
                />
              </a>
              <a href="https://instagram.com/techstacklk">
                <Instagram
                  color="#E4405F"
                  className="w-8 h-8 opacity-70 hover:opacity-100 md:w-12 md:h-12"
                />
              </a>
              <a href="https://pinterest.com/techstacklk">
                <Pinterest
                  color="#BD081C"
                  className="w-8 h-8 opacity-50 hover:opacity-100 md:w-12 md:h-12"
                />
              </a>
              <a href="https://twitter.com/techstacklk">
                <Twitter
                  color="#1DA1F2"
                  className="w-8 h-8 opacity-70 hover:opacity-100 md:w-12 md:h-12"
                />
              </a>
            </div>
            <p className="hidden mt-8 text-sm font-light tracking-wider text-gray-600 lg:block lg:text-lg">
              Mobile : +94 77 17 90 463
            </p>
            <p className="hidden mt-2 text-sm font-light tracking-wider text-gray-600 lg:block lg:text-lg">
              Nugegoda, Colombo, Sri Lanka.
            </p>
          </div>
          <div className="hidden md:block xl:w-1/2">
            <h2 className="mb-4 font-headline text-lg tracking-wider lg:text-xl xl:text-2xl">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
        <div className="md:hidden lg:w-1/2">
          <hr className=" text-sm border border-gray-200" />
          <p className=" my-8 font-light tracking-wider text-gray-600">Or</p>
          <ContactForm />
          <div className="">
            <hr className=" mt-10 border border-gray-200" />

            <p className="mt-8 text-sm font-light tracking-wider text-gray-600">
              Mobile : +94 77 17 90 463
            </p>
            <p className="mt-2 text-sm font-light tracking-wider text-gray-600">
              Nugegoda, Colombo, Sri Lanka.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
