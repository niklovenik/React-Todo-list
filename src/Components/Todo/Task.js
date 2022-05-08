import { useState } from 'react'

function Task(props) {
  const [completed, setCompleted] = useState(0); // 0/1

  const updateState = () => {
    // toggle completed value 0 | 1
    // let toggledValue = 0;
    // if (completed == 0) {
    //   toggledValue = 1
    // } else {
    //   toggledValue = 0s
    // }



    setCompleted(toggledValue)
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        marginTop: "10px",
        width: "60%",
        margin: "0 auto"
      }}
    >
      <table style={{ border: "1px solid white", margin: "0 auto" }}>
        <tbody >
          <tr>
            <td style={{ width: "200px" }}>{props.task_data} </td>
            <td style={{ width: "200px" }}>{props.last_date} </td>
            <td style={{ width: "200px" }}>{completed}</td>
            <td style={{ width: "100px" }}>
              <button onClick={updateState} >
                Update Status
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* 
        <p>{props.task_data}</p>
        <p>{props.last_date} </p>
        <p>{props.status} </p>
        <p>{completed ? "Done" : "Pending"}</p>
          */}
    </div>
  )
}
export default Task