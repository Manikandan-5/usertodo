import React, { useRef, useState, useEffect } from 'react';

const TodoForm = ({ currentTodo, onSubmit, clearForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phonenumber: '',
    address: '',
  });

//   input ref focus

  const nameInputRef = useRef(null); 

  useEffect(() => {
    if (currentTodo) {
      setFormData(currentTodo);
      nameInputRef.current.focus(); 
    } else {
      clearFields();
    }
  }, [currentTodo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    clearFields();
    clearForm(); 
  };

  const clearFields = () => {
    setFormData({
      name: '',
      age: '',
      phonenumber: '',
      address: '',
    });
    nameInputRef.current.focus(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    clearFields();
  };

  return (
    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
      <h4 className="mb-3">{currentTodo ? 'Edit Todo' : 'Add Todo'}</h4>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          ref={nameInputRef} 
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          className="form-control"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          className="form-control"
          value={formData.phonenumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea
          id="address"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          {currentTodo ? 'Update' : 'Add'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
