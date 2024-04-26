import { useState, useEffect } from "react";
import "./tasks-styles.css";

const todoTasks = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
];

const Task1 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  useEffect(() => {
    setTasks(todoTasks);
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), title: newTask }]);
      setNewTask("");
    }
  };

  const updateTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditedTaskText("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className=".task1">
      <h2>Task 1</h2>
      <input
        type="text"
        className="inputItem"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={"btn"} onClick={addTask}>
        Add
      </button>

      <div>
        {tasks.map((task) => (
          <div className="todoItemsContainer" key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  className="inputItem"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button className={"btn"} onClick={() => updateTask(task.id)}>
                  Update
                </button>
              </>
            ) : (
              <div className="btnContainer">
                {task.title}
                <button
                  className={"btn"}
                  onClick={() => setEditingTaskId(task.id)}
                >
                  Edit
                </button>
                <button
                  className={"btn deleteBtn"}
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task1;
