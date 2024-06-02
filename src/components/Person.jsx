import React from 'react';

const Person = ({ id, name, role, img, handleEdit, handleDelete }) => {

  return (
    <>
      <div class="card w-96 bg-base shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{role}</p>
          <div class="card-actions justify-end">
            <button 
              class="btn btn-primary"
              onClick={() => handleEdit(id)}
            >
              Edit
            </button>
            <button className="btn btn-error" onClick={()=>document.getElementById('confirmation').showModal()}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <dialog id="confirmation" className="modal">
        <div className="modal-box flex flex-col gap-3">
          <h3 className="font-bold text-lg">Are you sure you want to delete this person?</h3>
          <button
            className="btn btn-error w-fit"
            onClick={() => {
              handleDelete(id);
              document.getElementById('confirmation').close();
            }}
          >
            Delete
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Person;
