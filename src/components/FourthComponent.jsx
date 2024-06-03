import React from 'react';

const FourthComponent = () => {
    const handleClicked = (e) => {
        alert("Has hecho click al botón!");
      }
    
      const handleDoubleClicked = (e) => {
        alert("Has hecho doble click al botón!");
      }
      // onMouseEnter y onMouseLeave con dos funciones
        const handleMouseEnter = (e) => {
        console.log("Has entrado a mi caja con el Mouse!")
      }
    
      const handleMouseLeave = (e) => {
        console.log("Has salido de mi caja!")
      }
    
      // onMouseEnter y onMouseLeave con una sola función con Alert
      const handleMouse = (e, action) => {
        alert(`Has ${action}  la caja`);
      }
    
      // onMouseEnter y onMouseLeave con una sola función con  Console Log
      const handleMouseCl = (e, action) => {
        console.log(`Has ${action}  la caja`);
      }
    
      // onFocus
      const insideInput = (e) => {
        console.log("Estás dentro del input, escribe tu nombre!");
      }
    
      // onBlur
      const outsideInput = (e) => {
        console.log("Estás FUERA del input, Adiós!")
      }
    
      return (
        <div>
            <h2>Eventos en React</h2>
            {/* Evento Click */}
            <div>
              <button onClick={ () => {
                  console.log("Hola, soy un evento Click!!");
              } }>Haz Click!!</button>
            </div>
            <div>
              <button onClick={ handleClicked }>Aquí también haz Click!!</button>
            </div>
    
            {/* Evento Doble Click */}
            <div>
              <button onDoubleClick={ handleDoubleClicked }>Haz doble click!!</button>
            </div>
    
            {/* Evento Mouse Enter y Mouse Leave */}
            <hr />
            <div id="box">
              <div id="box1"
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
              >
                <p>Pasa el Mouse por encima!!!</p>
              </div>
              <div id="box2"
                onMouseEnter={ e => handleMouse(e, "entrado a") }
                onMouseLeave={ e => handleMouse(e, "salido de") }
              >
                <p>Pasa el Mouse por encima!!!</p>
              </div>
              <div id="box3"
                onMouseEnter={ e => handleMouseCl(e, "entrado a") }
                onMouseLeave={ e => handleMouseCl(e, "salido de") }
              >
                <p>Pasa el Mouse por encima!!!</p>
              </div>
            </div>
            {/* Evento Focus y Blur se usan en el input */}
            <div className='mt-4'>
              <input type="text"
                onFocus={ insideInput }
                onBlur={ outsideInput }
                placeholder='Escribe tu nombre'
              />
            </div>
        </div>
      )
}

export default FourthComponent;
