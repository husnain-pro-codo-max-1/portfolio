// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import meter1 from "../assets/img/Frame 63.png"
import meter2 from "../assets/img/Frame 60.png"
import meter3 from "../assets/img/Frame 61.png"
import meter4 from "../assets/img/Frame 62.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Inchuding Programing languages ,Framworks , Database , Front-end and Back-End tool and API<br></br>And also technologies Stack</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Front End Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Tailwind || Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React MUI</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C# || ASP.Net</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
