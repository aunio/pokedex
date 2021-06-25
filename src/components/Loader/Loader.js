import React from 'react';
import imgPikachuRunning from '../../assets/img/loading.gif'

import './Loader.css'


const Loader = () => {
    return (
        <div
            className="loader"
        >
            <div>
                <img src={imgPikachuRunning} />
            </div>

        </div>
    )
}

export default Loader;