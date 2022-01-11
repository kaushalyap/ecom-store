/* eslint-disable tailwindcss/no-custom-classname */
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';
import './styles.css';

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="xl:hidden">
      <div className="relative xl:hidden">
        <div ref={sliderRef} className="md:h-96 keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center py-2">
          {[
            // @ts-ignore
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              type="button"
              aria-label="slider dot"
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`dot${currentSlide === idx ? ' active' : ' '}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
