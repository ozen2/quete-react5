function NavBar({ handleClick, handleClick2, pokemonIndex, pokemonList, setPokemonIndex }) {
    return (
        <>
            {pokemonList.map((pokemonList, setPokemonIndex) => (
                <button key={pokemonList.name} onClick={() => { handleClick() }}>{pokemonList.name}</button>
            ))}
        </>
    )
}

export default NavBar;
