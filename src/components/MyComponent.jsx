import React from 'react';

const MyComponent = () => {
    const name = "Deibyd";
    const repository = "https://github.com/DeibydBarragan/talento-tech-workshops/tree/comunicacion-eventos";
  
    const student = {
      name: "Santiago",
      lastName: "Barragán",
      mobile: "30000000",
      linkedinProfile: "https://www.linkedin.com/in/deibyd-barragan-68b59018b/"
    }
  
    console.log(student);
  
    return (
      <div>
          <hr/>
          <p>Este es mi Primer Componente</p>
          <h2>Temas de React</h2>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados - Hooks</li>
              <li>Comunicación</li>
          </ul>
          <hr />
          <h2>Datos del Docente</h2>
          <p>Nombre: { name }</p>
          <p>Repositorio:</p>
          <p>{ repository }</p>
          <hr />
          <h2>Datos del estudiante</h2>
          <p>Nombre: { student.name }</p>
          <p>Apellido: { student.lastName }</p>
          <p>Celular: { student.mobile }</p>
          <p>Perfil de LinkedIn:</p>
          <p>{ student.linkedinProfile }</p>
      </div>
    );
}

export default MyComponent;
