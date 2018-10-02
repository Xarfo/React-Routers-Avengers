import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import AvengerInfo from "./AvengerInfo";
import AvengerMovies from "./AvengerMovie";

function Avenger(props) {
  const avenger = props.avengersList.find(
    avenger => `${avenger.id}` === props.match.params.id
  );

  return (
    <Fragment>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character=intro-wrapper">
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
        <nav>
          <Link to={`/avengers/${avenger.id}/info`}>Info</Link>
          <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>
        </nav>
        <Route
          path="/avengers/:id/info"
          render={props => <AvengerInfo {...props} avenger={avenger} />}
        />
        <Route
          path="/avengers/:id/movies"
          render={props => <AvengerMovies {...props} avenger={avenger} />}
        />
      </div>
    </Fragment>
  );
}

Avenger.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  location: PropTypes.shape({}),
  history: PropTypes.shape({})
};

export default Avenger;
