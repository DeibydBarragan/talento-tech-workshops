import React from 'react';

const Child = ({ name, setName, addMessage }) => {
    const sendMessage = () => {
        addMessage("Este es el mensaje del HIJO");
    }

    const changeName = () => {
        setName("Nuevo nombre hijo");
    }
    
    return (
    <div>
        {name}
        <div>
        <button
            onClick={ sendMessage }
            >
            Enviar Mensaje
        </button>
        <button onClick={ changeName }>Cambiar Nombre</button>
        </div>
    </div>
    )
}

export default Child;
