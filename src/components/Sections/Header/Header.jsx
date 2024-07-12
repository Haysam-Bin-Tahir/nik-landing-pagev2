import './styles.css';

export default function Header(props) {
    return (
        <header id='home' className="header">
            <video autoPlay loop muted controls={false}>
                <source src="./portrait2.mp4" type="video/mp4"  />
            </video>
            {/* <img src="./hero.jpg" alt="hero image" /> */}
            <div className="overlay">
                <div className="overlay-text-block">
                    <p className='title'>Title 1 Liner</p>
                    <p>sample</p>
                </div>
            </div>
            <div className="wave-svg">


            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1018.9 88.1" enableBackground="new 0 0 1018.9 88.1" xmlSpace="preserve">
                <g id="Layer_1">
                </g>
                <g id="Layer_2">
                    <path fill="#FFFFFF" d="M1018.9,81.5c-163.5,1.3-344.5-16.2-502.5-41C345.4,13.6,148.3-4.2,0,0.9v82.9l1018.9,4.3V81.5z"/>
                </g>
                <g id="Layer_3">
                </g>
            </svg>
            </div>
        </header>
    )
}