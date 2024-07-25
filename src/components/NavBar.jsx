function NavBar({ handleClick, pokemonList }) {
    return (
        <>
            {pokemonList.map((pokemonList, index) => (
                <button key={pokemonList.name} onClick={ () => handleClick(index)}>{pokemonList.name}</button>
            ))}
        </>
    )
}

export default NavBar;
