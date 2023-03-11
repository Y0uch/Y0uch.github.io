import "./About.css";
import 'font-awesome/css/font-awesome.min.css';

export default function About() {
  return (
    <>
    
    <div class="about-section">

      <div class="about-content">
        <h2>Hi, my name is Youngjun Cho! </h2>
        <p> I am a student designer who is a student studying at the School of The Art Institute of Chicago. </p>
        <p> Some of my likes include: drawing, reading, researching and studying only topics that interest me, and playing video games.
            and some of my dislikes include: drawing, being bored, trying to focus for more than 4 hrs at a time, </p>
      </div>

      <div class="about-pfp">
        {/* <img src="" alt="samplepfp"></img> */}
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
