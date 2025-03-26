// import { Link } from "react-router-dom";
import myPhoto from "../assets/Resume.png";


export default function Resume() {
    return <><h1>Resume</h1>

    <a href={myPhoto} target="_blank" rel="noopener noreferrer">
        <img src={myPhoto} alt="Jimmy Kotter Resume" style={{ width: '500px', height: 'auto' }} />
    </a>
</>
}

