import './styles.css';
import { useState } from 'react';

export default function ChallengesAndSolutions() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    const video = document.getElementById('video');
    video.play();
    video.controls = true;
  };

  return (
    <div className='container'>
      <div className='left-section'>
        <div className='solutions-wrapper'>
          <div className='solutions'>Solutions</div>
          <div className='image-container'>
            <img
              className='image'
              src='https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png'
              alt='Logo'
            />
          </div>
        </div>
        <div className='numbered-section'>
          <div className='circle'></div>
          <div className='numbered-steps'>
            <div className='step'>
              <div className='step-number'>1</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div style={{ minWidth: '18px' }}></div>
              <div className='step-number'>2</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div style={{ minWidth: '28px' }}></div>
              <div className='step-number'>3</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div style={{ minWidth: '32px' }}></div>
              <div className='step-number'>4</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div style={{ minWidth: '28px' }}></div>
              <div className='step-number'>5</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div style={{ minWidth: '20px' }}></div>
              <div className='step-number'>6</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
            <div className='step'>
              <div className='step-number'>7</div>
              <div className='step-text'>
                <div>Text...</div>
              </div>
            </div>
          </div>
        </div>
        <div className='challenges-wrapper'>
          <div className='challenges'>Challenges</div>
        </div>
      </div>
      <div className='right-section'>
        <h3 className='card__heading'>Title</h3>
        <div className='card__video-container'>
          <video
            id='video'
            className='card__video'
            src='https://www.w3schools.com/html/mov_bbb.mp4'
          ></video>
          {!isPlaying && (
            <button className='play-button' onClick={handlePlayButtonClick}>
              &#9658;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
