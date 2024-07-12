import './styles.css';

export default function Mission() {
    return (
        <div id='our-mission' className="section-mission">
            <div className="section-graphic">
                <video autoPlay loop muted controls={false}>
                    <source src="./office.mp4" type="video/mp4"  />
                </video>
            </div>
            <div className="section-content">
                <div className="section-content-text">
                    <p className='section-title text-center mb-1'>Our Mission</p>
                    <p className='paragraph text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis aliquam quas eos dolorem cum ipsam quibusdam adipisci similique sunt numquam, optio assumenda necessitatibus impedit ut laboriosam officiis officia id?</p>
                </div>
                <div className="img-container">
                    <img src='./wave1.svg' />
                </div>
            </div>
        </div>
    )
}