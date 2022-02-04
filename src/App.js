import { useState } from 'react';
import { Header } from './components/Header';
import Tasks from './components/Tasks';
import { AddTask } from './components/AddTask';
function App() {
  //we place this list here, so we can use it in another components as well
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 10th at 6 PM',
      reminder: false,
    },
  ]);

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
      <Header></Header>
      <AddTask onAdd={addTask}></AddTask>
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
