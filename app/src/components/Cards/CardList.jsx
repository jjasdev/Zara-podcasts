import { useQuery } from "@tanstack/react-query";
import { getAllPodcasts } from "../../services/fetchData";
import Card from "./Card";
import { Podcast } from "../../models/Podcast";

const CardList = () => {
  const {
    data: podcasts,
    isSuccess,
    isLoading,
    isError,
  } = useQuery(["podcasts"], async () => await getAllPodcasts());

  const createPodcast = (podcast) => {
    const newPodcast = new Podcast(
      podcast.id.attributes["im:id"],
      podcast["im:name"].label,
      podcast["im:artist"].label,
      podcast["im:image"][2].label,
      podcast.summary.label
    );
    return newPodcast;
  };

  const filterPodcasts = () => {
    if (filter === undefined) {
      podcasts?.feed.entry.map((card) => (
        <Card key={card.id.attributes["im:id"]} podcast={createPodcast(card)} />
      ));
    } else {
      podcasts?.feed.entry
        .filter((podcast) => {
          podcast["im:name"].label === filter ||
            podcast["im:artist"].label === filter;
        })
        .map((card) => (
          <Card
            key={card.id.attributes["im:id"]}
            podcast={createPodcast(card)}
          />
        ));
    }
  };

  if (isLoading) {
    return (
      <section className="Card">
        <div>Cargando...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="Card">
        <div>Error al cargar los datos</div>
      </section>
    );
  }

  return (
    <section className="Card">
      <ul className="Card-list">
        {isSuccess &&
          podcasts?.feed.entry.map((card) => (
            <Card
              key={card.id.attributes["im:id"]}
              podcast={createPodcast(card)}
            />
          ))}
      </ul>
    </section>
  );
};

export default CardList;
