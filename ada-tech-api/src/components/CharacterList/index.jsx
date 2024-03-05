import CharacterCard from '../CharacterCard';
import PropTypes from 'prop-types';
import './styles.css';

const CharacterList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
