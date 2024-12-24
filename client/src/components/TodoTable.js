import React from 'react';

const TodoTable = ({ todos, onEdit, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">To-Do List</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr key={todo._id}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.age}</td>
                <td>{todo.phonenumber}</td>
                <td>{todo.address}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => onEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(todo._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
