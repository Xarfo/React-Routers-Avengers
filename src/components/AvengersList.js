import React from "react";
import PropTypes from "prop-types";

function AvengersList(props) {
  return (
    <div className="characters-list-wrapper">
      {props.avengersList.map(a => (
        <div className="character-card" key={a.id}>
          <img src={a.thumbnail} alt={a.name} />
          <h3 onClick={() => props.history.push(`/avengers/${a.id}/info`)}>
            {a.name}
          </h3>
          <p>{a.nickname}</p>
          <p>{a.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AvengersList;

AvengersList.propTypes = {
  avengersList: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
