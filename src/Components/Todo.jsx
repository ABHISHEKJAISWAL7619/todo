import React, { useRef, useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdDelete, MdAddTask } from "react-icons/md";

const Todo = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const taskRef = useRef();
  const descriptionRef = useRef();
  const [arr, setArr] = useState([
    {
      Sno: "1",
      Name: "Abhishek",
      Date: "21/01/2000 T 20:15",
      TaskStatus: { status: "Complete", emoji: "✔️" },
      Description: "i see soon",
    },
    {
      Sno: "2",
      Name: "Abhi",
      Date: "21/02/2000 T 21:15",
      TaskStatus: { status: "Pending", emoji: "⏰" },
      Description: "i come soon",
    },
    {
      Sno: "3",
      Name: "AbhiJai",
      Date: "21/01/2000 T 20:15",
      TaskStatus: { status: "Complete", emoji: "✔️" },
      Description: "i see soon",
    },
  ]);

  const AddTodo = (e) => {
    e.preventDefault();
    const statusValue = taskRef.current.value;
    let statusObj = { status: "", emoji: "" };

    // Check if the selected status is not the default "Select status"
    if (statusValue === "Select status") {
      alert("Please select a valid status.");
      return; // Prevent adding a todo with invalid status
    }

    // Mapping status strings to objects
    switch (statusValue) {
      case "Pending":
        statusObj = { status: "Pending", emoji: "⏰" };
        break;
      case "Processing":
        statusObj = { status: "Processing", emoji: "✔️" };
        break;
      case "Complete":
        statusObj = { status: "Complete", emoji: "✔️" };
        break;
      default:
        statusObj = { status: "Unknown", emoji: "" };
    }

    const newTodo = {
      Sno: (arr.length + 1).toString(),
      Name: nameRef.current.value,
      Date: dateRef.current.value,
      TaskStatus: statusObj,
      Description: descriptionRef.current.value,
    };
    setArr([...arr, newTodo]);
    console.log(newTodo);
    // Clear inputs after adding
    nameRef.current.value = '';
    dateRef.current.value = '';
    taskRef.current.value = 'Select status';
    descriptionRef.current.value = '';
  };

  const handleAllClear = () => {
    setArr([]);
  };

  const handleDelete = (index) => {
    const updatedArr = arr.filter((_, i) => i !== index);
    setArr(updatedArr);
  };

  return (
    <div>
      <center>
        <div className="inputbardiv container inputtab">
          <BsClockHistory />
          <input
            className="inputbar"
            ref={nameRef}
            type="text"
            placeholder="Enter Todo name"
          />
          <input
            className="inputbar"
            ref={dateRef}
            type="datetime-local"
            placeholder="Enter Todo date and time"
          />
          <select ref={taskRef} className="form-select selectoption inputbar" aria-label="Default select example">
            <option>Select status</option> {/* Default placeholder option */}
            <option value="Pending">Pending ⏰</option>
            <option value="Processing">Processing ✔️</option>
            <option value="Complete">Complete ✔️</option>
          </select>
          <input
            className="inputbar"
            ref={descriptionRef}
            type="text"
            placeholder="Description"
          />
          <button
            className="btn btn-success addtodobtn inputbar"
            onClick={AddTodo}
          >
            <MdAddTask className="addbtn" />
          </button>
        </div>
      </center>

      {arr.length === 0 ? (
        <center style={{ margin: 40 }}>
          <h1>KEEP ENJOY YOUR DAY</h1>
        </center>
      ) : (
        <table className="table m-auto w-75">
          <thead>
            <tr>
              <th>S.no <BsClockHistory /></th>
              <th>Name</th>
              <th>Date&Time</th>
              <th>Status</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arr.map((todo, index) => (
              <tr key={todo.Sno}>
                <td>{todo.Sno}</td>
                <td>{todo.Name}</td>
                <td>{todo.Date}</td>
                <td>{todo.TaskStatus.status} {todo.TaskStatus.emoji}</td>
                <td>{todo.Description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger hdelete"
                  >
                    <MdDelete className="icondlt" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {arr.length > 0 && (
        <center>
          <button onClick={handleAllClear} className="btn btn-dark">
            All clear
          </button>
        </center>
      )}
    </div>
  );
};

export default Todo;
