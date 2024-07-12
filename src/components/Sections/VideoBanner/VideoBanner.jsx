import './styles.css';
export default function VideoBanner() {
    return (
        <div className="video-banner">
            <video autoPlay loop muted controls={false}>
                <source src="./office.mp4" type="video/mp4"  />
            </video>
        </div>
    )
}