import { useState, useEffect } from "react";

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
    id: 1,
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
  }, [todoTasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const updateTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: editedTaskText } : task
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
    <div>
      <h2>Task 1</h2>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button onClick={() => updateTask(task.id)}>Update</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task1;
