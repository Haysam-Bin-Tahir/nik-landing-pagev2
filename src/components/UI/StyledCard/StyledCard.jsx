import './styles.css';

const StyledCard = ({ image, title }) => {
  return (
    <div className='styled-card'>
      <img src={image} alt={title} className='styled-card-image' />
      <div className='styled-card-content'>
        <div className='styled-card-title-container'>
          <h2 className='styled-card-title'>{title}</h2>
        </div>
        {/* <div className='triangle'></div> */}
      </div>
    </div>
  );
};

export default StyledCard;
