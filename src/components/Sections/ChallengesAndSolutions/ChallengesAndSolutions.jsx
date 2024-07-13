import './styles.css';

export default function ChallengesAndSolutions() {
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
        <img
          className='card__image'
          src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'
          alt='Card'
        />
      </div>
    </div>
  );
}
