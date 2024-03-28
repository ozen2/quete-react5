function NavBar({ handleClick, handleClick2, pokemonIndex, pokemonList }) {
    return (
        <>
            {pokemonIndex > 0 ? < button onClick={handleClick}>Précédent</button> : <></>}
            {pokemonIndex < pokemonList.length - 1 ? < button onClick={handleClick2}>Suivant</button> : <></>}
        </>
    )
}

export default NavBar;