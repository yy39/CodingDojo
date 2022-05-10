import React from 'react'

const PokemonList = (props) => {

    return (
        <ul>
            {
                props.pokemon.map((pokemon, i) => {
                    return <li key={i}>
                        {pokemon.name}
                    </li>
                })
            }
        </ul>
    )
}

export default PokemonList