import NavCard from "../components/NavCard";

const Home = () => {
  return (
    <>
      <NavCard
        page="/beers"
        img="/img/all-beers.png"
        option="All Beers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
      />

      <NavCard
        page={`/beers/random/:id`}
        img="/img/random-beer.png"
        option="Random Beer"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
      />
    </>
  );
};

export default Home;
