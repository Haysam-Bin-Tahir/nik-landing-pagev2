import FlipCard from '../../UI/FlipCard/FlipCard';
import './styles.css';

const cards = [
    {
        title: 'Title 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
    {
        title: 'Title 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
    {
        title: 'Title 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
    {
        title: 'Title 4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
    {
        title: 'Title 5',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
    {
        title: 'Title 6',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: './dummy-graphic.jpg'
    },
];

export default function FeatureCards() {
    return (
        <section className='section-feature-cards'>
            <h3 className='section-feature-heading card__heading'>Title</h3>
            <div className='section-feature-cards--container'>
                {cards?.map(({ title, description, imgSrc }, idx) => (
                    // We're using idx as key here because the array is static
                    // In case you want to add dynamic array in future, please
                    // avoid using idx as key and istead use something like uuid
                    // as identifier.
                    <FlipCard key={idx} width='32.7%' cardHeight='23.5rem' title={title} description={description} img={<img src={imgSrc} width="100%" height="160" style={{ objectFit: 'contain' }} />} />
                ))}
            </div>
        </section>
    );
}
