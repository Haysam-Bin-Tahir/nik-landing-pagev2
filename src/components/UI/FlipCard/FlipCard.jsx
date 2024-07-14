import { useState } from 'react';
import './styles.css';

export default function FlipCard({
    title = "Title",
    description = "this is description",
    cardHeight = '22rem',
    width = "300px",
    minWidth = "200px",
    img = null,
}) {
    const [focus, setFocus] = useState(false);
    const toggleFocus = () => setFocus(prev => !prev)
    return (
        <div className='card-container' style={{ minWidth: 0, width, minWidth }}>
            <div onClick={toggleFocus} className={`card ${focus ? "focus" : ""}`} style={{ height: cardHeight }}>
                <div className="card__side card__side--front" style={{ height: cardHeight }}>
                    <div className='card__img'>
                        {img}
                    </div>
                    <h4 className="card__heading">
                        {title}
                    </h4>
                </div>
                <div className="card__side card__side--back bg-gradient-to-r from-purple-700 to-pink-700 text-white" style={{ height: cardHeight }}>
                    <div className="card__back-details-box text-transparent">
                        <h4 className="card__heading">
                            {title}
                        </h4>

                        <div className="card__details relative">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}