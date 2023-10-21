import React, { useState, useEffect } from "react";
import Events from "./LandingElements/Events";
import PrevEvents from "./LandingElements/PrevEvents";
import News from "./LandingElements/News";
import Carousel from "react-material-ui-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import horse from "../../assets/images/horse.png";
import stud1 from "../../assets/images/stud1.png";
import stud2 from "../../assets/images/stud2.png";
import stud3 from "../../assets/images/stud3.png";
import stud4 from "../../assets/images/stud4.png";
import horseCarousel1 from "../../assets/images/horse-carousel-1.jpg";
import horseCarousel2 from "../../assets/images/horse-carousel-2.jpg";
import horseCarousel3 from "../../assets/images/horse-carousel-3.jpg";
import logoMask from "../../assets/images/logo-mask.png";
import classes from "./Landing.module.css";
import { allevents, getstuds } from "../../apis";
import HeroSection from "./LandingElements/HeroSection";
import { Link } from "react-router-dom";

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div className={classes["custom-arrow"]} onClick={() => onClick()}>
      <ArrowForwardIcon />
    </div>
  );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div
      style={{
        right: "40px",
      }}
      className={classes["custom-arrow"]}
      onClick={() => onClick()}
    >
      <ArrowBackIcon />
    </div>
  );
};

