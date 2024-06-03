import React from 'react';
import PropTypes from 'prop-types';

const ThirdComponent = ({ name, lastName, card }) => {
    return (
        <div>
            <h2>Comunicación entre Componentes</h2>
            <ul>
                <li>{ name }</li>
                <li>{ lastName }</li>
                <li>{ card.height }</li>
            </ul>
        </div>
      )
}

ThirdComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    card: PropTypes.object
}

export default ThirdComponent;
