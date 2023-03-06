import "./About.css";
import 'font-awesome/css/font-awesome.min.css';

export default function About() {
  return (
    <>
    
    <div class="about-section">

      <div class="about-content">
        <h2>Youngjun Cho</h2>
        <p>Hello! My full name is Youngjun Cho, but you can call me Ryan as well. I am an illustrator and graphic designer who is currently studying at the School of Art Institute of Chicago. I love to read and scavenge the internet for old posters.</p>
      </div>

      <div class="about-pfp">
        <img src="/pepelaugh.jpg" alt="samplepfp"></img>
      </div>

      <div class="about-contact">
        <p><i className="fa fa-solid fa-envelope">&nbsp;&nbsp;followinhimhimm@gmail.com </i></p>
        <p><i className="fa fa-brands fa-linkedin">&nbsp;&nbsp;
        <button type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href='https://www.linkedin.com/in/youngjun-cho-30b792220/';
        }}> Linkedin</button>
          </i>
        </p>
      </div>

    </div>
    </>
  )
}
