function TaskCard({task, expanded}) {
    return(
        <article className={expanded? "task-card showing-all" : "task-card"}>
            <div className="left">
                <input type="checkbox" />
            </div>

            <div className="middle">
                <h3>{task.name}</h3>
                <p>Due Date: {task.dueDate}</p>
                <p>Project: {task.project}</p>
            </div>

            <div className="right">
                <span className={`priority ${task.priority}`}>
                    {task.priority}
                </span>
            </div>
        </article>
    )
}
export default TaskCard