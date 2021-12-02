import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
} from '@icons-pack/react-simple-icons';
import ContactForm from '../components/ContactForm/ContactForm';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <main main className="mx-5 mb-20 xl:container xl:mx-auto">
        <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Get in Touch
        </h1>
        <div className="lg:flex">
          <div className="mb-10 lg:w-1/2">
            <p className="mb-6 font-light tracking-wide xl:text-xl">
              Do not hesitate to reach us
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/+94771790463">
                <Whatsapp color="#25D366" className="w-8 h-8 md:w-12 md:h-12" />
              </a>
              <a href="https://facebook.com/techstacklk">
                <Facebook color="#1877F2" className="w-8 h-8 md:w-12 md:h-12" />
              </a>
              <a href="https://instagram.com/techstacklk">
                <Instagram
                  color="#E4405F"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
              </a>
              <a href="https://twitter.com/techstacklk">
                <Twitter color="#1DA1F2" className="w-8 h-8 md:w-12 md:h-12" />
              </a>
            </div>
            <p className="hidden mt-8 text-sm font-light tracking-wider text-gray-600 lg:block">
              Mobile : +94 77 17 90 463
            </p>
            <p className="hidden mt-2 text-sm font-light tracking-wider text-gray-600 lg:block">
              Nugegoda, Colombo, Sri Lanka.
            </p>
          </div>
          <div className="hidden md:block">
            <h2 className="mb-4 font-headline text-xl">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
        <div className="md:hidden">
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
