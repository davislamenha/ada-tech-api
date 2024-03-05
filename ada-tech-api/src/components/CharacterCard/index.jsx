import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
