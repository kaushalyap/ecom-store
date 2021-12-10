import React from 'react';

export default function ContactForm() {
  return (
    <form
      id="contact-form"
      method="POST"
      className="w-full md:max-w-md lg:max-w-lg xl:max-w-none"
      action="https://formspree.io/techstacklk+contactform@gmail.com"
    >
      <label htmlFor="first-name">
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="Your Name"
          className="pl-4 mt-1 mb-4 w-full h-12 rounded-xl border border-brand xl:pl-6 xl:h-16 xl:rounded-3xl"
        />
      </label>

      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="_replyto"
          placeholder="Your Email Address"
          className="pl-4 mt-1 mb-4 w-full h-12 rounded-xl border border-brand xl:pl-6 xl:h-16 xl:rounded-3xl"
        />
      </label>
      <label htmlFor="message">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={10}
          className="p-4 mt-1 mb-4 w-full rounded-xl border border-brand xl:p-6 xl:rounded-3xl"
        />
      </label>
      <input type="text" name="_gotcha" className="hidden" />
      <button
        type="submit"
        className="py-2 px-3 font-bold tracking-widest text-white bg-brand rounded-xl md:py-3 md:px-4 md:text-lg"
      >
        Send
      </button>
    </form>
  );
}
