import './styles.css';

const Card = ({ image, title }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image' />
      <div className='card-content'>
        <div className='card-title-container'>
          <h2 className='card-title'>{title}</h2>
        </div>
        {/* <div className='triangle'></div> */}
      </div>
    </div>
  );
};

export default Card;
