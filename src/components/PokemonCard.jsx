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

export default PokemonCard;