import React from 'react'

const PokemonList = ({ pokemon }) => {

    return (
        <ul>
            {
                pokemon.map((mon, i) => {
                    return <li key={i}>
                        {mon.name}
                    </li>
                })
            }
        </ul>
    )
}

export default PokemonList