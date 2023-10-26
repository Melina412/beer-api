//  der datensatz wird immer mehrmals geaden -> fehler kommt vonder api

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data))
      .catch((error) => console.error("product data fetching error:", error));
  }, []);
  console.log({ randomBeer });

  return (
    <>
      <section className="beer-detail">
        <article>
          {randomBeer ? (
            <div className="product">
              <div className="img-container">
                <img src={randomBeer.image_url} alt="" />
              </div>
              <h1>{randomBeer.name}</h1>
              <h2>{randomBeer.tagline}</h2>

              <div className="stats-container">
                <div className="stats">
                  <p>First brewed:</p>
                  <p>{randomBeer.first_brewed}</p>
                </div>
                <div className="stats">
                  <p>Attenuation level:</p>
                  <p>{randomBeer.attenuation_level}</p>
                </div>
              </div>
              <h3>{randomBeer.description}</h3>
            </div>
          ) : (
            <p>loading...</p>
          )}
        </article>
        <div className="back">
          <Link to={`/beers`}>
            <img src="/img/Back.svg" alt="back icon" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RandomBeer;
