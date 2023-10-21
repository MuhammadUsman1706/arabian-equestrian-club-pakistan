import React from "react";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={classes["hero-section"]}>
      <div className={classes.parent}>
        <div className={classes.text}>
          <h1>Arabian Equestrian Club of Pakistan</h1>
          <h2>Promoting Mammal Interests in Pakistan</h2>
          <p>
            The Arabian Equestrian Club of Pakistan is a prestigious club that
            is devoted to the promotion of equestrian sports in the country.
            Based on horses, the club offers various equestrian activities,
            including horse riding lessons, horse shows, and other related
            events. The club has state-of-the-art facilities, including modern
            stables, indoor and outdoor riding arenas, and a team of experienced
            trainers and instructors. The club has a large collection of Arabian
            horses, known for their beauty, speed, and intelligence. The Arabian
            Equestrian Club of Pakistan is a perfect place for horse lovers and
            enthusiasts, as it offers them a chance to learn about horse care
            and training, as well as participate in various equestrian events
            and competitions.
          </p>
        </div>
        <div className={classes.image}>
          <img
            src="https://static6.depositphotos.com/1007009/578/i/450/depositphotos_5781048-stock-photo-horse-on-a-green-grass.jpg"
            alt="Horse Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
