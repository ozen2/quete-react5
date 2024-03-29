import PropTypes from 'prop-types';



function PokemonCard({ pokemon }) {

    return (
        <>
            <figure>
               <img src={pokemon.imgSrc} alt={pokemon.name} />
            </figure>
            <figcaption>{pokemon.name}</figcaption>
        </>
    )
}

export default PokemonCard;
