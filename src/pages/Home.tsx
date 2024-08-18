import '../styles/Home.css'
import videoFile from '../assets/EMVideo.mp4';

function Home(): JSX.Element {
    return (
     <div className='video-container'>
        <video autoPlay loop muted playsInline className='background-video'>
            <source src={videoFile} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='home-content'>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    </div> 
    )
}

export default Home