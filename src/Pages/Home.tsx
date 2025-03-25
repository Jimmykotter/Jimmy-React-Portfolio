import myPhoto from '../assets/myPhoto.jpg';

export default function Home(){

    return <>
    <img src={myPhoto} alt="Jimmy" style={{ width: '200px', borderRadius: '50%' }} />
    <h1>Hi, I'm Jimmy.</h1>
        
    <p>
    I'm a creative technologist & problem solver I specialize in building thoughtful, user-focused solutions through modern web technologies. Whether it's front-end interfaces, full-stack applications, or immersive audio/visual experiences.
    </p>
    <p>
      Welcome to my portfolio, take a look around and feel free to reach out!
    </p>
    </>
}

