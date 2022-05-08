import React from "react";
import { useState } from "react";

const Add_task = () => {

    let [coupapcnt, setCount] = useState(0);

    const incnum = () => {
        setCount(count++);
        console.log("clicked" + count++);
    }



    return (
        <div>
            <h1>Add Task</h1>
            <button onClick={incnum}>
                click me
            </button>
        </div>
    )
}

export default Add_task