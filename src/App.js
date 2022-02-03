import { useState } from 'react';
import { Header } from './components/Header';
import Tasks from './components/Tasks';
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
  //whatever you return, has to have a single parent
  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
