import { Link } from "react-router-dom";

const BeerCard = (props) => {
  console.log(props);
  return (
    <article className="beer-card">
      <div className="img-container">
        <img className="product-img" src={props.img_url} alt={props.name} />
      </div>
      <div className="text">
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <h3>Created by: {props.name}</h3>
        <Link to={`/beers/${props.id}`}>Details</Link>
      </div>
    </article>
  );
};

export default BeerCard;
