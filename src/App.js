import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import Tasks from './components/Tasks';
import { AddTask } from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  //we place this list here, so we can use it in another components as well
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      console.log(data);
    };
    fetchTasks();
  }, []);
  //Delete Task

  const deleteTask = (id) => {
    //I wanna show only the tasks that have a different id (because this id corresponds to a 'deleted' task)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //whatever you return, has to have a single parent
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        'No Task To Show'
      )}
    </div>
  );
}

export default App;
