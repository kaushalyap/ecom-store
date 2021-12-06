/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function Carousel() {
  const animation = { duration: 50000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Link to="/why-us#free-delivery">
            <StaticImage
              className="hidden md:block"
              src="../../images/Slide Free Delivery.webp"
              placeholder="blurred"
              alt="free delivery for every item"
            />
            <StaticImage
              className="md:hidden"
              src="../../images/Slide Free Delivery Mobile.webp"
              placeholder="blurred"
              alt="free delivery for every item"
            />
          </Link>
        </div>
        <div className="keen-slider__slide">
          <Link to="/why-us#competitive-pricing">
            <StaticImage
              className="hidden md:block"
              src="../../images/Slide Competitive Pricing.webp"
              alt="competitive pricing, no lowest price marketing lies"
              placeholder="blurred"
            />
            <StaticImage
              className="md:hidden"
              src="../../images/Slide Competitive Pricing Mobile.webp"
              alt="competitive pricing, no lowest price marketing lies"
              placeholder="blurred"
            />
          </Link>
        </div>
        <div className="keen-slider__slide">
          <Link to="/why-us#help-your-own">
            <StaticImage
              className="hidden md:block"
              src="../../images/Slide Help Your Own.webp"
              alt="help your own instead of instead of draining profits outside of the country"
              placeholder="blurred"
            />
            <StaticImage
              className="md:hidden"
              src="../../images/Slide Help Your Own Mobile.webp"
              alt="help your own instead of instead of draining profits outside of the country"
              placeholder="blurred"
            />
          </Link>
        </div>
        <div className="keen-slider__slide">
          <Link to="/why-us#honest-customer-support">
            <StaticImage
              className="hidden md:block"
              src="../../images/Slide Honest Customer Support.webp"
              alt="honest customer support, we are customer happiness driven"
              placeholder="blurred"
            />
            <StaticImage
              className="md:hidden"
              src="../../images/Slide Honest Customer Support Mobile.webp"
              alt="honest customer support, we are customer happiness driven"
              placeholder="blurred"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
