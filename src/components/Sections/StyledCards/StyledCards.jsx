import StyledCard from '../..//UI/StyledCard/StyledCard';

const cardData = [
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Friendship',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Relationship',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Travel Companions',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Sports League',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Companion Living',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Volunteerism',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Social Club',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Health Club',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Wealth Club',
  },
  {
    image:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    title: 'Professional Network',
  },
];

const StyledCards = () => {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {cardData.map((card, index) => (
        <StyledCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default StyledCards;