const Landing = () => {
  const [STUD_DATA, setstuds] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [UPCOMING_EVENT_DATA, setupcoming] = useState([]);
  const [PREVIOUS_EVENT_DATA, setprevious] = useState([]);

  const fetchEvents = async () => {
    const response = await allevents();
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        setupcoming(res.data.data.upcoming);
        setprevious(res.data.data.previous);
      });
  };

  const fetchStuds = async () => {
    const response = await getstuds();
    response
      .json()
      .then((studs) => ({
        studs: studs,
        status: response.status,
      }))
      .then((res) => {
        setstuds(res.studs.studs);
      });
  };

  useEffect(() => {
    fetchEvents();
    fetchStuds();
  }, []);

  return (
    <div className={classes.landing}>
      <div className={classes["initial-display"]}>
        {window.innerWidth > 767 ? (
          <Carousel indicators={false}>
            <div>
              <div className={classes["carousel-image"]}>
                <img src={horseCarousel1} alt="AECP" />
              </div>
              <div className={classes["initial-text"]}>
                {/* <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div> */}
                <h1>AMERICAN CUP CHAMPIONSHIP</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <button className={classes.btn}>
                  <span className={classes["btn-text"]}>
                    Become a Member <EastIcon sx={{ marginLeft: "5px" }} />
                  </span>
                </button>
                <span className={classes["social-handles"]}>
                  <FacebookIcon />
                  <YouTubeIcon />
                </span>
              </div>
              {/* <div className={classes["initial-image"]}>
               <img src={horse} alt="A beautiful black horse" />
            </div> */}
            </div>
            <div>
              <div className={classes["carousel-image"]}>
                <img src={horseCarousel2} alt="AECP" />
              </div>
              <div className={classes["initial-text"]}>
                {/* <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div> */}
                <h1>AMERICAN CUP CHAMPIONSHIP</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <button className={classes.btn}>
                  <span className={classes["btn-text"]}>
                    Become a Member <EastIcon sx={{ marginLeft: "5px" }} />
                  </span>
                </button>
                <span className={classes["social-handles"]}>
                  <FacebookIcon />
                  <YouTubeIcon />
                </span>
              </div>
              {/* <div className={classes["initial-image"]}>
               <img src={horse} alt="A beautiful black horse" />
            </div> */}
            </div>
            <div>
              <div className={classes["carousel-image"]}>
                <img src={horseCarousel3} alt="AECP" />
              </div>
              <div className={classes["initial-text"]}>
                {/* <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div> */}
                <h1>AMERICAN CUP CHAMPIONSHIP</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <button className={classes.btn}>
                  <span className={classes["btn-text"]}>
                    Become a Member <EastIcon sx={{ marginLeft: "5px" }} />
                  </span>
                </button>
                <span className={classes["social-handles"]}>
                  <FacebookIcon />
                  <YouTubeIcon />
                </span>
              </div>
              {/* <div className={classes["initial-image"]}>
               <img src={horse} alt="A beautiful black horse" />
            </div> */}
            </div>
          </Carousel>
        ) : (
          <div>
            <div className={classes["initial-text"]}>
              {/* <div className={classes["masked-logo"]}>
                    <img src={logoMask} alt="Masked Logo" />
                  </div> */}
              <h1>AMERICAN CUP CHAMPIONSHIP</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <br />
              <button className={classes.btn}>
                <span className={classes["btn-text"]}>
                  Become a Member <EastIcon sx={{ marginLeft: "5px" }} />
                </span>
              </button>
              <span className={classes["social-handles"]}>
                <FacebookIcon />
                <YouTubeIcon />
              </span>
            </div>
            {/* <div className={classes["initial-image"]}>
              <img src={horse} alt="A beautiful black horse" />
            </div> */}
          </div>
        )}
      </div>
      <HeroSection />

      <div className={classes.container}>
        <section className={classes["studs-display"]}>
          <Carousel
            //   centerMode
            //   ssr={true} // means to render carousel on server-side.
            //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
            //   customTransition="all .5"
            //   deviceType={this.props.deviceType}
            //   dotListClass="custom-dot-list-style"
            // showDots={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {STUD_DATA?.length > 0 ? (
              <div className={classes["stud-cards"]}>
                <div>
                  <div className={classes["stud-data-contents"]}>
                    <div className={classes["stud-data-main-heading"]}><h2 className={classes["stud-head"]}>Studs</h2></div>
                    {STUD_DATA.map((stud) => (
                      <p>
                        {/* <span className={classes["stud-data-heading"]}>
                          Name:{" "}
                        </span> */}
                        <span className={classes["stud-data-content"]}>
                          <Link to={`/studs/${stud.friendly_URL}`}>
                            {stud.horse_name} -{" "}
                            {new Date(stud.birth_year).getFullYear()}
                          </Link>
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={classes["stud-data-contents"]}>
                    <div className={classes["stud-data-main-heading"]}><h2 className={classes["stud-head"]}>Events</h2></div>

                    {PREVIOUS_EVENT_DATA.map((event) => (
                      <p>
                        {/* <span className={classes["stud-data-heading"]}>
                          Name:{" "}
                        </span> */}
                        <span className={classes["stud-data-content"]}>
                          <Link to={`/events/${event.id}`}>
                            {event.title} - {event.city}
                          </Link>
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* <div className={classes["stud-cards"]}>
              <div></div>
            </div> */}

            {/* Carousel Template For Reference */}
            {/* <div className={classes["stud-cards"]}>
              <div>
                <div className={classes["stud-data-contents"]}>
                  <p>
                    <img src={stud1} alt={``} />
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Name: </span>
                    <span className={classes["stud-data-content"]}>
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Sire: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Dam: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                </div>
              </div>
            
              <div>
                <div className={classes["stud-data-contents"]}>
                  <p>
                    <img src={stud1} alt={``} />
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Name: </span>
                    <span className={classes["stud-data-content"]}>
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Sire: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Dam: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                </div>
              </div>
            
              <div>
                <div className={classes["stud-data-contents"]}>
                  <p>
                    <img src={stud1} alt={``} />
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Name: </span>
                    <span className={classes["stud-data-content"]}>
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Sire: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                  <p>
                    <span className={classes["stud-data-heading"]}>Dam: </span>
                    <span className={classes["stud-data-content"]}>
                      
                    </span>
                  </p>
                </div>
              </div>
            </div> */}
          </Carousel>
        </section>
        {/* <Events upcoming={UPCOMING_EVENT_DATA} />
        <PrevEvents previous={PREVIOUS_EVENT_DATA} /> */}
        <News />
      </div>
    </div>
  );
};

export default Landing;