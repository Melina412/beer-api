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
  // console.log({ beerDetail });

  const id_params = useParams();
  // console.log({ id_params });
  // console.log("id_params.id:", id_params.id);

  const beer_info = beerDetail?.filter((element) => {
    return element._id.toString() === id_params.id;
  });
  // console.log({ beer_info });

  // useParams():
  // 1. Link zur Detailseite wird über die BeerCard-Komponente mit props erstellt
  // ~~ <Link to={`/beers/${props.id}`}>Details</Link>
  // 2. die jeweilige _id wird auf BeerList.jsx aus den Datensätzen ausgelesen und id zugeordnet
  //  ~~ id={item._id}
  // 3. in App.jsx wird in der Route der Teil des Pfads bestimmt, der als Parameter genutzt werden soll
  //   ~~ <Route path="/beers/:id" element={<BeerDetail />} />
  // 4. auf BeerDetail.jsx wird dieser Parameter nun dazu genutzt, das Element aus dem Array zu filtern,
  //    dessen _id mit mit dem id-Parameter aus dem Pfad übereinstimmt.
  // const id_params = useParams();
  //   const beer_info = beerDetail?.filter((element) => {
  //  return element._id.toString() === id_params.id;        });

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
