import PropTypes from 'prop-types';



function PokemonCard({ pokemon }) {

    return (
        <>
            <figure>
                {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />
                ) : (
                    <p>???</p>
                )}
            </figure>
            <figcaption>{pokemon.name}</figcaption>
        </>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  

export default PokemonCard;