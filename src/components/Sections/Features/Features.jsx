import './styles.css';

const features = [
    {
        title: 'Cutting-Edge Technology',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint in enim inventore eveniet eius, blanditiis aperiam ipsum sunt iure corrupti assumenda delectus accusantium ex exercitationem perferendis! Autem, nam saepe.'
    },
    {
        title: 'Progressive Products and Services',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint in enim inventore eveniet eius, blanditiis aperiam ipsum sunt iure corrupti assumenda delectus accusantium ex exercitationem perferendis! Autem, nam saepe.'
    },
    {
        title: 'Next-Generation Solutions',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint in enim inventore eveniet eius, blanditiis aperiam ipsum sunt iure corrupti assumenda delectus accusantium ex exercitationem perferendis! Autem, nam saepe.'
    },
];

export default function Features() {
    return (
        <div className="features-container mb-1">
            <div className="features">
                {features.map(({title, text}, idx) => (
                    <div className="feature-card" key={idx}>
                        <span className="feature-card-number">{idx + 1}</span>
                        <p className="feature-card-title text-center">{title}</p>
                        <p className='paragraph mt-1 text-center'>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}