import myPhoto from "../assets/myPhoto.jpg";

export default function Home() {
  return (
    <>
      <img
        src={myPhoto}
        alt="Jimmy"
        style={{ width: "200px", borderRadius: "50%" }}
      />
      <br />
      <br />
      <h1>Hi, I'm Jimmy.</h1>

      <p>I'm a creative technologist & problem solver.</p>

      <p>
        I specialize in building thoughtful, user-focused solutions through
        modern web technologies.
      </p>

      <p>
        Whether it's front-end interfaces, full-stack applications, or immersive
        audio/visual experiences.
      </p>

      <h2>
        Welcome to my portfolio, take a look around and feel free to reach out!
      </h2>
      <br />
      <br />
    </>
  );
}
//importing photo, above is the content for the home page, I liked a photo on the homepage in addition to the about page since its your first chance to say hello.