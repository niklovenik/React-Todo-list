function Task(props) {

    return (
        <div style={{
            backgroundColor: "black", color: "white", textAlign: "center",
            marginLeft: "40%", marginTop: "40px", width: "30%"
        }}>

            <p>{props.task_data}</p>
            <p>{props.last_date} </p>
            <p>{props.status} </p>
        </div>
    )
}
export default Task