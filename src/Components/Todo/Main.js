import Heading from "./Heading";
import Task from "./Task";
import Data from "./Data";
import Task2 from "./Task2";
// import Add_task from "./Add_task";

function Main() {
    console.log(Data[0].task_data)
    return (
        <div>
            <Heading />

            <Task2 name={"pom pom ki teacher"} />

            {Data.map((item, index) => {
                return <Task
                    key={index}
                    task_data={item.task_data}
                    status={item.status}
                    last_date={item.last_date} />
            }
            )}

            {/* <Add_task /> */}

        </div>
    );
}
export default Main


