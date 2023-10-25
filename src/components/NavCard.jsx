import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavCard = (props) => {
  // console.log(props);
  return (
    <section className="nav-card">
      <article>
        <div
          className="bg-container"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <NavLink to={props.page}>
            <div className="option">
              <h1>{props.option}</h1>
            </div>
          </NavLink>
        </div>
        <p className="nav-text">{props.text}</p>
      </article>
    </section>
  );
};

export default NavCard;
