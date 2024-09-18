import React, { useRef, useState } from "react";
import { TbH1, TbProgressCheck } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";

const Todoicon = () => {
  let nameRef = useRef();
  let dateRef = useRef();
  let taskRef = useRef();
  let descriptionRef = useRef();
  const [arr, setarr] = useState([
    {
      Sno: "1",
      Name: "Abhishek",
      Date: "21/01/2000 T 20:15",
      TaskStatus: "Complete",
      Description: "i see soon",
    },
    {
      Sno: "2",
      Name: "Abhi",
      Date: "21/02/2000 T 21:15",
      TaskStatus: "Pending",
      Description: "i come soon",
    },
    {
      Sno: "3",
      Name: "AbhiJai",
      Date: "21/01/2000 T 20:15",
      TaskStatus: "Complete",
      Description: "i see soon",
    },
  ]);
  const AddTodo = (e) => {
    e.preventDefault();
    let obj = {
      Sno: (arr.length + 1).toString(),
      Name: nameRef.current.value,
      Date: dateRef.current.value,
      TaskStatus: taskRef.current.value,
      Description: descriptionRef.current.value,
    };
    setarr([...arr, obj]);
    console.log(obj);
  };

  const handleallclear = () => {
    setarr([]);
  };

  const handledelete = (i) => {
    let copyarr = [...arr];
    copyarr.splice(i, 1);
    setarr(copyarr);
    // setarr([])
  };

  return (
    <div>
      <center>
        <div className="inputbardiv  container inputtab">
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
  <option selected>Select status </option>
  <option value="Pending " className="active">  Pending </option>
  <option value="Processing">Processing </option>
  <option value="Complete">complete </option>
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
      {arr.length <= 0 && (
        <center style={{ margin: 40 }}>
          {" "}
          <h1> KEEP ENJOY YOUR DAY</h1>
        </center>
      )}
      {arr.length >= 1 && (
        <table className="table m-auto w-75 ">
          <thead>
            <tr>
              <th scope="col">
                S.no 
              </th>
              <th scope="col">Name</th>
              <th scope="col">Date&Time</th>
              <th scope="col">
                {" "}
                Status
              </th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {arr.map((ele) => {
              return (
                <>
                  <tr>
                    <td>{ele.Sno}</td>
                    <td> {ele.Name}</td>
                    <td>{ele.Date}</td>
                    <td>{ele.TaskStatus}</td>
                    <td>{ele.Description}</td>
                    <td>
                      <button
                        onClick={handledelete}
                        className="btn btn-danger hdelete"
                      >
                        <MdDelete className="icondlt" />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
      {arr.length >= 1 && (
        <center>
          <button onClick={handleallclear} className="btn btn-dark  allclearbtn ">
            All clear
          </button>
        </center>
      )}
      {arr.length >= 1 &&  (<center><p> <h5 style={{display:'inline' ,float:"unset",marginRight:'250px'}}>Note 👉  All Field Fill mandatory</h5>       </p></center>)}
    </div>
  );
};

export default Todoicon;