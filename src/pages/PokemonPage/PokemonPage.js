import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-bootstrap';

// Css
import './PokemonPage.css'

// Components

const PokemonPage = ({ match }) => {

    const id = match.params.id;
    console.log(id)

    return (
        <div>
            <h1>AAA</h1>
        </div>
    )
}

export default PokemonPage