import myPhoto from "../assets/myPhoto.jpg";
//importing photo and function for about page
export default function About() {
  return (
    <>
      {" "}
      <h1>About</h1>
      <img
        src={myPhoto}
        alt="Jimmy"
        style={{ width: "200px", borderRadius: "50%" }}
      />
      <p>
        Hey, I’m Jimmy — a web developer, problem solver, and founder of Stereo
        Image AV, where I provide audio-visual production and rentals for
        concerts, corporate events, and everything in between.
        <p>
          My journey into tech started with curiosity and a drive to create. I
          now build full-stack web applications using React, TypeScript,
          Node.js, and PostgreSQL. I enjoy crafting clean, functional interfaces
          and building back-end systems that run smoothly and scale well.
        </p>
        I’m especially interested in how AI and automation can simplify
        workflows, enhance user experiences, and make powerful tools more
        accessible.
      </p>
      <p>
        Outside of coding, I have a strong background in music, live sound, and
        DIY projects. I bring the same attention to detail and creativity from
        those fields into my development work. Outside of work, I’m a proud dad,
        guitarist, and gamer. I believe in consistency, curiosity, and building
        things that matter. Thanks for stopping by — I’d love to connect!{" "}
      </p>
    </>
  );
}
