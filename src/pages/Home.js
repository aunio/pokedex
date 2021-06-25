import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

// components
import PokemonCard from '../components/PokemonCard/PokemonCard'
import Loader from '../components/Loader/Loader'

const Home = () => {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemons = async () => {
        let pokemonArray = [];
        for(let i = 1 ; i <= 151 ; i++) {
            pokemonArray.push(await getPokemonData(i))
        }

        console.log(pokemonArray)
        setPokemon(pokemonArray)
        setLoading(false)

    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res;
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return (
        <>
            { loading ? (
                <Loader />
            ) : (
                <Row>
                    <Col xs={12}>
                        <h2>POKEDEX</h2>
                    </Col>
                    { pokemon.map( pokemon => (
                        <Col key={pokemon.data.name} xs={12} sm={12} md={6} lg={6} xl={4}>
                            <PokemonCard pokemon={pokemon.data} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default Home
