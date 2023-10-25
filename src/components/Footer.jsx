import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to={"/"}>
        <div>
          <img src="/img/bier-1.svg" alt="beer icon" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
