import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import './styles.css';

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
  {
    src: './slide-2.jpeg',
    title: 'Title 2',
    text: 'Lorem Ipsum dolor sit amet',
    href: '#',
  },
  {
    src: './slide-1.jpg',
    type: 'video/mp4',
    title: 'Safe and Secure Space',
    text: 'We take pride in providing a safe and inclusive space for all our users. Our verification process ensures that everyone is genuine while respecting individual privacy. You can trust us to provide a secure environment for connecting with others.',
    href: '#',
  },
  {
    src: './slide-3.jpg',
    title: 'Title 3',
    text: 'Lorem Ipsum dolor sit amet',
    href: '#',
  },
];

const StackedCards = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMouseEnter = (index) => {
    if (index !== expandedCardIndex) {
      setIsTransitioning(true);
      setExpandedCardIndex(index);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [expandedCardIndex, isTransitioning]);

  return (
    <div id='test'>
      <h3 className='section-info-heading card__heading'>Title</h3>
      <div className='stacked-card-container'>
        {carouselVideos.map((video, idx) => (
          <div
            key={idx}
            className={`stacked-card ${
              expandedCardIndex === idx ? 'expanded' : ''
            }`}
            style={{
              border: expandedCardIndex === idx ? '6px solid #000' : '',
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
          >
            <Card
              {...video}
              full={expandedCardIndex !== idx}
              hideDescription={isTransitioning && expandedCardIndex === idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
