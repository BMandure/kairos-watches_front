import "./BrandInfo.css";
{
  /*Link in react-router-dom*/
}
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CollectionCard from "../components/CollectionCard";

function BrandInfo() {
  const params = useParams();

  const data = {
    rolex: {
      logo: "../src/assets/Rolex.svg",
      video: "../src/assets/rolexExcellence.mp4",
      articles: [
        {
          id: 1,
          title: "TENNIS",
          content:
            "For over 40 years, Rolex has maintained a special relationship with tennis, a globally recognized sport whose history continues to be written with new challenges, stories, and prominent figures. Rolex and tennis share a series of fundamental values: the perpetual pursuit of excellence, the desire for technical precision, unwavering effort, respect for tradition, and the surpassing of personal limits.",
          cardImg: "../src/assets/Novak.jpeg",
          video: "../src/assets/RolexAndTennis.mp4",
          modalPic: "../src/assets/Rolex.svg",
          modalTitle: "An illustrious collaboration with tennis",
        },
        {
          id: 2,
          title: "ROLEX AND CINEMA",
          content:
            "Rolex is a Proud Sponsor of the Oscars®, whose ceremony takes place at the Dolby® Theatre in Hollywood. In 2017, Rolex partnered with the ultimate authority in the film industry, the Academy of Motion Picture Arts and Sciences. They were united by a shared belief in excellence, in nurturing talent, in fostering progress, and in the importance of transmitting knowledge to future generations.",
          cardImg: "../src/assets/cinemaRolex.jpeg",
          video: "../src/assets/RolexAndCinema.mp4",
          modalPic: "../src/assets/Rolex.svg",
          modalTitle: "A tribute to cinema",
        },
        {
          id: 3,
          title: "PERPETUAL PLANET",
          content:
            "They are explorers, scientists, entrepreneurs, or citizens committed to the common good. They explore our world to study and protect ecosystems. They take action to address current challenges. They inspire future generations to ensure the future of our planet. Rolex provides them with support through its Perpetual Planet Initiative.",
          cardImg: "../src/assets/perpetualPlanet.jpeg",
          video: "../src/assets/perpetualPlanet.mp4",
          modalPic: "../src/assets/Rolex.svg",
          modalTitle: "Perpetual Planet Initiative",
        },
      ],
      collections: [
        {
          image: "../src/assets/submarinerBlue.jpeg",
          name: "Submariner",
          description:
            "The Rolex Submariner is a professional-grade diving watch knownfor its exceptional water resistance, precise timekeeping, androbust construction. It features a unidirectional rotating bezelwith a graduated scale that allows divers to accurately measuretheir dive time. The Submariner's dial is highly legible, withluminescent markers and hands for optimal visibility in darkenvironments. It is crafted from high-quality materials such asstainless steel or precious metals, and it typically includesRolex's self-winding mechanical movement.",
        },
        {
          image: "../src/assets/Daytona-lead.jpg",
          name: "Daytona",
          description:
            "The Rolex Daytona is a highly coveted and iconic chronograph watch known for its precision, functionality, and timeless design. It features a tachymeter bezel that enables drivers to measure average speeds, making it particularly popular among motorsport enthusiasts. The Daytona boasts a chronograph function with sub-dials for timing intervals, as well as a highly legible dial with luminescent markers and hands. It is crafted from premium materials such as stainless steel or precious metals, and it is powered by Rolex's self-winding mechanical movement.",
        },
        {
          image: "../src/assets/oysterPerpetualBlue.jpeg",
          name: "Oyster-Perpetual",
          description:
            "The Rolex Oyster Perpetual is the flagship collection of Rolex watches, renowned for its timeless design, precision, and durability. The Oyster Perpetual models are characterized by their classic and elegant aesthetics, making them suitable for both formal and casual occasions. They feature a simple yet sophisticated dial design with the iconic Rolex crown at 12 o'clock. The Oyster Perpetual watches are crafted from high-quality materials, such as stainless steel or precious metals, and they house Rolex's self-winding mechanical movements, providing accurate timekeeping.",
        },
        {
          image: "../src/assets/gmtMaster.jpeg",
          name: "GMT-Master II",
          description:
            "The Rolex GMT-Master II is a prestigious and highly sought-after watch known for its dual time zone functionality, robust construction, and timeless design. It is specifically designed for professional aviators and travelers who frequently cross multiple time zones. The GMT-Master II features a rotatable 24-hour bezel  and an additional hand on the dial, allowing the wearer to track time in two different time zones simultaneously. It is crafted from premium materials, such as stainless steel or precious metals, and it incorporates Rolex's self-winding mechanical movement for reliable and precise timekeeping.",
        },
        {
          image: "../src/assets/dayDate.jpg",
          name: "Day-Date",
          description:
            "The Rolex GMT-Master II is a prestigious and highly sought-after watch known for its dual time zone functionality, robust construction, and timeless design. It is specifically designed for professional aviators and travelers who frequently cross multiple time zones. The GMT-Master II features a rotatable 24-hour bezel  and an additional hand on the dial, allowing the wearer to track time in two different time zones simultaneously. It is crafted from premium materials, such as stainless steel or precious metals, and it incorporates Rolex's self-winding mechanical movement for reliable and precise timekeeping.",
        },
        {
          image: "../src/assets/pearlmaster.jpg",
          name: "Pearlmaster",
          description:
            "The Rolex Pearlmaster is a prestigious and luxurious watch collection known for its exquisite design, exceptional craftsmanship, and the use of precious materials and gemstones. It is specifically designed for those seeking a timepiece that combines elegance, sophistication, and high-end jewelry craftsmanship. The Pearlmaster models feature a unique and intricately designed bracelet, often adorned with diamonds or other precious gemstones. The watches are available in a range of precious metals such as 18k yellow, white, or Everose gold, and are often accompanied by beautifully decorated dials. The Rolex Pearlmaster is a true expression of opulence and represents the pinnacle of Rolex's artistry.",
        },
      ],
    },
    "patek-phillipe": {},
    omega: {},
    victorinox: {},
  };

  const info = data[params.brand];

  return (
    <div className="brand-info-container">
      <div className="background-logo-collections">
        <div className="brand-info-logo-container">
          <img
            className="brand-info-logo"
            src={info.logo}
            alt="brand-logo"
          ></img>
        </div>
        <h2 className="brand-info-subtitle">COLLECTIONS</h2>
      </div>
      <div className="collection-container-gap d-flex flex-column">
        {info.collections.map((collection, i) => (
          <CollectionCard
            key={i}
            name={collection.name}
            img={collection.image}
            description={collection.description}
          />
        ))}
      </div>

      <div>
        <h2 className="brand-info-subtitle">NEWS</h2>
        <div className="brand-info-cards d-flex">
          {info.articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandInfo;
