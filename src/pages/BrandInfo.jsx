import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./BrandInfo.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import ArticleCard from "../components/ArticleCard";

function BrandInfo() {
  const articles = [
    {
      id: 1,
      title: "TENNIS",
      articleContent:
        "For over 40 years, Rolex has maintained a special relationship with tennis, a globally recognized sport whose history continues to be written with new challenges, stories, and prominent figures. Rolex and tennis share a series of fundamental values: the perpetual pursuit of excellence, the desire for technical precision, unwavering effort, respect for tradition, and the surpassing of personal limits.",
      cardImg: "../src/assets/Novak.jpeg",
      video: "../src/assets/RolexAndTennis.mp4",
      modalPic: "../src/assets/Rolex.svg",
      modalTitle: "An illustrious collaboration with tennis",
      modalContent:
        "Rolex and tennis joined forces for the first time when the brand partnered with The Championships, Wimbledon in 1978, a time when tennis was undergoing a powerful transformation. The brand gradually forged connections with all the elite competitions of this sport. Currently, Rolex sponsors the four Grand Slam® tournaments, the major events in men's and women's tennis, and the most important team competitions in the world.",
    },
    {
      id: 2,
      title: "ROLEX AND CINEMA",
      articleContent:
        "Rolex is a Proud Sponsor of the Oscars®, whose ceremony takes place at the Dolby® Theatre in Hollywood. In 2017, Rolex partnered with the ultimate authority in the film industry, the Academy of Motion Picture Arts and Sciences. They were united by a shared belief in excellence, in nurturing talent, in fostering progress, and in the importance of transmitting knowledge to future generations.",
      cardImg: "../src/assets/cinemaRolex.jpeg",
      video: "../src/assets/RolexAndCinema.mp4",
      modalPic: "../src/assets/Rolex.svg",
      modalTitle: "A tribute to cinema",
      modalContent:
        "Cinematic art comes to life when the creator's initial vision meets the necessary savoir-faire to bring it to the screen. Behind great masterpieces, this alchemy influences our behavior and lives, shaping global culture. With the Academy of Motion Picture Arts and Sciences, Rolex celebrates technical and artistic excellence and helps perpetuate knowledge. The brand sponsors the Oscars® ceremonies and the Governors Awards, and supports the Academy Museum of Motion Pictures in Los Angeles. Through its Testimonials and the Rolex Artistic Initiative for Mentors and Protégés, Rolex accompanies living legends and emerging talents in film production, encouraging the transmission of cinematic art.",
    },
    {
      id: 3,
      title: "PERPETUAL PLANET",
      articleContent:
        "They are explorers, scientists, entrepreneurs, or citizens committed to the common good. They explore our world to study and protect ecosystems. They take action to address current challenges. They inspire future generations to ensure the future of our planet. Rolex provides them with support through its Perpetual Planet Initiative.",
      cardImg: "../src/assets/perpetualPlanet.jpeg",
      video: "../src/assets/perpetualPlanet.mp4",
      modalPic: "../src/assets/Rolex.svg",
      modalTitle: "Perpetual Planet Initiative",
      modalContent:
        "The Perpetual Planet Initiative by Rolex is a program dedicated to advancing scientific knowledge, promoting environmental conservation, and addressing the challenges facing our planet. It supports individuals and organizations who are actively engaged in exploring and protecting the Earth's ecosystems. Through research, collaboration, and innovative projects, the initiative aims to contribute to a sustainable future by fostering a deeper understanding of our planet's interconnectedness and promoting solutions to environmental issues. Rolex's Perpetual Planet Initiative serves as a platform to inspire action, raise awareness, and drive positive change for the benefit of our planet and future generations.",
    },
  ];

  return (
    <>
      <div className="container-banner-brand  container-fluid">
        <video autoPlay loop muted className="banner-video-brand">
          <source src="src/assets/rolexExcellence.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container-banner-project-brand">
        <div className="about-project-brightness-brand">
          <div className="about-project-content-brand">
            <img
              className="about-project-title-brand"
              src="../src/assets/Rolex.svg"
              alt="brand-logo"
            ></img>
            <Link className="btn" to="">
              <div className="btn-content"></div>
            </Link>
          </div>
        </div>
      </div>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/submarinerBlue.jpeg"
            alt="First slide Submariner"
          />
          <Carousel.Caption>
            <h3>Submariner</h3>
            <p>
              The Rolex Submariner is a professional-grade diving watch known
              for its exceptional water resistance, precise timekeeping, and
              robust construction. It features a unidirectional rotating bezel
              with a graduated scale that allows divers to accurately measure
              their dive time. The Submariner's dial is highly legible, with
              luminescent markers and hands for optimal visibility in dark
              environments. It is crafted from high-quality materials such as
              stainless steel or precious metals, and it typically includes
              Rolex's self-winding mechanical movement.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Daytona-lead.jpg"
            alt="Second slide Daytona"
          />

          <Carousel.Caption>
            <h3>Daytona</h3>
            <p>
              The Rolex Daytona is a highly coveted and iconic chronograph watch
              known for its precision, functionality, and timeless design. It
              features a tachymeter bezel that enables drivers to measure
              average speeds, making it particularly popular among motorsport
              enthusiasts. The Daytona boasts a chronograph function with
              sub-dials for timing intervals, as well as a highly legible dial
              with luminescent markers and hands. It is crafted from premium
              materials such as stainless steel or precious metals, and it is
              powered by Rolex's self-winding mechanical movement.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/oysterPerpetualBlue.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Oyster-Perpetual</h3>
            <p>
              The Rolex Oyster Perpetual is the flagship collection of Rolex
              watches, renowned for its timeless design, precision, and
              durability. The Oyster Perpetual models are characterized by their
              classic and elegant aesthetics, making them suitable for both
              formal and casual occasions. They feature a simple yet
              sophisticated dial design with the iconic Rolex crown at 12
              o'clock. The Oyster Perpetual watches are crafted from
              high-quality materials, such as stainless steel or precious
              metals, and they house Rolex's self-winding mechanical movements,
              providing accurate timekeeping.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/gmtMaster.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>GMT-Master II</h3>
            <p>
              The Rolex GMT-Master II is a prestigious and highly sought-after
              watch known for its dual time zone functionality, robust
              construction, and timeless design. It is specifically designed for
              professional aviators and travelers who frequently cross multiple
              time zones. The GMT-Master II features a rotatable 24-hour bezel
              and an additional hand on the dial, allowing the wearer to track
              time in two different time zones simultaneously. It is crafted
              from premium materials, such as stainless steel or precious
              metals, and it incorporates Rolex's self-winding mechanical
              movement for reliable and precise timekeeping.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/dayDate.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Day-Date</h3>
            <p>
              The Rolex Day-Date, often referred to as the "President," is a
              prestigious and luxurious watch known for its distinctive design,
              prominent day and date display, and association with influential
              leaders and dignitaries. The Day-Date stands out for its iconic
              fluted bezel, opulent materials, and the presence of both the day
              of the week and the date displayed on the dial. It is available in
              a variety of precious metals, including 18k yellow gold, white
              gold, Everose gold, and platinum, showcasing Rolex's commitment to
              exceptional craftsmanship and elegance. The Day-Date houses a
              self-winding mechanical movement, providing accurate timekeeping
              and reliability.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/pearlmaster.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Pearlmaster</h3>
            <p>
              The Rolex Pearlmaster is a prestigious and luxurious watch
              collection known for its exquisite design, exceptional
              craftsmanship, and the use of precious materials and gemstones. It
              is specifically designed for those seeking a timepiece that
              combines elegance, sophistication, and high-end jewelry
              craftsmanship. The Pearlmaster models feature a unique and
              intricately designed bracelet, often adorned with diamonds or
              other precious gemstones. The watches are available in a range of
              precious metals such as 18k yellow, white, or Everose gold, and
              are often accompanied by beautifully decorated dials. The Rolex
              Pearlmaster is a true expression of opulence and represents the
              pinnacle of Rolex's artistry.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <h2 className="news-articles">News Articles</h2>
        <div className="card-container-brand">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandInfo;
