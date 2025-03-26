import myPhoto from "../assets/Resume.png";

export default function Resume() {
  return (
    <>
      <h2>Resume</h2>

      <a href={myPhoto} target="_blank" rel="noopener noreferrer">
        <img
          src={myPhoto}
          alt="Jimmy Kotter Resume"
          style={{ width: "500px", height: "auto" }}
        />
      </a>

      <br></br>
      <a href={myPhoto} download="Jimmy_Kotter_Resume.png">
        Download Resume
      </a>
    </>
  );
}

//image of resume, link to download.