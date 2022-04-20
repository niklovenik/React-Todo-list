import Heading from "./Heading";
import Task from "./Task";
import Data from "./Data";

function Main() {
    console.log(Data[0].task_data)
    return (
        <div>
            <Heading />
            {Data.map(item => {
                return <Task
                    task_data={item.task_data}
                    status={item.status}
                    last_date={item.last_date} />
            }
            )}

        </div>
    );
}
export default Main


