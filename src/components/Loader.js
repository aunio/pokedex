import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

const Loader = () => {
    return (
        <div
            className="d-flex justify-content-center mt-5"
        >
            <Row>
                <Col>
                    <Spinner
                        className="spinner-border spinner-border-lg"
                        role="status"
                    >
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div
                        className="mx-3"
                    >
                        <span>Fetching Pokémon...</span>

                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Loader;
