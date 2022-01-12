import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import categories from '../../constants/ProductCategories';
import FollowUs from '../FollowUs/FollowUs';

export default function Footer() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <footer className="p-6 bg-blue-50 md:p-10">
      <div className="container mx-auto md:flex md:flex-wrap lg:flex lg:flex-nowrap">
        <div
          id="footer-column-1"
          className="py-5 text-gray-500 md:pb-8 md:w-1/2 md:text-left lg:mr-14 lg:w-3/12 xl:mr-0 xl:w-1/4"
        >
          <Link to="/">
            <StaticImage
              src="../../images/logos/logo-name-below.svg"
              className="w-52 md:mx-0"
              alt="techstack.lk logo"
              loading="eager"
              placeholder="tracedSVG"
            />
          </Link>
          <p className="pt-5 tracking-wide text-gray-600 md:mx-0">
            All your tech gear satisfied and
            <br />
            freely delivered to your door step.
          </p>
        </div>
        <div
          id="footer-column-2"
          className="py-5 border-t border-gray-300 border-solid md:text-left md:border-0 lg:w-3/12 xl:w-1/4"
        >
          <h2 className="mb-3 font-headline font-medium tracking-wider text-gray-800 uppercase">
            Product Categories
          </h2>
          <nav className="list-none text-gray-600">
            <ul>
              {categories.map((category) => (
                <li className="py-1">
                  <Link to={category.path} className="tracking-wide">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          id="footer-column-3"
          className="py-5 border-t border-gray-300 border-solid md:pt-8 md:pb-0 md:w-1/2 md:text-left lg:pt-5 lg:w-3/12 lg:border-0 xl:w-1/4"
        >
          <h2 className="mb-3 font-headline font-medium tracking-wider text-gray-800 uppercase">
            Help & Support
          </h2>
          <nav className="list-none text-gray-600">
            <ul className="tracking-wide">
              <li className="py-1">
                <Link to="/company-orders/">Company Orders</Link>
              </li>
              <li className="py-1">
                <Link to="/faq/">FAQ</Link>
              </li>
              <li className="py-1">
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="footer-column-4"
          className="py-5 border-t border-gray-300 border-solid md:flex-1 md:pt-8 md:w-1/4 md:text-left lg:pt-5 lg:w-3/12 lg:border-0 xl:w-1/4"
        >
          <h2 className="mb-3 font-headline font-medium tracking-wider text-gray-800 uppercase">
            Company
          </h2>
          <nav className="list-none text-gray-600">
            <ul className="tracking-wide">
              <li className="py-1">
                <Link to="/about#why-us/">Why Us ?</Link>
              </li>
              <li className="py-1">
                <Link to="/about/">About</Link>
              </li>
              <li className="py-1 mb-5 lg:mb-5">
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </nav>
          <p className="mb-3 text-sm tracking-wider text-gray-600 uppercase md:tracking-wider lg:block lg:text-sm">
            Follow Us On
          </p>
          <FollowUs classes="lg:flex lg:justify-start" />
        </div>
      </div>
      <div className="pt-5 text-sm text-gray-600 border-t border-gray-300 border-solid">
        <div className="tracking-wider md:flex md:justify-between">
          <p>{`©  ${new Date().getFullYear()} TechStack Holdings, (Pvt) Ltd.`}</p>
          <p className="mt-2 md:mt-0">
            <Link to="/terms/" className="mr-2 md:mr-3 lg:mr-4">
              Terms
            </Link>
            <Link to="/refund-policy" className="mr-2 md:mr-3 lg:mr-4">
              Refund Policy
            </Link>
            <Link to="/privacy-policy/">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
