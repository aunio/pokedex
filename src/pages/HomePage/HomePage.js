import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

import './HomePage.css'

// components
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokedexLoader from '../../components/PokedexLoader/PokedexLoader'

const HomePage = () => {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemons = async () => {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++) {
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
            {loading ? (
                <PokedexLoader />
            ) : (
                <Container className="homePageContent">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2 className="mainTitle">Pokédex</h2>
                        </Col>
                        {/* <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <input type="text" className="mainSearch" />
                        </Col> */}
                        {pokemon.map(pokemon => (
                            <Col key={pokemon.data.name} xs={12} sm={12} md={6} lg={6} xl={4}>
                                <PokemonCard pokemon={pokemon.data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </>
    )
}

export default HomePage
