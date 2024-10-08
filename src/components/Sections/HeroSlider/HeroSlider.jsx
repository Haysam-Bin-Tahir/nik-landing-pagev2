import { useState, useRef, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './styles.css';
import clsx from 'clsx';
import Card from '../../UI/Card/Card';

// Add more objects with src
// to add more images
// in the carousel. For local images,
// store them in public directory.
// Otherwise, simply use the image
// URL in src.
const carouselVideos = [
  {
    src: './slide-1.jpg',
    type: 'video/mp4',
    title: 'Safe and Secure Space',
    text: 'We take pride in providing a safe and inclusive space for all our users. Our verification process ensures that everyone is genuine while respecting individual privacy. You can trust us to provide a secure environment for connecting with others.',
    href: '#',
  },
  {
    src: './slide-2.jpeg',
    title: 'Title 2',
    text: 'Lorem Ipsum dolor sit amet',
    href: '#',
  },
  {
    src: './slide-3.jpg',
    title: 'Title 3',
    text: 'Lorem Ipsum dolor sit amet',
    href: '#',
  },
];

const backgroundPlayback = true;

// Carousel interval in ms
const interval = 2000;

export default function HeroSlider() {
  const [currSlide, setCurrSlide] = useState(0);

  const next = () => {
    setCurrSlide((prevSlide) => (prevSlide + 1) % carouselVideos.length);
  };

  const prev = () => {
    setCurrSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselVideos.length) % carouselVideos.length
    );
  };

  const handleSlideChanged = (slideIdx) => {
    setCurrSlide(slideIdx);
  };

  return (
    <div id='product' className='section-video-slider'>
      <div className='carousel-container'>
        <div className='styled-carousel'>
          <button className='control-arrow control-arrow-left' onClick={prev}>
            <svg
              fill='#777777'
              height='14px'
              width='14px'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 330 330'
              xml:space='preserve'
            >
              <path
                id='XMLID_222_'
                d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z'
              />
            </svg>
          </button>
          <div className='media-content'>
            <Carousel
              selectedItem={currSlide}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={interval}
              stopOnHover={true}
              onChange={handleSlideChanged}
            >
              {carouselVideos.map((video, idx) => (
                <Card key={idx} {...video} />
              ))}
            </Carousel>
            {/* <p className={clsx('text-container video-text text-center mt-1', { 'fade-out': fadeOut })}>{currTitle}</p>
                        <p className={clsx('text-container video-text text-center mt-1 paragraph-block', { 'fade-out' : fadeOut})}>{currText}</p> */}
            <div className='indicators'>
              {carouselVideos.map((_, idx) => (
                <div
                  className={clsx('indicator', { active: currSlide === idx })}
                  onClick={() => setCurrSlide(idx)}
                ></div>
              ))}
            </div>
          </div>
          <button className='control-arrow control-arrow-right' onClick={next}>
            <svg
              fill='#777777'
              height='14px'
              width='14px'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 330 330'
              xml:space='preserve'
            >
              <path
                id='XMLID_222_'
                d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='text-content'>
        <p className='section-title mb-2'>Title 2 lines</p>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
          iusto quaerat similique, alias, earum neque suscipit numquam ratione
          error ea sequi omnis possimus soluta placeat quam! Esse quasi animi
          fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Maxime, iusto quaerat similique, alias, earum neque suscipit numquam
          ratione error ea sequi omnis possimus soluta placeat quam! Esse quasi
          animi fugiat.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolores
          magni placeat quas doloremque. Soluta quas quod praesentium aut
          voluptatem cupiditate qui! Sit voluptates, iusto qui quos deleniti
          excepturi voluptas. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsa dolores magni placeat quas doloremque. Soluta
          quas quod praesentium aut voluptatem cupiditate qui! Sit voluptates,
          iusto qui quos deleniti excepturi voluptas.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, harum
          repellat nam provident eaque libero obcaecati reiciendis pariatur
          distinctio cum, quae corporis rem ipsa perspiciatis! Corrupti
          reprehenderit expedita at quis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim, harum repellat nam provident eaque libero
          obcaecati reiciendis pariatur distinctio cum, quae corporis rem ipsa
          perspiciatis! Corrupti reprehenderit expedita at quis?
        </p>
      </div>
    </div>
  );
}
