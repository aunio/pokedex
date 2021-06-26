import React from 'react';
import imgLoading from '../../assets/img/loading.gif'

import './PokedexLoader.css'


const PokedexLoader = () => {
    return (
        <div className="pokedexLoader">
            <div>
                <img src={imgLoading} />
            </div>
        </div>
    )
}

export default PokedexLoader;