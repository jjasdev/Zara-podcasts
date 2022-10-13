import CardList from "../../components/Cards/CardList";

const Home = () => {
  return (
    <main className="Home">
      <section className="Home-search">
        <p className="Home-tag">{100}</p>
        <input
          className="Home-input"
          type="search"
          id="search"
          name="search"
          placeholder="Filter podcasts..."
        />
      </section>
      <CardList />
    </main>
  );
};

export default Home;
