import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import Footer from "../components/Footer";

const BeerList = () => {
  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeerData(data))
      .catch((error) => console.error("store data fetching error:", error));
  }, []);

  console.log({ beerData });
  //
  return (
    <>
      <section className="beer-list">
        {beerData ? (
          beerData.map((item, index) => (
            <div key={index}>
              <BeerCard
                img_url={item.image_url}
                name={item.name}
                tagline={item.tagline}
                id={item._id}
              />
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default BeerList;
