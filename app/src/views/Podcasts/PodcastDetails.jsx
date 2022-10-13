import { useLocation } from "react-router-dom";

const PodcastDetails = () => {
  const location = useLocation();
  console.log(location?.state);
  return (
    <section className="Podcast">
      <div className="Podcast-container">
        <div className="Podcast-top">
          <img
            className="Podcast-image"
            src={location?.state.podcast.image}
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
        <div className="Podcast-main">
          <h2 className="Podcast-title">{location?.state.podcast.title}</h2>
          <p className="Podcast-text">{`by ${location?.state.podcast.author}`}</p>
        </div>
        <div className="Podcast-bottom">
          <h2 className="Podcast-title">Description</h2>
          <p className="Podcast-text">{location?.state.podcast.description}</p>
        </div>
      </div>
    </section>
  );
};

export default PodcastDetails;
