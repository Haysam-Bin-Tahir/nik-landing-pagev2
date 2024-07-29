import React from 'react';
import './styles.css'; // Make sure to create and import this CSS file
import { Link } from 'react-router-dom';

const VideWithContent = ({ videoSrc, title, description, link }) => {
  return (
    <div className='video-background-container'>
      <video className='video-background' autoPlay muted loop>
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='content-overlay'>
        <div className='text-content'>
          <h1 className='title'>{title}</h1>
          <p className='description'>{description}</p>
        </div>
        <Link className='button-link' to={link}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default VideWithContent;
