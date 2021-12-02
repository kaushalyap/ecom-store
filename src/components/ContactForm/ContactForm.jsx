import PropTypes from 'prop-types';
import React from 'react';

export default function ContactForm() {
  return (
    <form
      id="contact-form"
      method="POST"
      className="md:max-w-md lg:max-w-lg"
      action="https://formspree.io/techstacklk+contactform@gmail.com"
    >
      <label htmlFor="first-name" className="font-bold">
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="Your Name"
          className="pl-4 mt-1 mb-4 w-full h-12 rounded-xl border border-brand"
        />
      </label>

      <label htmlFor="email" className="font-bold">
        <input
          type="email"
          id="email"
          name="_replyto"
          placeholder="Your Email Address"
          className="pl-4 mt-1 mb-4 w-full h-12 rounded-xl border border-brand"
        />
      </label>
      <label htmlFor="message" className="font-bold">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="10"
          className="p-4 mt-1 mb-4 w-full rounded-xl border border-brand"
        />
      </label>
      <input type="text" name="_gotcha" className="hidden" />
      <button
        type="submit"
        className="py-2 px-4 font-bold tracking-wider text-white uppercase bg-brand rounded-xl"
      >
        Send
      </button>
    </form>
  );
}
