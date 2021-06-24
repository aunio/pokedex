import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './PokemonCard.css'

const PokemonCard = ({ pokemon }) => {

    return (
        <>
            <Card
                className={`pokemonCard ${pokemon.types[0].type.name}Type`}
            >
                <Link
                    to={`/pokemon/${pokemon.id}`}
                    className="pokemonCard__linkImage">  
                    <Card.Header>
                        <Row>
                            <Col xs={8}>
                                <div className="pokemonCard__pokemonNameContent">
                                    <h2 className="pokemonCard__pokemonName">{pokemon.name}</h2>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="pokemonCard__pokemonNumberContent">
                                    {pokemon.order < 10 && ( <h2 className="pokemonCard__pokemonNumber">#00{pokemon.order}</h2> )}
                                    {pokemon.order > 9 && pokemon.order < 100 && ( <h2 className="pokemonCard__pokemonNumber">#0{pokemon.order}</h2> )}
                                    {pokemon.order > 99 && ( <h2 className="pokemonCard__pokemonNumber">#{pokemon.order}</h2> )}
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="pokemonCard_pokemonImageContent">
                                    <Card.Img
                                        style={{ width: '9rem' }}
                                        src={pokemon.sprites.front_default}
                                        variant='top'
                                    >
                                    </Card.Img>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={12}>
                                <p className="title">Type</p>
                                <div className="pokemonCard__pokemonTypesContent">
                                    <Row>

                                    { pokemon.types.length == 1 ? (
                                        <Col xs={12}>
                                            <span className={`pokemonCard__pokemonType ${pokemon.types[0].type.name}Type`}>{pokemon.types[0].type.name}</span>
                                        </Col>
                                    ) : (
                                        <>
                                            <Col xs={6}>
                                                <span className={`pokemonCard__pokemonType ${pokemon.types[0].type.name}Type`}>{pokemon.types[0].type.name}</span>
                                            </Col>
                                            <Col xs={6}>
                                                <span className={`pokemonCard__pokemonType ${pokemon.types[1].type.name}Type`}>{pokemon.types[1].type.name}</span>
                                            </Col>
                                        </>
                                    )}

                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Link>
            </Card>
        </>
    )
}

export default PokemonCard;