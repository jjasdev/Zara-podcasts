import PropTypes from "prop-types";
import { Podcast } from "../../models/Podcast";
import { Link } from "react-router-dom";

const Card = ({ podcast }) => {
  return (
    <li className="Card-item">
      <Link
        className="Card-link"
        alt={`Imagen ${podcast.title}`}
        to={`/podcasts/${podcast.id}`}
        state={{
          podcast: podcast,
        }}
      >
        <img
          className="Card-image"
          src={podcast.image}
          loading="lazy"
          width={100}
          height={100}
        />
      </Link>
      <h2 className="Card-title">{podcast.title}</h2>
      <p className="Card-description">
        <span className="Card-description--strong">Autor: </span>
        {podcast.author}
      </p>
    </li>
  );
};

Card.propTypes = {
  podcast: PropTypes.instanceOf(Podcast).isRequired,
};

export default Card;
