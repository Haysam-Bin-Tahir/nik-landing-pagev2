import './styles.css';

const leadershipCards = [
    {
        img: './headshot1.jpg',
        altText: 'First Person Image',
        name: 'Name',
        title: 'Title'
    },
    {
        img: './headshot2.jpg',
        altText: 'Second Person Image',
        name: 'Name',
        title: 'Title'
    }
];

export default function Leadership() {
    return (
        <div id='leadership' className="section-leadership mt-2">
            <p className="section-title mb-1 text-center">Title</p>
            <p className="paragraph text-center mb-1">1 line text</p>
            <div className="leadership-cards">
                {leadershipCards.map(({img, altText, name, title}, idx) => (
                    <div key={idx} className="leadership-card">
                        <div className="card-image">
                            <img src={img} alt={altText} />
                        </div>
                        <div className="card-content text-center">
                            <p className="card-name">{name}</p>
                            <p className="card-title">{title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}