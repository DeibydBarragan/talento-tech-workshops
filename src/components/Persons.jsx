import React, { useState } from 'react';
import Person from './Person';

const Persons = ({ persons, setPersons}) => {

  const [personToEdit, setPersonToEdit] = useState(null);

  const [personToAdd, setPersonToAdd] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  }

  const handleEdit = (id) => {
    const person = persons.find(person => person.id === id);
    setPersonToEdit(person);
    setIsEditing(true);
  }

  const handleOnChangeName = (e) => {
    isEditing ? setPersonToEdit({ ...personToEdit, name: e.target.value })
    : setPersonToAdd({ ...personToAdd, name: e.target.value });
  } 

  const handleOnChangeRole = (e) => {
    isEditing ? setPersonToEdit({ ...personToEdit, role: e.target.value })
    : setPersonToAdd({ ...personToAdd, role: e.target.value });
  }

  const handleOnChangeImg = (e) => {
    isEditing ? setPersonToEdit({ ...personToEdit, img: e.target.value })
    : setPersonToAdd({ ...personToAdd, img: e.target.value });
  }

  const handleUpdate = () => {
    const updatedPersons = persons.map(person => {
      if (person.id === personToEdit.id) {
        return personToEdit;
      }
      return person;
    });
    setPersons(updatedPersons);
    setPersonToEdit(null);
    setIsEditing(false);
  }

  const handleAdd = () => {
    setPersons([...persons, { ...personToAdd, id: persons.length + 1 }]);
    setPersonToAdd(null);
  }

  return (
    <div className='flex h-screen w-full justify-center gap-4 mt-8'>
      <div className='flex flex-col gap-4'>
        <input 
          type='text' 
          placeholder='Name'
          className='input input-bordered'
          value={personToEdit?.name || personToAdd?.name || ''}
          onChange={handleOnChangeName}
        />
        <input 
          type='text' 
          placeholder='Role'
          className='input input-bordered' 
          value={personToEdit?.role || personToAdd?.role || ''}
          onChange={handleOnChangeRole}
        />
        <input
          type='text'
          placeholder='Image'
          className='input input-bordered'
          value={personToEdit?.img || personToAdd?.img || ''} 
          onChange={handleOnChangeImg}
        />
        {isEditing ? (
          <button 
            className='btn btn-secondary'
            onClick={handleUpdate}
          >
            Update Person
          </button>
          ):
          <button 
            className='btn btn-primary'
            onClick={handleAdd}
          >
            Add Person
          </button> 
        }
        
      </div>
      <div className='grid grid-cols-2 gap-4'>
          {persons.map(person => (
            <Person
              key={person.id}
              {...person}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
    
  );
}


export default Persons;
