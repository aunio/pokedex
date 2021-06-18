import React from 'react';
import imgPikachuRunning from '../../img/pikachuRunning.gif'

import './Loader.css'


const Loader = () => {
    return (
        <div
            className="loader"
        >
            <div>
                <img src={imgPikachuRunning} />
                <div>
                    <span>Carregando Pokédex...</span>
                </div>
            </div>

        </div>
    )
}

export default Loader;
