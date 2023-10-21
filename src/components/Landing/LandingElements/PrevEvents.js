import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "./PrevEvents.module.css";
import { Link, useNavigate } from "react-router-dom";

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

const PrevEvents = (events) => {
  const [EVENT_DATA] = useState(events);

  const navigate = useNavigate();

  const eventDetailNavigateHandler = (id) => {
    navigate(`/events/${id}`);
  };

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
  return (
    <section className={classes.events}>
      <h1 className={classes["main-heading"]}>Previous Events</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      {/* <div className={classes["event-cards"]}> */}
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
        {/* {events?.previous?.length > 0 ? 
          <div className={classes["event-cards"]}>
            {events?.previous.map((event) => (
              <div className={classes["event-card"]}>
              
                  <div className={classes["event-header"]}>
                    <div>
                      <p className={classes.date}>{new Date(event.start_date).getDate()}th</p>
                      <p className={classes.month}>{(new Date(event.start_date)).toLocaleString('default', { month: 'long' })} {new Date(event.start_date).getFullYear()}</p>
                    </div>
                    <span className={classes.vl}></span>
                    <h2>{event.title}</h2>
                  </div>
                  <div className={classes["event-details"]}>
                    <p>
                      <span className={classes["event-details-heading"]}>
                        Venue:{" "}
                      </span>
                      <span className={classes["event-details-text"]}>
                        {event.venue}
                      </span>
                    </p>
                    <p>
                      <span className={classes["event-details-heading"]}>
                        Judge(s):{" "}
                      </span>
                      <span className={classes["event-details-text"]}>
                        {event.judges}
                      </span>
                    </p>
                  </div>
                  <div className={classes["result"]}>
                    <span>View Result</span>
                  </div>
                </div>
              ))}
            </div>
            :
            <div className={classes["event-cards"]}>
            <div className={classes["event-card"]}>
              <div className={classes["event-header"]}>
                <h2>NO PREVIOUS EVENTS TO SHOW</h2>
              </div>
            </div>
            </div>
              } */}
        {events?.previous?.length > 0 ? (
          events?.previous.map((event) => (
            <div className={classes["event-card"]}>
              <div className={classes["event-header"]}>
                <div>
                  <p className={classes.date}>
                    {new Date(event.start_date).getDate()}th
                  </p>
                  <p className={classes.month}>
                    {new Date(event.start_date).toLocaleString("default", {
                      month: "long",
                    })}{" "}
                    {new Date(event.start_date).getFullYear()}
                  </p>
                </div>
                <span className={classes.vl}></span>
                <h2>{event.title}</h2>
              </div>
              <div className={classes["event-details"]}>
                <p>
                  <span className={classes["event-details-heading"]}>
                    Venue:{" "}
                  </span>
                  <span className={classes["event-details-text"]}>
                    {event.venue}
                  </span>
                </p>
                <p>
                  <span className={classes["event-details-heading"]}>
                    Judge:{" "}
                  </span>
                  <span className={classes["event-details-text"]}>
                    {event.judges}
                  </span>
                </p>
              </div>
              <div
                onClick={() => eventDetailNavigateHandler(event.id)}
                className={classes["result"]}
              >
                <span>View Result</span>
              </div>
            </div>
          ))
        ) : (
          <div className={classes["event-card"]}>
            <div className={classes["event-header"]}>
              <h2>NO PREVIOUS EVENTS TO SHOW</h2>
            </div>
          </div>
        )}
      </Carousel>
      {/* </div> */}
      <Link to={"/events"} style={{ textDecoration: "none" }}>
        <button className={classes.btn}>
          <span className={classes["btn-text"]}>
            See All Events <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default PrevEvents;
