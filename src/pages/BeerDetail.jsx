import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const BeerDetail = () => {
  const [beerDetail, setBeerDetail] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeerDetail(data))
      .catch((error) => console.error("product data fetching error:", error));
  }, []);
  console.log({ beerDetail });

  const id_params = useParams();
  console.log({ id_params });
  console.log("id_params.id:", id_params._id);

  const beer_info = beerDetail?.filter((element) => {
    return element._id.toString() === id_params._id;
  });
  console.log({ beer_info });
  return (
    <>
      <section className="beer-detail">
        <article>
          {beer_info ? (
            beer_info.map((item, index) => (
              <div key={index} className="product">
                <div className="img-container">
                  <img src={item.image_url} alt="" />
                </div>
                <h1>{item.name}</h1>
                <h2>{item.tagline}</h2>

                <div className="stats-container">
                  <div className="stats">
                    <p>First brewed:</p>
                    <p>{item.first_brewed}</p>
                  </div>
                  <div className="stats">
                    <p>Attenuation level:</p>
                    <p>{item.attenuation_level}</p>
                  </div>
                </div>
                <h3>{item.description}</h3>
              </div>
            ))
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

export default BeerDetail;
