import './styles.css';

export default function SceneText() {
    return (
        <section className="scene-container">
            <div className="scene">
                <video autoPlay loop muted controls={false}>
                    <source src="./scene.mp4" type="video/mp4"  />
                </video>
            </div>
            <div className="scene scene-content">
                <h3 className='scene-title'>Title</h3>
                <p className='scene-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione cupiditate odit, et ducimus reiciendis quibusdam? Est reprehenderit, natus ea, laborum eos doloribus nam sapiente accusamus tempore quaerat totam eligendi?</p>
            </div>
        </section>
    );
}